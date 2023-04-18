export interface PageThemeProps {
  title: string
  description: string
  iconClassName?: string
  showNewButton: boolean
  onButtonClick?: () => void
}

export interface ButtonThemeProps {
  children: React.ReactNode
  btnType: "cancel" | "update" | "delete" | "save" | "new"
  type?: "button" | "submit"
  onClick?: () => void
}

export interface FormControlProps {
  id: string
  label: string
  placeholder: string
  type: string
}
