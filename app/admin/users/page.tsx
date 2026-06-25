"use client";

import { useEffect, useState } from "react";
import { userService } from "@/services/userService";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((u: any) => (
        <div
          key={u.id}
          style={{
            border: "1px solid #ddd",
            marginBottom: 10,
            padding: 10,
          }}
        >
          <p>{u.name}</p>
          <p>{u.email}</p>
        </div>
      ))}
    </div>
  );
}