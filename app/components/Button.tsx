import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const combinedClassName = `bg-secondary text-white px-4 py-2 rounded-md hover:bg-dark cursor-pointer ${className || ""}`;

  return (
    <button type={type} className={combinedClassName} {...rest}>
      {children}
    </button>
  );
}
