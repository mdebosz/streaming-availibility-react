import { Route, Routes } from "react-router-dom"
import { AppHeader } from "ui/app/AppHeader"
import { AppMain } from "ui/app/AppMain"

export const Main: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <AppHeader />
      <AppMain>
        <Routes>
        <Route path="/"></Route>
        </Routes>
      </AppMain>
    </div>
  )
}
