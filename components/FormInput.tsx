interface FormInputProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
}

export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '',
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
      />
    </div>
  )
}
