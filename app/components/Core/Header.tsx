import { NavLink } from "~/components/Core/NavLink"

export const Header = () => {
  const LINKS = [
    { title: "onPlay", to: "/" },
    { title: "onClick", to: "/onClick" }
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
