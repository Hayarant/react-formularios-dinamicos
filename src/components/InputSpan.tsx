interface InputSpanProps{
    text:string
}

const InputSpan = ({text} : InputSpanProps) => {
  return (
    <span className="font-bold">{text}</span>
  )
}

export default InputSpan