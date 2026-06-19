import type { Size } from '../types/Login'
import { SizeClasses } from '../constants/Login'

interface CheckboxProps {
  text: string
  size?: Size
}

const Checkbox = ({ text, size = 'medium' }: CheckboxProps) => {
  return (
    <div className={`${SizeClasses[size]} flex items-center gap-1`}>
        <input type='checkbox' className='border border-amber-400 rounded' />
        <label className='text-md text-white'>{text}</label>
    </div>
  )
}

export default Checkbox