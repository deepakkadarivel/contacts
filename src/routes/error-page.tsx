import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Contact,
  Link as LinkIcon,
  PanelsTopLeft,
  Triangle,
} from "lucide-react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function messageByStatus(error: unknown) {
  // Ref: https://reactrouter.com/en/main/utils/is-route-error-response
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 401:
        return {
          status: `${error.status} ERROR`,
          message: "Oops... unauthorized",
          description: "Sorry, but you are not authorized to view this page.",
        };
      case 403:
        return {
          status: `${error.status} ERROR`,
          message: "Oops... access denied",
          description:
            "Sorry, you do not have permission to access the requested page.",
        };
      case 404:
        return {
          status: `${error.status} ERROR`,
          message: "Oops... page not found",
          description:
            "We apologize, but it seems that the page you are looking for could not be found.",
        };
    }

    return {
      status: `Unexpected ERROR`,
      message: "Oops... Something went wrong",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      description: error?.data?.message ?? "",
    };
  }
}

function ErrorBody() {
  const error = messageByStatus(useRouteError());

  return (
    <div id="error-page-content" className="flex flex-col h-full">
      <p className="text-primary tex-sm">{error?.status}</p>
      <h1 className="text-5xl font-bold mt-8">{error?.message}</h1>
      <p className="text-muted-foreground text-xs mt-4 max-w-sm">
        {error?.description}
      </p>
      <Button asChild className="w-fit mt-12" variant="secondary">
        <Link to="/">Back To Home</Link>
      </Button>
    </div>
  );
}

function FeatureLinks() {
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

function ErrorPage() {
  return (
    <div id="error-page" className="flex flex-col h-screen overflow-hidden">
      <nav className="h-16 flex justify-between items-center border-b px-4">
        <div>
          <Link to="/" className="flex items-center gap-4">
            <Triangle size={36} className="text-primary" />
            <p className="text-2xl font-mono">DOX</p>
          </Link>
        </div>
        <ModeToggle />
      </nav>
      <main className="flex flex-col flex-1 overflow-y-auto">
        <ScrollArea className="overflow-y-auto w-full p-4 h-full">
          <ErrorBody />
          <Separator className="my-12" />
          <FeatureLinks />
        </ScrollArea>
      </main>
      <footer className="h-16 border-t"></footer>
    </div>
  );
}

export default ErrorPage;
