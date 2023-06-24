import { useRef } from "react"
import { gsap } from "gsap"
import { useIsomorphicLayoutEffect } from "~/hooks/useIsomorphicLayoutEffect"
import { Controls } from "~/components/Controls"
import { CodeLines } from "~/components/CodeLines"
import { SvgLogo } from "~/components/SvgLogo"

export const Animation = () => {
  const animationRef = useRef<HTMLInputElement | null>(null)
  const timeLine: GSAPTimeline = gsap.timeline()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeLine
        .from(".animation__logo", { duration: 0.1, autoAlpha: 0 })
        .from(".codeLines__row--1", { duration: 0.7, autoAlpha: 0 })
        .from(".circle", { rotate: -360, transformOrigin: "50% 50%", duration: 0.7, opacity: 0 }, "<")
        .from(".codeLines__row--2", { duration: 0.5, autoAlpha: 0 })
        .from(".triangle", { duration: 0.4, x: 25, y: -5, opacity: 0 }, "<")
        .from(".live", { duration: 0.5, x: -15, opacity: 0 }, "<")
        .from(".codeLines__row--3", { duration: 0.5, autoAlpha: 0 })
        .from(".sport", { duration: 0.5, x: -10, opacity: 0 }, "<")
    }, animationRef)

    return () => ctx.revert()
  }, [timeLine])

  return (
    <div className="animation" ref={animationRef}>
      <SvgLogo />
      <Controls timeLine={timeLine} />
      <CodeLines />
    </div>
  )
}
