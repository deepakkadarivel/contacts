import { Separator } from "@/components/ui/separator";
import { getRandomId } from "@/lib/utils";
import { Contact } from "lucide-react";
import { ContactType } from "./type";
import { randomUser } from "random-user-data";
import ContactsForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

const contacts: ContactType[] = Array(50)
  .fill(0)
  .map(() => ({
    id: getRandomId(),
    name: randomUser().name,
  }));

function Contacts() {
  return (
    <>
      <div className="flex flex-col overflow-hidden h-screen">
        <main className="flex flex-1 overflow-y-auto">
          <aside className="flex flex-col">
            <div className="flex items-center gap-2 px-4 pt-4 bg-primary-foreground">
              <Contact className="text-primary" />
              <p className="text-lg">Contacts</p>
            </div>
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
