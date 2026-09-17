import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'icon';
  className?: string;
  imgClassName?: string;
  alt?: string;
  onClick?: () => void;
}

export function Logo({ variant = 'navbar', className, imgClassName, alt = 'BOSS FRP — Stronger • Lighter • Durable', onClick }: LogoProps) {
  if (variant === 'icon') {
    return (
      <div
        onClick={onClick}
        className={cn(
          'flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white shadow-md flex-shrink-0 overflow-hidden p-1',
          onClick && 'cursor-pointer',
          className
        )}
      >
        <img
          src="/logo-icon.png"
          alt={alt}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div
        onClick={onClick}
        className={cn('flex flex-col items-start', onClick && 'cursor-pointer', className)}
      >
        <div className="bg-white rounded-xl px-4 py-2.5 shadow-xl inline-flex items-center">
          <img
            src="/logo.png"
            alt={alt}
            width={400}
            height={104}
            className={cn('h-11 md:h-12 w-auto object-contain', imgClassName)}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  // navbar variant — horizontal logo, perfectly fitted
  return (
    <div
      onClick={onClick}
      className={cn('flex items-center', onClick && 'cursor-pointer', className)}
    >
      <div className="bg-white rounded-xl px-3.5 py-1.5 shadow-lg flex items-center hover:shadow-xl transition-shadow">
        <img
          src="/logo-horizontal.png"
          alt={alt}
          width={360}
          height={94}
          className={cn('h-9 md:h-10 w-auto object-contain', imgClassName)}
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
