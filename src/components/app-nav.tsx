import { Triangle } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

function AppNav() {
  return (
    <nav className="h-16 flex justify-between items-center border-b px-4">
      <div>
        <Link to="/" className="flex items-center gap-4">
          <Triangle size={36} className="text-primary" />
          <p className="text-2xl font-mono">DOX</p>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}

export default AppNav;
