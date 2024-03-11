import { cn } from "@/lib/utils";
import ContactNewForm from "./ContactNewForm";
import ContactSearchForm from "./ContactSearchForm";

function ContactsForm({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full items-center border-b bg-primary-foreground",
        className
      )}
    >
      <ContactSearchForm />
      <ContactNewForm />
    </div>
  );
}

export default ContactsForm;
