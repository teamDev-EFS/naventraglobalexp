const ExportBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg
      className="h-full w-full"
      viewBox="0 0 1440 720"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(199,90,0,0.08)" />
          <stop offset="100%" stopColor="rgba(244,222,190,0.12)" />
        </linearGradient>
        <style>
          {`
          @media (prefers-reduced-motion: reduce) {
            .route { animation: none !important; }
            .ship, .plane, .dot { animation: none !important; }
          }
          .route {
            stroke-dasharray: 6 10;
            animation: dash 12s linear infinite;
          }
          .dot {
            animation: travel 14s ease-in-out infinite;
          }
          .dot2 {
            animation: travel2 16s ease-in-out infinite;
          }
          .dot3 {
            animation: travel3 18s ease-in-out infinite;
          }
          .ship { animation: bob 6s ease-in-out infinite; }
          .plane { animation: glide 10s ease-in-out infinite; }

          @keyframes dash {
            to { stroke-dashoffset: -100; }
          }
          @keyframes travel {
            0% { offset-distance: 0%; opacity: 0; }
            10% { opacity: 0.7; }
            90% { opacity: 0.7; }
            100% { offset-distance: 100%; opacity: 0; }
          }
          @keyframes travel2 {
            0% { offset-distance: 0%; opacity: 0; }
            15% { opacity: 0.6; }
            85% { opacity: 0.6; }
            100% { offset-distance: 100%; opacity: 0; }
          }
          @keyframes travel3 {
            0% { offset-distance: 0%; opacity: 0; }
            20% { opacity: 0.6; }
            80% { opacity: 0.6; }
            100% { offset-distance: 100%; opacity: 0; }
          }
          @keyframes bob {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes glide {
            0%,100% { transform: translateX(0); }
            50% { transform: translateX(4px); }
          }
        `}
        </style>
      </defs>

      {/* soft gradient wash */}
      <rect width="1440" height="720" fill="url(#bgGrad)" opacity="0.35" />

      {/* subtle world grid */}
      <g stroke="rgba(0,0,0,0.04)" strokeWidth="1">
        {[...Array(12)].map((_, i) => (
          <line key={`v-${i}`} x1={i * 130} y1="0" x2={i * 130} y2="720" />
        ))}
        {[...Array(9)].map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 90} x2="1440" y2={i * 90} />
        ))}
      </g>

      {/* route arcs */}
      <path
        d="M120 420 C 360 300, 640 280, 960 360 C 1180 420, 1320 420, 1380 380"
        fill="none"
        stroke="rgba(199,90,0,0.25)"
        strokeWidth="2"
        className="route"
      />
      <path
        d="M200 180 C 480 240, 760 200, 1100 260"
        fill="none"
        stroke="rgba(199,90,0,0.18)"
        strokeWidth="2"
        className="route"
      />
      <path
        d="M260 520 C 520 560, 760 520, 1150 560"
        fill="none"
        stroke="rgba(199,90,0,0.16)"
        strokeWidth="2"
        className="route"
      />

      {/* moving shipment dots along paths */}
      <circle r="5" fill="rgba(199,90,0,0.7)">
        <animateMotion
          dur="14s"
          repeatCount="indefinite"
          path="M120 420 C 360 300, 640 280, 960 360 C 1180 420, 1320 420, 1380 380"
        />
      </circle>
      <circle r="4" fill="rgba(199,90,0,0.6)">
        <animateMotion
          dur="16s"
          repeatCount="indefinite"
          path="M200 180 C 480 240, 760 200, 1100 260"
        />
      </circle>
      <circle r="4" fill="rgba(199,90,0,0.6)">
        <animateMotion
          dur="18s"
          repeatCount="indefinite"
          path="M260 520 C 520 560, 760 520, 1150 560"
        />
      </circle>

      {/* subtle ship and plane icons */}
      <g className="ship" opacity="0.25">
        <rect x="380" y="430" width="32" height="10" rx="3" fill="rgba(199,90,0,0.35)" />
        <rect x="386" y="424" width="20" height="8" rx="3" fill="rgba(199,90,0,0.25)" />
      </g>
      <g className="plane" opacity="0.22" transform="translate(980 250)">
        <path
          d="M0 4 L18 0 L20 2 L10 6 L22 8 L22 10 L10 8 L20 14 L18 16 L0 10 Z"
          fill="rgba(199,90,0,0.45)"
        />
      </g>
    </svg>
  </div>
)

export default ExportBackdrop
