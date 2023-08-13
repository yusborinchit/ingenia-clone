interface DesktopNavbarProps {
  navLinks: { label: string; href: string }[];
  handleClose: () => void;
}

function MobileNavbar({ navLinks, handleClose }: DesktopNavbarProps) {
  return (
    <nav className="flex flex-col absolute md:hidden gap-4 text-sm z-30 h-screen right-0 top-0 p-4 bg-blue-900">
      <button
        aria-label="close menu"
        onClick={handleClose}
        className="text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
          />
        </svg>
      </button>

      <ul className="flex flex-col">
        {navLinks.map((item) => (
          <li className="flex">
            <a
              href={item.href}
              className="py-2 text-white hover:underline focus-visible:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className="px-4 w-full grid place-items-center uppercase font-semibold bg-blue-800 text-white py-2 rounded group-data-[sticky]:bg-white transition-colors group-data-[sticky]:text-blue-800"
      >
        Contacto
      </a>
    </nav>
  );
}

export default MobileNavbar;
