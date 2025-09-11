import CompanySidebarMenu from "@/components/CompanySidebarMenu";


export default function CompanyLayout({ children }) {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <CompanySidebarMenu />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}


