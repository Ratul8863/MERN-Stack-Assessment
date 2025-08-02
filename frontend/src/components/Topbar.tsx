import { Bars3Icon } from "@heroicons/react/24/outline";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <button
          onClick={onMenuClick}
          className="text-gray-500 md:hidden"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>
      <div className="relative">
        <div className="flex items-center space-x-2 rounded-full border border-gray-200 p-2 text-sm text-gray-600">
          <span>test@example.com</span>
          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
}