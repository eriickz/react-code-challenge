export interface PageThemeProps {
  title: string
  description: string
  iconClassName: string
}

export interface ButtonThemeProps {
  children: React.ReactNode
  type: "cancel" | "update" | "delete" | "save"
}

export interface FormControlProps {
  id: string
  label: string
  placeholder: string
  type: string
}
