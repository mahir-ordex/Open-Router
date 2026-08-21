export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="10" fill="#fafafa" />
        <circle cx="11" cy="11" r="4.25" fill="#09090b" />
        <path
          d="M11 1.5 L13.2 8.2 L20.5 8.2 L14.6 12.4 L16.8 19.2 L11 15 L5.2 19.2 L7.4 12.4 L1.5 8.2 L8.8 8.2 Z"
          fill="#09090b"
          fillOpacity="0.18"
        />
      </svg>
      <span className="text-[15px] font-medium tracking-tight text-fg">
        Aperture
      </span>
    </span>
  );
}
