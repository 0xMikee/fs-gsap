import React from "react"
import SymbolsSVG from "../../public/images/svg/symbols.svg"
import { IconSVGSelector } from "~/components/IconSVGSelector"

export interface IconSVGProps {
  id: string
  iconClass?: string
}

export const IconSVG = (props: IconSVGProps) => {
  return <IconSVGSelector svg={SymbolsSVG} {...props} />
}
