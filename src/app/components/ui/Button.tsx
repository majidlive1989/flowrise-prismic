import React from "react";

type Variant = "primary" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base = "px-6 py-3 rounded-full font-medium transition";
  const styles: Record<Variant, string> = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
