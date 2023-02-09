import type { PageThemeProps } from "../../global"
import { Link } from "wouter"
const PageTheme: React.FC<PageThemeProps> = ({ title, description, iconClassName = "right-[84px] mt-[-10px]" }) => {
  return (
    <div className="flex flex-col mb-7">
      <h1 className="text-4xl text-green">{title}</h1>
      <p className="text-base font-serif text-gray mt-[-1px]">{description}</p>
      <Link to="/users">
        <img className={`w-max-[30px] h-max-30px absolute ${iconClassName}`} src="/home.png" alt="Home Button" />
      </Link>
    </div>
  )
}

export default PageTheme
