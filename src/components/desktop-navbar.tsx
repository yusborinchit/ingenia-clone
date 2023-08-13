interface DesktopNavbarProps {
  navLinks: { label: string; href: string }[];
}

function DesktopNavbar({ navLinks }: DesktopNavbarProps) {
  return (
    <nav className="hidden md:flex items-center gap-4 text-sm">
      <ul className="flex">
        {navLinks.map((item) => (
          <li className="flex">
            <a
              href={item.href}
              className="px-2 text-white hover:underline focus-visible:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className="px-4 grid place-items-center uppercase font-semibold bg-blue-800 text-white py-2 rounded group-data-[sticky]:bg-white transition-colors group-data-[sticky]:text-blue-800"
      >
        Contacto
      </a>
    </nav>
  );
}

export default DesktopNavbar;
