import React from "react"
import type { IconSVGProps } from "~/components/IconSVG"

interface IconSVGSelectorProps extends IconSVGProps {
  svg: any
}

export const IconSVGSelector = ({ svg, id, iconClass }: IconSVGSelectorProps) => {
  return (
    <svg className={`${iconClass ? iconClass : id}`}>
      <use xlinkHref={`${svg}#${id}`} />
    </svg>
  )
}
