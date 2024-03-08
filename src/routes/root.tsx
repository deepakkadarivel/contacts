import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Root() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <p>Vite + React router</p>
      <ModeToggle />
      <Button asChild>
        <Link to="/contacts">Contacts</Link>
      </Button>
    </ThemeProvider>
  );
}

export default Root;
