"use client";
import { usePathname, useRouter } from "next/navigation";
import { Home, Shirt, CalendarDays, BarChart2 } from "lucide-react";
import "./globals.css";

const tabs = [
  { label: "홈", path: "/", icon: Home },
  { label: "옷장", path: "/closet", icon: Shirt },
  { label: "캘린더", path: "/calendar", icon: CalendarDays },
  { label: "통계", path: "/stats", icon: BarChart2 },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <html lang="ko">
      <body className="pb-16">
        {children}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 z-50">
          {tabs.map(({ label, path, icon: Icon }) => {
            const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
            return (
              <button
                key={path}
                onClick={() => router.push(path)}
                className={`flex flex-col items-center gap-1 text-xs ${
                  isActive ? "text-black font-semibold" : "text-gray-400"
                }`}
              >
                <Icon size={20} />
                {label}
              </button>
            );
          })}
        </nav>
      </body>
    </html>
  );
}