import { cn, getInitials } from "@/lib/utils";
import { ContactType } from "../type";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to={`/contacts/${contact.id}`}
              key={contact.id}
              className={({ isActive, isPending }) =>
                [
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-primary-foreground cursor-pointer hover:text-primary",
                  isPending ? "bg-muted" : "",
                ].join(" block")
              }
            >
              <li className="px-4 py-2 ">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback className="text-xs">
                      {getInitials(contact.first ?? "No Name")}
                    </AvatarFallback>
                  </Avatar>
                  <p>{contact.first ?? "No Name"}</p>
                </div>
              </li>
              <Separator />
            </NavLink>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
}

export default ContactsList;
