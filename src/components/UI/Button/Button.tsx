interface ButtonProps {
  text: string
  onClick: () => void
}

export const Button = ({ text, onClick, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      {text}
    </button>
  )
}
