import { Link, useLocation } from "@remix-run/react"
import { ReactNode } from "react"

export function NavLink({
  to,
  extendedClass,
  children,
  ...rest
}: Omit<Parameters<typeof Link>["0"], "to"> & {
  to: string
  extendedClass?: string
  children?: ReactNode
}) {
  const location = useLocation()
  const isSelected = to === location.pathname || location.pathname.startsWith(`${to}/`)

  return (
    <Link
      prefetch="intent"
      className={extendedClass ? extendedClass : `header__link ${isSelected ? "header__link--active" : ""}`}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  )
}
