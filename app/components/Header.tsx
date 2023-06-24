import { IconSVG } from "~/components/IconSVG"
import { NavLink } from "~/components/NavLink"

export const Header = () => {
  const LINKS = [
    { title: "onPlay", to: "/" },
    { title: "onClick", to: "/clickable" }
  ]

  return (
    <div className="header">
      {LINKS.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.title}
        </NavLink>
      ))}
    </div>
  )
}
