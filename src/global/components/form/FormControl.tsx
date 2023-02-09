import { FormControlProps } from "@global/global"

const FormControl: React.FC<FormControlProps> = ({ id, label, placeholder, type }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-serif text-gray font-regular mb-[5px]" htmlFor={id}>
        {label}
      </label>
      <input
        className="border border-input-gray rounded-[2px] pl-2.5 py-2 font-serif text-input-placeholder text-md placeholder:text-input-placeholder placeholder:font-light"
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormControl
