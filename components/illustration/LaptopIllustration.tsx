import React from 'react';

export const LaptopIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Cahaya latar belakang (Ambient Glow) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/30 rounded-full blur-[70px] pointer-events-none" />

      <svg
        viewBox="0 0 500 380"
        fill="none"
        xmlns="http://w3.org"
        className="w-full h-auto relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Gradasi Badan Laptop */}
          <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#4338CA" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>

          {/* Gradasi Alas Keyboard */}
          <linearGradient id="laptopBase" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="40%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>

          {/* Gradasi Layar */}
          <linearGradient id="screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18122B" />
            <stop offset="100%" stopColor="#090714" />
          </linearGradient>

          {/* Gradasi Ikon Kode </> */}
          <linearGradient id="codeIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>

          {/* Gradasi Kotak Kaca Melayang */}
          <linearGradient id="glassSquare" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#312E81" stopOpacity="0.05" />
          </linearGradient>

          {/* Filter Glow untuk Ikon Kode */}
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Kotak-kotak Kaca Melayang di Latar Belakang */}
        <rect
          x="145"
          y="75"
          width="58"
          height="58"
          rx="10"
          fill="url(#glassSquare)"
          stroke="#A78BFA"
          strokeOpacity="0.15"
        />
        <rect
          x="335"
          y="40"
          width="54"
          height="54"
          rx="8"
          fill="url(#glassSquare)"
          stroke="#A78BFA"
          strokeOpacity="0.2"
        />
        <rect
          x="415"
          y="105"
          width="48"
          height="48"
          rx="8"
          fill="url(#glassSquare)"
          stroke="#A78BFA"
          strokeOpacity="0.12"
        />
        <rect
          x="130"
          y="175"
          width="36"
          height="36"
          rx="6"
          fill="url(#glassSquare)"
        />

        {/* Bayangan Laptop di Permukaan */}
        <polygon
          points="80,285 245,235 450,295 270,355"
          fill="#05040A"
          opacity="0.75"
        />

        {/* Bagian Layar (Tutup Atas) */}
        <g>
          {/* Bingkai Luar Layar */}
          <polygon
            points="210,75 425,112 405,260 195,215"
            fill="url(#laptopBody)"
            stroke="#818CF8"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          {/* Area Layar Hitam */}
          <polygon
            points="216,84 416,118 398,250 202,208"
            fill="url(#screenBg)"
          />
          {/* Pantulan Cahaya Halus di Layar */}
          <polygon
            points="216,84 325,102 275,224 202,208"
            fill="#FFFFFF"
            opacity="0.03"
          />

          {/* Ikon Kode </> di Tengah Layar */}
          <g
            transform="translate(308, 168) rotate(8) skewX(-6)"
            filter="url(#neonGlow)"
          >
            {/* Panah Kiri < */}
            <path
              d="M-22 -14 L-40 0 L-22 14"
              stroke="url(#codeIcon)"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Garis Miring / */}
            <path
              d="M8 -20 L-8 20"
              stroke="url(#codeIcon)"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            {/* Panah Kanan > */}
            <path
              d="M22 -14 L40 0 L22 14"
              stroke="url(#codeIcon)"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* Bagian Alas Keyboard (Base) */}
        <g>
          {/* Permukaan Atas Base */}
          <polygon
            points="195,215 405,260 265,332 72,272"
            fill="url(#laptopBase)"
            stroke="#A5B4FC"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          {/* Ketebalan Sisi Kiri Base */}
          <polygon
            points="72,272 265,332 265,341 72,280"
            fill="#312E81"
          />
          {/* Ketebalan Sisi Kanan Base */}
          <polygon
            points="265,332 405,260 405,268 265,341"
            fill="#1E1B4B"
          />

          {/* Area Keyboard Cekung */}
          <polygon
            points="198,225 375,262 295,305 128,262"
            fill="#110E26"
            opacity="0.85"
          />

          {/* Simulasi Baris Tombol Keyboard */}
          <g stroke="#4338CA" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round">
            <line x1="190" y1="233" x2="355" y2="267" />
            <line x1="178" y1="240" x2="342" y2="275" />
            <line x1="165" y1="248" x2="328" y2="283" />
            <line x1="150" y1="256" x2="312" y2="292" />
          </g>

          {/* Touchpad */}
          <polygon
            points="178,280 232,295 198,313 145,297"
            fill="#312E81"
            stroke="#6366F1"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
};
