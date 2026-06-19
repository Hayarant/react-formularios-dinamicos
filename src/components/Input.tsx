interface InputProps {
  type: string
  placeholder: string
  value?: string
}

const Input = ({ type, placeholder, value }: InputProps) => {
  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    value={value} 
    className='w-full border bg-white border-amber-400 rounded p-3'/>)
}

export default Input