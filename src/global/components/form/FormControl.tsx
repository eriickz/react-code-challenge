import { forwardRef } from "react"
import { FormControlProps } from "@global/global"

const FormControl = forwardRef<HTMLInputElement, FormControlProps>(({ id, label, placeholder, type, ...rest }, ref) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-serif text-gray font-regular mb-[5px]" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className="border border-input-gray rounded-[2px] pl-2.5 py-2 font-serif text-input-placeholder text-md placeholder:text-input-placeholder placeholder:font-light"
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
})

FormControl.displayName = "FormControl"

export default FormControl
