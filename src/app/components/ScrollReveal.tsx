"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    /** Delay in ms before animation starts after entering viewport */
    delay?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // once visible, stay visible
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
                willChange: isVisible ? "auto" : "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}
