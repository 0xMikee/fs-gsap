import { IconSVG } from "~/components/Svg/IconSVG"
import gsapLogo from "../../../public/images/png/gsapLogo.png"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__sourceCodeLinks">
        <a className="footer__sourceCodeLink" href="https://github.com/Z3US20/fs-gsap" target="_blank" rel="noreferrer">
          <IconSVG id="github" iconClass="footer__icon" />
          <div className="footer__sourceCodeText">source code</div>
        </a>
        <a
          className="footer__sourceCodeLink"
          href="https://codepen.io/chrisgannon/pen/WNNJqXz"
          target="_blank"
          rel="noreferrer"
        >
          <IconSVG id="svg" iconClass="footer__icon" />
          <div className="footer__sourceCodeText">Codepen example</div>
        </a>
        <a
          className="footer__sourceCodeLink"
          href="https://artsexperiments.withgoogle.com/meroe"
          target="_blank"
          rel="noreferrer"
        >
          <IconSVG id="examples" iconClass="footer__icon" />
          <div className="footer__sourceCodeText">Live website</div>
        </a>
      </div>
      <a className="footer__gsapLink" href="~/components/core/Footer" target="_blank" rel="noreferrer">
        <img className="footer__gsapLogo" src={gsapLogo} alt="gsap logo" />
      </a>
    </div>
  )
}
