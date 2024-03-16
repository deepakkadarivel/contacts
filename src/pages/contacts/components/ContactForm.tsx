import { cn } from "@/lib/utils";
// import ContactNewForm from "./ContactNewForm";
import ContactSearchForm from "./ContactSearchForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ContactsForm({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full items-center border-b bg-primary-foreground",
        className
      )}
    >
      <ContactSearchForm />
      {/* <ContactNewForm /> */}
      <Button asChild className="w-fit">
        <Link to="/contacts/new">New</Link>
      </Button>
    </div>
  );
}

export default ContactsForm;
