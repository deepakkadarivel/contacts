import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn, getInitials, getRandomId } from "@/lib/utils";
import { Contact, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactType } from "./type";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { randomUser } from "random-user-data";

const contacts: ContactType[] = Array(50)
  .fill(0)
  .map(() => ({
    id: getRandomId(),
    name: randomUser().name,
  }));

function ContactsNav() {
  return (
    <nav className="flex-col md:flex">
      <div className="border-b flex h-16 items-center px-4">
        <Link
          to="/contacts"
          className="flex items-center space-x-4 text-primary"
        >
          <Contact />
          <p className="font-medium text-lg">Contacts</p>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

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

function ContactNewForm() {
  return (
    <form method="post">
      <Button type="submit">New</Button>
    </form>
  );
}

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

function ContactsList({
  className,
  contacts,
}: {
  className?: string;
  contacts: ContactType[];
}) {
  return (
    <nav className={cn("overflow-y-auto", className)}>
      <ScrollArea className="h-full">
        <ul>
          {contacts?.map((contact) => (
            <div key={contact.id}>
              <li className="px-4 py-2 hover:bg-primary-foreground cursor-pointer hover:text-primary">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {getInitials(contact.name)}
                    </AvatarFallback>
                  </Avatar>
                  <a href={`/contacts/${contact.id}`}>{contact.name}</a>
                </div>
              </li>
              <Separator />
            </div>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
}

function Contacts() {
  return (
    <>
      <div className="flex flex-col overflow-hidden h-screen">
        <ContactsNav></ContactsNav>
        <main className="flex flex-1 overflow-y-auto">
          <aside className="flex flex-col">
            <ContactsForm className="p-4 space-x-2" />
            <ContactsList className="space-y-2 flex-1" contacts={contacts} />
          </aside>
          <Separator orientation="vertical" />
          <section className="flex-1 h-full"></section>
        </main>
      </div>
    </>
  );
}

export default Contacts;
