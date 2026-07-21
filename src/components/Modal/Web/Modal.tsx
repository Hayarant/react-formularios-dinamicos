import { createContext, useContext, useEffect, useState } from "react";

import type { FC, ReactNode } from "react";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

interface ModalContextData {
  onClose: () => void;
}

const ModalContext = createContext({} as ModalContextData);

export const useModal = () => useContext(ModalContext);

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface ModalComponent extends FC<ModalProps> {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
}

const Modal = Object.assign(
  ({ open, onClose, children }: ModalProps) => {
    const [visible, setVisible] = useState(open);

    useEffect(() => {
      if (open) {
        setVisible(true);
      } else {
        const timeout = setTimeout(() => {
          setVisible(false);
        }, 200);

        return () => clearTimeout(timeout);
      }
    }, [open]);

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      if (open) {
        window.addEventListener("keydown", handleEsc);
      }

      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, [open, onClose]);

    if (!visible) return null;

    return (
      <ModalContext.Provider value={{ onClose }}>
        <div
          onClick={onClose}
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ${
            open ? "bg-black/50" : "bg-black/0"
          }`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-lg rounded-xl bg-white shadow-xl transition-all duration-200 ${
              open ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </ModalContext.Provider>
    );
  },
  {
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter,
  },
) as ModalComponent;

export default Modal;
