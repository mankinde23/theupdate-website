import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface ServicesDialogProps {
  /** The trigger element that opens the dialog (e.g., a button or card) */
  trigger: ReactNode;
  /** Dialog header title */
  title: ReactNode;
  /** Dialog main content (can be text or JSX) */
  content: ReactNode;
  /** Optional footer button */
  footerButton?: ReactNode;
  /** Optional custom max-width */
  maxWidth?: string;
}

export const ServicesDialog = ({
  trigger,
  title,
  content,
  footerButton,
}: //   maxWidth = "1600px",
ServicesDialogProps) => {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      {/* Dialog Content */}
      <DialogContent
        className={`w-full max-w-[90vw] lg:max-w-[1100px] mx-auto border-[#00000047] border rounded-[1.25rem]  overflow-hidden px-16 max-lg:px-[1.5rem]`}
      >
        <DialogHeader className=" px-0 pt-[2.6875rem] pb-0 ">
          <DialogTitle className="text-[#1E1E1E] font-medium  text-[3.4375rem] max-lg:text-[1.5rem] leading-[4.375rem] max-lg:leading-[2.25rem] font-medium font-sans max-lg:text-start">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className=" py-6 text-[#1E1E1E] text-[1.25rem] max-lg:text-[0.75rem] leading-[215%] font-medium  font-sans">
          <p>{content}</p>
        </div>

        {footerButton && (
          <>
            <div className="px-0 pb-[3.1875rem] max-lg:px-[0px] max-lg:pb-[1.875rem]">
              {footerButton}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
