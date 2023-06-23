import { IconSVG } from "~/components/IconSVG"

export const Footer = () => {
  return (
    <div className="footer">
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
        <IconSVG id="examples" iconClass="footer__icon" />
        <div className="footer__sourceCodeText">Example 1</div>
      </a>
      <a
        className="footer__sourceCodeLink"
        href="https://artsexperiments.withgoogle.com/meroe"
        target="_blank"
        rel="noreferrer"
      >
        <IconSVG id="examples" iconClass="footer__icon" />
        <div className="footer__sourceCodeText">Example 2</div>
      </a>
    </div>
  )
}
