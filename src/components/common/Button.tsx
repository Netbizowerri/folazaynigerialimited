import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  LinkComponent?: any;
  to?: string;
}

const Button = forwardRef<any, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, LinkComponent, ...props }, ref) => {
    const variants = {
      primary: 'bg-[#1A5086] text-white hover:bg-[#12385D]',
      secondary: 'bg-[#DDAF2D] text-[#1C1C1C] hover:bg-[#B38E24]',
      outline: 'border-2 border-[#1A5086] text-[#1A5086] hover:bg-[#1A5086] hover:text-white',
      ghost: 'bg-transparent text-[#1A5086] hover:bg-gray-100',
      danger: 'bg-red-600 text-white hover:bg-red-700',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = cn(
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95',
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {loading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </>
    );

    if (LinkComponent) {
      return (
        <LinkComponent
          ref={ref}
          className={classes}
          {...(props as any)}
        >
          {content}
        </LinkComponent>
      );
    }

    return (
      <button
        ref={ref}
        disabled={loading || disabled}
        className={classes}
        {...(props as any)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
export { cn };
