import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

function ContactSearchForm() {
  return (
    <form id="contact-search-form" role="search" className="w-full">
      <Input
        type="search"
        placeholder="Search"
        id="q"
        name="q"
        aria-label="Search contacts"
      />
      <div id="search-spinner" aria-hidden hidden={true}>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </div>
      <div className="sr-only" aria-live="polite"></div>
    </form>
  );
}

export default ContactSearchForm;
