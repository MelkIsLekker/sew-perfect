import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-primary text-white hover:bg-neutral-800",
    outline: "border border-primary text-primary hover:bg-neutral-100",
    ghost: "text-primary hover:bg-neutral-100",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
