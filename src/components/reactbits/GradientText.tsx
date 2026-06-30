import React from "react";

/**
 * GradientText — wraps inline text in a flowing multi-hue gradient.
 * The animation (.text-gradient-flow) auto-disables under reduced-motion
 * via the CSS media query, so no JS gate is needed.
 */
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "strong" | "em";
}

export default function GradientText({
  children,
  className = "",
  as = "span",
}: GradientTextProps) {
  const Tag = as as React.ElementType;
  return (
    <Tag className={`text-gradient-flow ${className}`}>{children}</Tag>
  );
}
