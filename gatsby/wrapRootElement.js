import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../src/components/navbar";

import light from "../src/styles/themes/light";

export  function wrapRootElement ({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
  <ThemeProvider theme = {light} >
    <Navbar/>
    {element}
    <h1>Footer</h1>
  </ThemeProvider>)
}