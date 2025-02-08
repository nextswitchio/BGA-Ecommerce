import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode | string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  className?: string; // Additional custom classes
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className,
}) => {
  const baseStyles = "rounded-[5px] font-medium focus:outline-none focus:ring-2";
  const variants = {
    primary: "bg-[#2E2E2E] text-white",
    secondary: "bg-[#DF3906] text-white ",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };
  const sizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-md",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
