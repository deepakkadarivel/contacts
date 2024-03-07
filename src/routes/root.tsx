import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <p>Vite + React router</p>
      <Button asChild>
        <Link to="/contacts">Contacts</Link>
      </Button>
    </div>
  );
}

export default Root;
