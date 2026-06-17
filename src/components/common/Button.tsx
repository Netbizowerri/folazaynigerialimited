import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  LinkComponent?: any;
  to?: string;
}

const btnVariants = {
  primary: 'bg-[#1A5086] text-white hover:bg-[#12385D] shadow-lg shadow-[#1A5086]/20',
  secondary: 'bg-[#DDAF2D] text-[#1C1C1C] hover:bg-[#E8C44A] shadow-lg shadow-[#DDAF2D]/20',
  outline: 'border-2 border-[#1A5086] text-[#1A5086] hover:bg-[#1A5086] hover:text-white',
  ghost: 'bg-transparent text-[#1A5086] hover:bg-[#1A5086]/5',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20',
};

const btnSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-9 py-4 text-lg',
};

const Button = forwardRef<any, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, LinkComponent, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center rounded-xl font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
      btnVariants[variant],
      btnSizes[size],
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

    const motionProps = {
      whileHover: disabled ? {} : { scale: 1.03 },
      whileTap: disabled ? {} : { scale: 0.97 },
      transition: { type: "spring", stiffness: 400, damping: 15 },
    };

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
      <motion.button
        ref={ref}
        disabled={loading || disabled}
        className={classes}
        {...motionProps}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
