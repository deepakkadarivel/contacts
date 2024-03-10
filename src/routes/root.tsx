import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Root() {
  return (
    <>
      <p>Vite + React router</p>
      <ModeToggle />
      <Button asChild>
        <Link to="/contacts">Contacts</Link>
      </Button>
      <Button asChild>
        <Link to="/navigation">Navigation</Link>
      </Button>
    </>
  );
}

export default Root;
