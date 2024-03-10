import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

function Navigation() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <nav className="border-b">nav</nav>
      <div className="flex flex-1 overflow-auto">
        <aside className="w-1/5 h-full flex flex-col">
          <div className="h-16 bg-muted text-center">Aside Header</div>
          <Separator />
          <p>Aside body</p>
          <ScrollArea className="bg-slate-50 h-full w-full p-4">
            <ul>
              {Array(50)
                .fill(0)
                .map((_, i: number) => (
                  <li key={i}>{i}</li>
                ))}
            </ul>
          </ScrollArea>
        </aside>
        <Separator orientation="vertical" />
        <section>section</section>
      </div>
      <footer className="border-t">footer</footer>
    </div>
  );
}

export default Navigation;
