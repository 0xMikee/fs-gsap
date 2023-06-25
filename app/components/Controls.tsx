import { useState } from "react"
import { FpsView } from "react-fps"
import { IconSVG } from "~/components/IconSVG"
import { useIsomorphicLayoutEffect } from "~/hooks/useIsomorphicLayoutEffect"
import { gsap } from "gsap"
import Draggable from "gsap/dist/Draggable"

type Props = {
  timeLine: GSAPTimeline
  onlyFpsToggle?: boolean
}

export const Controls = ({ timeLine, onlyFpsToggle }: Props) => {
  const [showFps, setShowFps] = useState<boolean>(false)
  const [play, setPlay] = useState<boolean>(true)

  const toggleFps = () => {
    setShowFps((prevState) => !prevState)
  }

  const restartAnimation = () => {
    setPlay(true)
    timeLine.restart()
  }

  const pauseAnimation = () => {
    setPlay((prevState) => !prevState)
    timeLine.paused(!timeLine.paused())
  }

  useIsomorphicLayoutEffect(() => {
    const TIMELINE_WIDTH = 338
    const scrubber = gsap.to(".controls__scrubber", { x: TIMELINE_WIDTH, ease: "none", paused: true })

    const updateScrubber = () => {
      scrubber.progress(Math.min(1, timeLine.time() / 2))
    }

    const ctx = gsap.context(() => {
      timeLine.eventCallback("onUpdate", updateScrubber)
      timeLine.eventCallback("onComplete", () => {
        setPlay(false);
        timeLine.pause();
      })
    }, scrubber)

    gsap.registerPlugin(Draggable)

    Draggable.create(".controls__scrubber", {
      type: "x",
      bounds: { maxX: 305, minX: 0 },
      onDrag: function () {
        timeLine.time((2 * this.x) / TIMELINE_WIDTH)
      },
      onRelease: function () {
        if (timeLine.paused()) {
          setPlay(false)
        } else {
          setPlay(true)
          timeLine.resume()
        }
      }
    })

    return () => ctx.revert()
  }, [timeLine])

  return (
    <>
      {showFps && <FpsView />}
      <div className="controls">
        {!onlyFpsToggle && (
          <div className="controls__timeLine">
            <div className="controls__track">
              <div className="controls__scrubber" />
            </div>
          </div>
        )}
        <div className="controls__buttons">
          {!onlyFpsToggle && (
            <>
              <button className="controls__button" onClick={restartAnimation}>
                <IconSVG id="refresh" iconClass="controls__icon" />
              </button>
              <button className="controls__button" onClick={pauseAnimation}>
                <IconSVG id={`${play ? "pause" : "play"}`} iconClass="controls__icon" />
              </button>
            </>
          )}
          <div className="controls__showFps">
            <input className="controls__checkBox--input" type="checkbox" id="fpsMeter" onClick={toggleFps} />
            <label className="controls__checkBox" htmlFor="fpsMeter">
              fps
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
