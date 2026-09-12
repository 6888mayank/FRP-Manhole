import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'icon';
  className?: string;
  imgClassName?: string;
  alt?: string;
  onClick?: () => void;
}

export function Logo({ variant = 'navbar', className, imgClassName, alt = 'BOSS FRP COMPOSITE LLP — Stronger • Lighter • Durable', onClick }: LogoProps) {
  if (variant === 'icon') {
    return (
      <div
        onClick={onClick}
        className={cn(
          'flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br from-accent to-orange-600 shadow-lg flex-shrink-0 overflow-hidden',
          onClick && 'cursor-pointer',
          className
        )}
      >
        <span className="text-white font-black text-lg md:text-xl tracking-tighter">B</span>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div
        onClick={onClick}
        className={cn('flex flex-col items-start', onClick && 'cursor-pointer', className)}
      >
        {/* Full vertical logo — optimized for dark footer */}
        <div className="bg-white rounded-xl p-3 shadow-xl inline-flex">
          <img
            src="/logo.png"
            alt={alt}
            width={240}
            height={320}
            className={cn('h-[180px] md:h-[190px] w-auto object-contain object-top', imgClassName)}
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
      <div className="bg-white rounded-xl px-3 py-1.5 shadow-lg flex items-center">
        <img
          src="/logo-horizontal.png"
          alt={alt}
          width={360}
          height={72}
          className={cn('h-10 md:h-12 w-auto object-contain', imgClassName)}
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
