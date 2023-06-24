import rootStyles from "~/styles/css/core/root.css"
import footerStyles from "~/styles/css/core/footer.css"
import headerStyles from "~/styles/css/core/header.css"
import animationStyles from "~/styles/css/components/animation.css"
import controlsStyles from "~/styles/css/components/controls.css"
import codeLinesStyles from "~/styles/css/components/codeLines.css"

export const styleSheet = [
  //components
  { rel: "stylesheet", href: animationStyles },
  { rel: "stylesheet", href: controlsStyles },
  { rel: "stylesheet", href: codeLinesStyles },

  //Core
  { rel: "stylesheet", href: rootStyles },
  { rel: "stylesheet", href: headerStyles },
  { rel: "stylesheet", href: footerStyles }
]
