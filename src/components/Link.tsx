import type { Size } from "../types/Login";
import { SizeClasses } from "../constants/Login";

interface LinkProps {
  text: string;
  onClick: () => void;
  size?: Size;
}

const Link = ({ text, onClick, size = "medium" }: LinkProps) => {
  return (
    <button
      className={`${SizeClasses[size]} text-white cursor-pointer font-bold hover:underline`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Link;
