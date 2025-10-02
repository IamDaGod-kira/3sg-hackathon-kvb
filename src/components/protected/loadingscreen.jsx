// src/components/LoadingScreen.jsx
import React from 'react';

export default function LoadingScreen({
  message = 'Loading',
  fullscreen = true,
  accent = 'from-indigo-500 to-purple-600', // pass different gradient classes if you want
}) {
  return (
    <div
      aria-busy="true"
      className={`${fullscreen ? 'fixed inset-0 z-50' : 'w-full'} flex items-center justify-center`}
    >
      {/* Background gradient + subtle pattern */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`}
        style={{ mixBlendMode: 'multiply' }}
        aria-hidden="true"
      />

      {/* Slight glass card */}
      <div className="relative z-10 max-w-lg w-full mx-4 rounded-3xl bg-white/6 border border-white/10 backdrop-blur-md shadow-2xl p-6 sm:p-8 flex items-center gap-6">
        {/* Logo / spinner */}
        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/8">
          {/* SVG spinner + soft pulse */}
          <svg
            className="w-12 h-12 text-white animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" strokeOpacity="0.15" />
            <path d="M22 12a10 10 0 0 0-10-10" />
          </svg>
        </div>

        {/* Text + animated dots + skeleton */}
        <div className="flex-1">
          <p className="text-white text-lg sm:text-xl font-semibold leading-tight">
            {message}
            <span className="sr-only"> — loading</span>
          </p>

          {/* Animated dots */}
          <div className="mt-3 flex items-center gap-2 h-6">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full bg-white/90"
              style={{ animation: 'bounce 0.8s infinite', animationDelay: '0s' }}
            />
            <span
              className="inline-block w-2.5 h-2.5 rounded-full bg-white/70"
              style={{ animation: 'bounce 0.8s infinite', animationDelay: '0.15s' }}
            />
            <span
              className="inline-block w-2.5 h-2.5 rounded-full bg-white/50"
              style={{ animation: 'bounce 0.8s infinite', animationDelay: '0.3s' }}
            />
            {/* tiny accessible timestamp or hint */}
            <span className="ml-3 text-xs text-white/80">Working on it…</span>
          </div>

          {/* skeleton preview */}
          <div className="mt-4 space-y-2">
            <div className="w-3/4 h-2.5 rounded-full bg-white/8 animate-pulse" />
            <div className="w-1/2 h-2 rounded-full bg-white/8 animate-pulse" />
          </div>
        </div>

        {/* Optional small cancel/skip button for dev/testing */}
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <button
            type="button"
            onClick={() => {}}
            className="px-3 py-1 text-xs rounded-full bg-white/6 border border-white/10 text-white/80 hover:bg-white/8 transition"
            aria-hidden="true"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Inline keyframe for simple bounce (Tailwind doesn't expose per-element delays by default) */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.9; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
