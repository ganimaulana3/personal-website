"use client";

import React from 'react';
import { useTheme } from '../global/theme-provider';

export default function BackgroundFX({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { theme } = useTheme();

  if (theme !== "dark") {
    return <>{children}</>;
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0C0B16]">
        {/* Lapisan Efek Cahaya & Bentuk Abstrak (Responsif Mobile & Desktop) */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* 1. Cahaya Pudar Kiri Atas */}
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#3B2678]/35 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]" />

          {/* 2. Cahaya Pudar Kanan Tengah */}
          <div className="absolute -right-20 top-[25%] h-96 w-96 rounded-full bg-[#7C5DFA]/35 blur-[110px] md:right-[5%] md:top-[15%] md:h-[550px] md:w-[550px] md:blur-[150px]" />

          {/* 3. Cahaya Pudar Kiri Bawah */}
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[#3B2678]/40 blur-[100px] md:h-[450px] md:w-[450px] md:blur-[130px]" />

          {/* 4. Cincin Kanan Atas (Posisi terkunci di pojok kanan atas) */}
          <svg
            className="absolute -right-16 -top-16 h-[320px] w-[320px] md:-right-20 md:-top-24 md:h-[550px] md:w-[550px]"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://w3.org"
          >
            <defs>
              <linearGradient id="topRingGrad" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6d3df2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#12092c" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <circle
              cx="240"
              cy="160"
              r="140"
              stroke="url(#topRingGrad)"
              strokeWidth="42"
            />
          </svg>

          {/* 5. Gelombang Cahaya Kanan Tengah (Posisi terkunci di sisi kanan) */}
          <svg
            className="absolute right-0 top-[22%] h-[280px] w-[340px] md:top-[18%] md:h-[450px] md:w-[650px]"
            viewBox="0 0 500 350"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://w3.org"
          >
            <defs>
              <linearGradient id="midWaveGrad" x1="500" y1="50" x2="100" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5e35b1" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#431c9e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0a0618" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="midStrokeGrad" x1="500" y1="50" x2="80" y2="240" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a385ff" stopOpacity="0.7" />
                <stop offset="60%" stopColor="#5e35b1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0a0618" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M500 40 C420 130, 320 120, 240 120 C150 120, 90 175, 40 250 L500 250 Z"
              fill="url(#midWaveGrad)"
            />
            <path
              d="M500 40 C420 130, 320 120, 240 120 C150 120, 90 175, 40 250"
              stroke="url(#midStrokeGrad)"
              strokeWidth="1.5"
            />
          </svg>

          {/* 6. Lengkungan Kiri Bawah (Posisi terkunci di pojok kiri bawah) */}
          <svg
            className="absolute bottom-0 left-0 h-[180px] w-[260px] md:h-[260px] md:w-[450px]"
            viewBox="0 0 400 250"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://w3.org"
          >
            <defs>
              <linearGradient id="bottomWaveGrad" x1="0" y1="50" x2="280" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5e35b1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0a0618" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="bottomStrokeGrad" x1="0" y1="50" x2="320" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8c66ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#261159" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 C120 80, 210 150, 310 250 L0 250 Z"
              fill="url(#bottomWaveGrad)"
            />
            <path
              d="M0 60 C120 80, 210 150, 310 250"
              stroke="url(#bottomStrokeGrad)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      {children}
    </>
  );
}
