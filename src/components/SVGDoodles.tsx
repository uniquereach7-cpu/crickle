const PickleballRacket = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="60" cy="42" rx="28" ry="32" stroke="currentColor" strokeWidth="2.5" strokeDasharray="1000" className="animate-draw-line" style={{ strokeDashoffset: 0 }} />
    <line x1="60" y1="74" x2="60" y2="110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="42" y1="30" x2="78" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="42" y1="42" x2="78" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="42" y1="54" x2="78" y2="54" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="50" y1="12" x2="50" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="60" y1="10" x2="60" y2="74" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="70" y1="12" x2="70" y2="72" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

const PickleballBall = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="48" cy="32" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="40" cy="46" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="30" cy="46" r="2.5" fill="currentColor" opacity="0.4" />
    <circle cx="50" cy="46" r="2.5" fill="currentColor" opacity="0.4" />
    <circle cx="40" cy="30" r="2.5" fill="currentColor" opacity="0.4" />
  </svg>
);

const CricketBat = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="38" y="10" width="24" height="70" rx="4" stroke="currentColor" strokeWidth="2.5" />
    <line x1="50" y1="80" x2="50" y2="130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="44" y1="125" x2="56" y2="125" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="42" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <line x1="42" y1="50" x2="58" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </svg>
);

const CricketBall = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="2.5" />
    <path d="M28 20 C35 35, 35 45, 28 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M52 20 C45 35, 45 45, 52 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
    <line x1="30" y1="28" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="30" y1="36" x2="26" y2="34" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="30" y1="44" x2="26" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <line x1="30" y1="52" x2="26" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

const Wicket = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="20" y1="15" x2="20" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="15" x2="40" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="60" y1="15" x2="60" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="18" y1="18" x2="42" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <line x1="38" y1="14" x2="62" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
  </svg>
);

const CourtNet = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="10" y1="10" x2="10" y2="70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="150" y1="10" x2="150" y2="70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="10" y1="10" x2="150" y2="10" stroke="currentColor" strokeWidth="2" />
    {[30, 50, 70, 90, 110, 130].map(x => (
      <line key={x} x1={x} y1="10" x2={x} y2="70" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    ))}
    {[25, 40, 55].map(y => (
      <line key={y} x1="10" y1={y} x2="150" y2={y} stroke="currentColor" strokeWidth="1" opacity="0.4" />
    ))}
  </svg>
);

export { PickleballRacket, PickleballBall, CricketBat, CricketBall, Wicket, CourtNet };
