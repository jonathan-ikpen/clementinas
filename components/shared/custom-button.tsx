import { Button } from "../ui/button";

export const CustomButton = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <button
      className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-neutarl-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
      {...props}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  children,
  variant,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant:
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "default"
    | "secondary-link"
    | "destructive";
}) => {
  return (
    <Button
      variant={variant}
      className={`px-16 py-8 w-full  border-[1.5px] border-black dark:border-white ftransition fduration-200 text-sm md:text-lg shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] border-solid rounded-full fpx-40 fpy-16 font-extrabold leading-6 transition duration-1000 transform translate-x-0 hover:translate-y-[2px] mt-10 mb-10 ${
        (variant === "secondary" && "bg-[#CC6606] text-white") ||
        (variant === "secondary-link" && "bg-[hsl(28,58%,94%)] text-black") ||
        (variant === "outline" && "text-black")
      } ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};
