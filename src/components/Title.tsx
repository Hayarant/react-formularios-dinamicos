interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => {
  return <h1 className="text-3xl text-white font-bold">{text}</h1>;
};

export const ModalTitle = ({ text }: TitleProps) => {
  return <h1 className="text-2xl text-black font-bold">{text}</h1>;
};

export const AltTitle = ({ text }: TitleProps) => {
  return <h2 className="text-gray-500 font-medium">{text}</h2>;
};
