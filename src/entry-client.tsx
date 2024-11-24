import "./index.css"
import { hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
