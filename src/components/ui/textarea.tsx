import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & {
    name: string;
    className?: string;
    label?: string;
  }
>(({ className, label, name, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <textarea
        id={name}
        name={name}
        aria-label={label ?? name}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
