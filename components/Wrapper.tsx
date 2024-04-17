import clsx from "clsx";
import { ReactNode } from "react";

export const Wrapper = ({
  classes,
  children,
}: {
  classes?: string;
  children: ReactNode;
}) => {
  return (
    <div className={clsx("bg-brown min-h-screen", classes)}>{children}</div>
  );
};
