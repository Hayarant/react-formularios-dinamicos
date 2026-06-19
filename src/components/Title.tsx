interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className='text-3xl text-white font-bold'>{title}</h1>
  )
}

export default Title