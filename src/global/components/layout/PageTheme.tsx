import type { PageThemeProps } from "../../global"

const PageTheme: React.FC<PageThemeProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col mb-7">
      <h1 className="text-4xl text-green">{title}</h1>
      <p className="text-base font-serif text-gray mt-[-1px]">{description}</p>
    </div>
  )
}

export default PageTheme
