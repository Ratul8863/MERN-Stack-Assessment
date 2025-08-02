"use client";

import { ArrowTrendingUpIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/outline";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
}

const StatCard = ({
  title,
  value,
  icon,
  bgColor,
}: StatCardProps) => (
  <div className="flex items-center space-x-4 rounded-xl bg-white p-6 shadow-md transition-transform hover:scale-105">
    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const SalesChart = () => (
  <div className="rounded-xl bg-white p-6 shadow-md">
    <h3 className="mb-4 text-xl font-semibold text-gray-900">Sales Trend</h3>
    <div className="h-64 rounded-lg border border-gray-200 bg-gray-50">
      <p className="flex h-full items-center justify-center text-gray-400">
        Chart placeholder will go here.
      </p>
    </div>
  </div>
);

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Sales",
      value: "$12,450",
      icon: <ArrowTrendingUpIcon className="h-6 w-6 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      title: "New Orders",
      value: "2,150",
      icon: <ShoppingCartIcon className="h-6 w-6 text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Active Users",
      value: "453",
      icon: <UsersIcon className="h-6 w-6 text-white" />,
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
      
      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
      
      {/* Sales Chart Section */}
      <SalesChart />
    </div>
  );
}