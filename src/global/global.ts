export interface PageThemeProps {
  title: String
  description: String
}

export interface ButtonThemeProps {
  children: React.ReactNode
  type: "cancel" | "update" | "delete" | "save"
}
