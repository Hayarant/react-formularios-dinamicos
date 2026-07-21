import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ModalFooter({ children }: Props) {
  return <div className="flex justify-end gap-2 border-t p-5">{children}</div>;
}
