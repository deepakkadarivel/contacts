import AppFeatureLinks from "@/components/app-feature-links";
import AppFooter from "@/components/app-footer";
import AppNav from "@/components/app-nav";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
  }
  return {
    status: `Unexpected ERROR`,
    message: "Oops... Something went wrong",
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    description: "",
  };
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

function ErrorPage() {
  return (
    <div id="error-page" className="flex flex-col h-screen overflow-hidden">
      <AppNav />
      <main className="flex flex-col flex-1 overflow-y-auto">
        <ScrollArea className="overflow-y-auto w-full p-4 h-full">
          <ErrorBody />
          <Separator className="my-12" />
          <AppFeatureLinks />
        </ScrollArea>
      </main>
      <AppFooter />
    </div>
  );
}

export default ErrorPage;
