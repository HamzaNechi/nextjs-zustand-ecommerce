import { create } from "zustand";
import { persist } from "zustand/middleware";

import { User } from "@/types/user";

interface AuthState {
  user: User | null;

  login: (user: User) => void;

  logout: () => void;

  isAdmin: () => boolean;
  
}




export const useAuthStore = create<AuthState>()(
    
  persist(
    (set, get) => ({
      user: null,

      login: (user) =>
        set({
          user,
        }),

      logout: () =>
        set({
          user: null,
        }),


        isAdmin: () => {
            const user = get().user;
            return user?.email === "Sincere@april.biz";
        },
    }),
    {
      name: "auth-storage",
    }
  ),

  
);