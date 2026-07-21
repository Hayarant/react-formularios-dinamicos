import type { ReactNode } from "react";
import { X } from "lucide-react";
import { useModal } from "./Modal";

interface Props {
  children?: ReactNode;
}

export function ModalHeader({ children }: Props) {
  const { onClose } = useModal();

  return (
    <div className="flex items-center justify-between p-2">
      <h2 className="text-lg font-semibold">{children}</h2>

      <button
        onClick={onClose}
        className="rounded p-1 cursor-pointer font-bold hover:text-amber-400"
      >
        <X size={20} />
      </button>
    </div>
  );
}
