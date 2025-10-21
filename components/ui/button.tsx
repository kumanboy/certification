import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "md", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-blue-600 text-white hover:bg-blue-700": variant === "default",
                        "border border-gray-300 bg-white hover:bg-gray-50": variant === "outline",
                        "hover:bg-gray-100": variant === "ghost",
                        "px-3 py-1.5 text-sm": size === "sm",
                        "px-4 py-2": size === "md",
                        "px-6 py-3 text-lg": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };