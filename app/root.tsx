import type { LinksFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { styleSheet } from "~/utils/styleSheet"
import { Footer } from "~/components/Footer"

export const links: LinksFunction = () => {
  return styleSheet
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>GSAP on Flashscore</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="content">
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
