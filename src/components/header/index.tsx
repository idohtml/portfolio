import { Link } from "react-router";

export default function Header() {
  const routes = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <Link to="/" className="font-bold text-xl">
        index
      </Link>
      <nav>
        <ul className="flex gap-6">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                to={route.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
