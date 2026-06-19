interface ButtonProps {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button 
    className='w-full bg-black text-white font-bold py-3 rounded hover:bg-amber-600 transition-colors duration-300' 
    onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button