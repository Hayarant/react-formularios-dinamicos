interface InputProps {
  name: string
  placeholder: string
  type?: string
}

const Input = (props: InputProps) => {
  return (
    <div>
      <input
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        className="w-full p-2 border border-gray-300 bg-gray-200 rounded"
      />
    </div>
  )
}

export default Input