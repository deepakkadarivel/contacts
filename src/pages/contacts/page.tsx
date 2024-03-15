/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Separator } from "@/components/ui/separator";
// import { getRandomId } from "@/lib/utils";
import { Contact } from "lucide-react";
import { ContactsLoaderData } from "./type";
// import { randomUser } from "random-user-data";
import ContactsForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import { Outlet, useLoaderData } from "react-router-dom";
// import { getContacts } from "./dataModel";

// const contacts: ContactType[] = Array(20)
//   .fill(0)
//   .map(() => ({
//     id: getRandomId(),
//     first: randomUser().name,
//     avatar: "https://i.pravatar.cc/300",
//     favorite: false,
//   }));

function Contacts() {
  const { contacts } = useLoaderData() as ContactsLoaderData;
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
            {contacts?.length ? (
              <ContactsList className="space-y-2 flex-1" contacts={contacts} />
            ) : (
              <p className="p-2 text-center text-muted-foreground">
                <i>No contacts</i>
              </p>
            )}
          </aside>
          <Separator orientation="vertical" />
          <section className="flex-1 h-full">
            <Outlet />
          </section>
        </main>
      </div>
    </>
  );
}

export default Contacts;
