import { Contact, Link as LinkIcon, PanelsTopLeft } from "lucide-react";
import { Link } from "react-router-dom";

function AppFeatureLinks() {
  const links = [
    {
      to: "/contacts",
      id: "contacts",
      title: "Contacts",
      icon: <Contact className="text-primary" />,
      description:
        "A small feature-rich app that lets you keep track of your contacts. React router v6 getting started guide to explore the routing concepts.",
    },
    {
      to: "/layouts",
      id: "layouts",
      title: "Layouts",
      icon: <PanelsTopLeft className="text-primary" />,
      description:
        "Learning to build web layouts using Tailwind css, Shadcn, React router v6. Additionally trying sematics and responsiveness.",
    },
  ];
  return (
    <section id="feature-links" className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <LinkIcon />
        <h3 className="font-medium leading-none">Feature links</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className="p-4 bg-muted rounded flex flex-col gap-4"
          >
            <div className="flex gap-2 items-center">
              {link.icon}
              <p className="text-sm leading-none">{link.title}</p>
            </div>
            <p className="text-xs text-muted-foreground">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default AppFeatureLinks;
