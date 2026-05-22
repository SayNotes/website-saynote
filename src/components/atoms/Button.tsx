interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  fullWidth?: boolean
}

export default function Button({ children, fullWidth = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:scale-95 rounded-xl shadow-sm transition-all cursor-pointer ${
        fullWidth ? 'w-full py-2.5' : ''
      }`}
    >
      {children}
    </button>
  )
}