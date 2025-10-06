'use client';

export default function SectionSeparator({ variant = 'light' }) {
  const variants = {
    light: 'fill-white',
    gray: 'fill-gray-50',
    blue: 'fill-blue-600',
    reverseLight: 'fill-white rotate-180',
    reverseGray: 'fill-gray-50 rotate-180',
    reverseBlue: 'fill-blue-600 rotate-180',
  };

  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        className={`w-full h-24 ${variants[variant] || 'fill-white'}`}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,138.7C672,149,768,203,864,229.3C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </div>
  );
}