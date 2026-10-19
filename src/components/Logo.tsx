import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="8" fill="#C8F26B" />
    {/* Stylized 'D' dental mark with sync arc */}
    <path
      d="M9 7H16C21 7 24 10.5 24 16C24 21.5 21 25 16 25H9V7Z"
      stroke="#0F2A22"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner synchronized check/pulse for check-up reminders */}
    <path
      d="M13 16.5L15.5 19L20 13.5"
      stroke="#0F2A22"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, size = 'md' }) => {
  const iconSizes = {
    sm: 24,
    md: 28,
    lg: 36,
    xl: 64,
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 font-heading font-bold tracking-tight select-none ${className}`}>
      <LogoMark size={iconSizes[size]} />
      {!iconOnly && (
        <span className={`${textSizes[size]} text-inherit tracking-tight`}>
          DentSync
        </span>
      )}
    </div>
  );
};
