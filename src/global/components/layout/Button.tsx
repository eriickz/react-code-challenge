import { ButtonThemeProps } from "@global/global"
const Button: React.FC<ButtonThemeProps> = ({ children, type = "cancel" }) => {
  const colorVariant = {
    cancel: "bg-button-cancel",
    update: "bg-button-update mr-5",
    save: "bg-button-save",
    delete: "bg-button-delete",
  }

  return (
    <button className={`${colorVariant[type]} rounded font-sm font-semibold text-white py-2.5 px-5 hover:opacity-80`}>{children}</button>
  )
}

export default Button
