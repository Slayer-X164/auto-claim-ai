import { Suspense } from "react";
import Sidebar from "@/component/dashboard/Sidebar";
import Header from "@/component/dashboard/Header";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-neutral-100 overflow-hidden">
          <Suspense>
            <Sidebar />
          </Suspense>
          <div className="flex flex-col flex-1 overflow-hidden m-4 rounded-xl bg-white border-3 border-neutral-200/80">
            <Header />
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
  );
}
