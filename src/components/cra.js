import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in.
    const userDocRef = doc(db, 'users', user.uid); // Reference to the user's document using their UID

    // Prepare data to save/update.
    // user.email comes from Firebase Auth.
    // user.displayName might be available from Auth, or you might have a separate username field in Firestore.
    // The schedule would be managed by your app. For a new user, it might be an empty array or default.
    const userData = {
      email: user.email,
      username: user.displayName || 'New User', // Or prompt for a username if displayName isn't set
      // You might also add a default schedule or an empty array for a new user
      // For existing users, you'd fetch their existing schedule.
      // For this example, let's assume we're just setting/updating core user info.
      // If the schedule is app-generated, you'd have a separate function to generate and update it.
      // For simplicity, let's say we only add 'schedule' if it doesn't exist or is empty.
      schedule: [] // Initialize with an empty schedule for new users or if not present
    };

    try {
      // Use setDoc with { merge: true } to create the document if it doesn't exist,
      // or update it without overwriting other fields (like an existing schedule)
      // if it does exist.
      await setDoc(userDocRef, userData, { merge: true });
      console.log('User data saved/updated successfully in Firestore for UID:', user.uid);
      // You can then proceed to fetch their schedule or generate a new one if it was just initialized.
    } catch (error) {
      console.error('Error saving user data to Firestore:', error);
    }
  } else {
    // User is signed out.
    console.log('No user signed in.');
  }
});
