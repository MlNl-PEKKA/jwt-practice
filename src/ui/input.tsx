import { FC, InputHTMLAttributes } from 'react'

type Props = {
  title: string
}

type InputProps = Props & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({ title, ...props }) => {
  return (
    <>
      <p className="text-white">{title}</p>
      <p>
        <input className="" {...props} />
      </p>
    </>
  )
}

export default Input
