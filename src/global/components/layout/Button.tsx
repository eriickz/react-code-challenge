import { ButtonThemeProps } from "@global/global"
const Button: React.FC<ButtonThemeProps> = ({ children, type, btnType = "cancel", ...rest }) => {
  const colorVariant = {
    cancel: "bg-button-cancel",
    update: "bg-button-update mr-5",
    save: "ml-5 bg-button-save",
    delete: "bg-button-delete",
    new: "w-[150px] bg-button-new",
  }

  return (
    <button
      type={type}
      className={`${colorVariant[btnType]} rounded font-sm font-semibold text-white py-2.5 px-7 hover:opacity-80`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
