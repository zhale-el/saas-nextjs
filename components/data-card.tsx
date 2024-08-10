import { IconType } from "react-icons";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const boxVariant = cva("rounded-md p-3", {
  variants: {
    variant: {
      default: "bg-blue-500/20",
      success: "bg-emerald-500/20",
      danger: "bg-rose-500/20",
      warning: "bg-yellow-500/20",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconVariant = cva("size-6", {
  variants: {
    variant: {
      default: "fil-blue-500",
      success: "fil-emerald-500",
      danger: "fil-rose-500",
      warning: "fil-yellow-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const DataCard = () => {
  return <div>Enter</div>;
};

export default DataCard;
