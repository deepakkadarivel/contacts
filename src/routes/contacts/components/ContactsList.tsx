import { cn, getInitials } from "@/lib/utils";
import { ContactType } from "../type";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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

export default ContactsList;
