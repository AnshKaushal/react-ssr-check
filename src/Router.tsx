import { Route, Routes } from "react-router-dom"
import App from "./App"

export const Router = () => {
  return (
    <Routes>
      <Route index element={<App />} />
    </Routes>
  )
}