import Link from "next/link";
import {
  XMarkIcon,
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
  ArrowLeftCircleIcon, // New icon for the "Back To Home" link
} from "@heroicons/react/24/outline";

// Define a type for the navigation items for better type safety
interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode; // Make the icon optional
}

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  // Corrected navigation array with consistent routes and icons
  const navigation: NavItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: <HomeIcon className="h-6 w-6" /> },
    { name: "Cart", href: "/dashboard/carts", icon: <ShoppingCartIcon className="h-6 w-6" /> },
    { name: "Profile", href: "/dashboard/Profile", icon: <UserIcon className="h-6 w-6" /> },
    // Added a dedicated icon for the "Back To Home's" link
    { name: "Back To Home", href: "/", icon: <ArrowLeftCircleIcon className="h-6 w-6" /> },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 flex w-64 transform flex-col bg-gray-800 text-white shadow-xl transition-transform duration-300 md:relative md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="text-white md:hidden"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 rounded-lg p-3 font-medium transition-colors hover:bg-gray-700"
              >
                {/* Conditionally render the icon if it exists */}
                {item.icon && <span className="text-xl">{item.icon}</span>}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
