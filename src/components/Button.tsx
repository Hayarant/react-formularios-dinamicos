interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-gray-400 text-gray-700 font-bold p-3 rounded transition-colors duration-200 hover:bg-amber-600 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonLogin = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full bg-green-400 text-gray-700 font-bold p-3 rounded transition-colors duration-200 hover:bg-amber-600 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonBlock = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="w-full bg-green-400 text-green-900 font-bold p-3 rounded transition-colors duration-200 hover:bg-green-600 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonConfirm = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-400 text-gray-700 font-bold p-3 rounded transition-colors duration-200 hover:bg-blue-600 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const ButtonDelete = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-red-400 text-gray-700 font-bold p-3 rounded transition-colors duration-200 hover:bg-red-600 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
