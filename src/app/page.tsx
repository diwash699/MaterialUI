import Dashboard from "./dashboard/page";
// import SideMenu from "../components/SideMenu/page";
import Header from "../components/Header/page";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        {/* <SideMenu /> */}
        <Dashboard />
      </main>

    </div>
  );
}
