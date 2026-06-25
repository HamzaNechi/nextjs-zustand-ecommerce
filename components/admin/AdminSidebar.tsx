import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div
      style={{
        width: 200,
        borderRight: "1px solid #ddd",
        padding: 20,
      }}
    >
      <h3>Admin</h3>

      <ul>
        <li>
          <Link href="/admin">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href="/admin/products">
            Products
          </Link>
        </li>

        <li>
          <Link href="/admin/users">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}