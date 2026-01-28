import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
}
