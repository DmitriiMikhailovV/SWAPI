import GlobalStyles from "./GlobalStyles"
import { BrowserRouter, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Header from "../src/components/gen/Header/Header"
import Home from "../src/components/page/Home/Home"
import People from "./components/page/People/People"
import Vehicles from "./components/page/Vehicles/Vehicles"

const colors = {
  base: "#dff5fa",
  title: "#313448",
  text: "#0e0f14",
  element: "#708daf",
  additional: "#a5928c",
}

const NavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "People",
    path: "/people",
  },
  {
    title: "Vehicles",
    path: "/vehicles",
  },
]

const HomeButtons = [
  {
    title: "People",
    path: "/people",
  },
  {
    title: "Vehicles",
    path: "/vehicles",
  },
]

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Route path={["/people", "/vehicles"]}>
        <Header links={NavLinks} />
      </Route>
      <Route exact path={"/"}>
        <Home links={HomeButtons} />
      </Route>
      <Route path="/people">
        <People />
      </Route>
      <Route path="/vehicles">
        <Vehicles />
      </Route>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
