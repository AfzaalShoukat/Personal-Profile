import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "icon";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "default",
  size = "default",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  const sizeStyles = {
    default: "h-10 px-4 py-2",
    icon: "h-9 w-9",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}