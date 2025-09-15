import CompanySidebarMenu from "@/components/CompanySidebarMenu";


export default function CompanyLayout({ children }) {
  return (
    <div className="flex flex-col  min-h-screen ">
      {/* Sidebar */}
      <div>
        <CompanySidebarMenu />
      </div>
      {/* <CompanySidebarMenu /> */}

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}


