'use client'
// import Dashboard from "./dashboard/page";
import SideMenu from "../components/SideMenu/sidemenu";
// import Header from "../components/Header/page";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme = {theme}>
      <div>
      <main>
        {/* <Header /> */}
        <SideMenu />
        {/* <Dashboard /> */}
      </main>

    </div>
    </ThemeProvider>
    
  );
}
