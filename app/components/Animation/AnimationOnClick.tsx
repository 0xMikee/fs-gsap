import React, { useRef } from "react"
import { gsap } from "gsap"
import { SvgSymbolLogo } from "~/components/Svg/SvgSymbolLogo"
import { useIsomorphicLayoutEffect } from "~/hooks/useIsomorphicLayoutEffect"
import { Controls } from "~/components/Animation/Controls"
import { IconSVG } from "~/components/Svg/IconSVG"

export const AnimationOnClick = () => {
  const animationRef = useRef<HTMLInputElement | null>(null)
  const timeLine = gsap.timeline({ paused: true })

  const handleClick = () => {
    timeLine.restart()
  }

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeLine.set(".triangle", { x: 10, y: -5, opacity: 0 })
      timeLine.to(".circle", { rotate: 360, transformOrigin: "50% 50%" })
      timeLine.to(".triangle", { x: 0, y: 0, opacity: 1, duration: 0.2 })
    }, animationRef)

    return () => ctx.revert()
  }, [timeLine])

  return (
    <div className="animation animation--clickable">
      <div className="animation__symbolLogoWrapper" onClick={handleClick} ref={animationRef}>
        <IconSVG id="click" iconClass="animation__clickIcon" />
        <SvgSymbolLogo />
      </div>
      <Controls timeLine={timeLine} onlyFpsToggle />
    </div>
  )
}
