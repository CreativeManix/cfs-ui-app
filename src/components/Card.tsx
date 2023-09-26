import { extendVariants, Card } from "@nextui-org/react";
export const CFSCard = extendVariants(Card, {
  variants: {
    type: {
      default: {
        base: "px-8 py-6 bg-neutral-600 rounded-2xl shadow",
        header: "text-white text-2xl font-medium font-['IBM Plex Sans'] ",
      },
    },
  },
  defaultVariants: {
    type: "default",
  },
});
