"use client";

import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

// A simple component for a key-value pair in the profile card
const ProfileDetail = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex items-center justify-between border-b border-gray-200 py-3 text-sm">
    <span className="font-medium text-gray-500">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    avatar: "/user-avatar.png", // Assuming an image in the public folder
    totalOrders: 15,
    lastLogin: "2023-10-27",
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">User Profile</h2>
      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center border-b border-gray-200 pb-6 mb-6">
          <div className="relative h-24 w-24 mb-4 rounded-full overflow-hidden border-2 border-blue-500">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
                <UserIcon className="h-12 w-12" />
              </div>
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
          <span className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {user.role}
          </span>
        </div>
        
        {/* Profile Details */}
        <div className="space-y-4">
          <ProfileDetail label="Total Orders" value={user.totalOrders} />
          <ProfileDetail label="Last Login" value={user.lastLogin} />
          <ProfileDetail label="Member Since" value="2022-05-10" />
        </div>
        
      </div>
    </div>
  );
}