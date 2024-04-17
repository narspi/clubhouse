import { clsx } from "clsx";
import { ReactNode } from "react";

export const WhiteBlock = ({
  classes,
  children,
}: {
  classes?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "bg-white px-8 py-12 rounded-3xl text-center flex flex-col items-center",
        classes
      )}
    >
      {children}
    </div>
  );
};
