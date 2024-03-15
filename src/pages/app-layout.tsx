import AppFooter from "@/components/app-footer";
import AppNav from "@/components/app-nav";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div id="app-layout" className="flex flex-col h-screen overflow-hidden">
      <AppNav />
      <main className="flex flex-col flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}

export default AppLayout;
