import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ModalBody({ children }: Props) {
  return <div className="p-5">{children}</div>;
}
