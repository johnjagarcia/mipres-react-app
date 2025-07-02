import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { IconBell, IconDownload } from "@tabler/icons-react";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-2 lg:gap-2 lg:p-4 ">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Dispensación</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="size-8">
            <IconDownload />
          </Button>
          <Button variant="ghost" size="icon" className="size-8">
            <IconBell />
          </Button>
        </div>
      </div>
    </header>
  );
}
