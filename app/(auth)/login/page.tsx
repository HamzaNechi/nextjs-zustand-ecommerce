"use client";

import { useEffect, useState } from "react";
import { userService } from "@/services/userService";
import { useAuthStore } from "@/store/authStore";
import { User } from "@/types/user";

export default function LoginPage() {
  const [users, setUsers] = useState<User[]>([]);
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-light tracking-widest text-gray-900 uppercase">
            Sign In
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500 uppercase tracking-wide">
            Select an account to continue
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="bg-white px-4 py-5 border border-gray-200 sm:p-6 sm:px-10">
            <ul className="space-y-4">
              {users.map((user) => (
                <li key={user.id} className="flex flex-col border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={() => login(user)}
                      className="ml-4 inline-flex items-center px-6 py-2 border border-transparent text-xs font-medium uppercase tracking-widest text-white bg-black hover:bg-gray-800 focus:outline-none transition-colors duration-300"
                    >
                      Login
                    </button>
                  </div>
                </li>
              ))}
              {users.length === 0 && (
                <li className="text-center text-sm text-gray-500">Loading users...</li>
              )}
            </ul>
          </div>
          
          <div className="text-center mt-4">
            <a href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors duration-300">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}