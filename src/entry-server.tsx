import {
  type RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { Router } from "./Router"

export function render(
  _url: string,
  path: string,
  _ssrManifest?: string,
  options?: RenderToPipeableStreamOptions
) {
  return renderToPipeableStream(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>,
    options
  )
}
