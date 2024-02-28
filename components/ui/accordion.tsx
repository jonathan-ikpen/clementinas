"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  ChevronDown,
  Plus,
  Minus,
  MinusCircle,
  PlusCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border data-[state=open]:bg-white border-[##f0f0f9] rounded-2xl px-4 py-3",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false); // State to track accordion open/close

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center data-[state=open]:bg-white data-[state=open]:text-secondary justify-between py-4 font-medium transition-all",
          className,
          { "[&[data-state=open]>svg]:rotate-180": isOpen } // Conditionally add rotate-180 class if accordion is open
        )}
        onClick={() => setIsOpen((prev) => !prev)} // Toggle accordion state
        {...props}
      >
        {children}
        {isOpen ? (
          <MinusCircle className="h-5 w-5 md:h-8 md:w-8 shrink-0 transition-transform duration-200" /> // Render MinusCircle when open
        ) : (
          <PlusCircle className="h-5 w-5 md:h-8 md:w-8 shrink-0 transition-transform duration-200" /> // Render PlusCircle when closed
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
