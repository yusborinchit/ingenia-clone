import { useEffect, useRef, useState } from "react";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Acerca de nosotros", href: "#acerca-de-nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia en la industria", href: "#experiencia" },
];

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollWatcherRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollWatcherRef.current) return;

    const navObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsSticky(!entry.isIntersecting);
    });
    navObserver.observe(scrollWatcherRef.current);

    return () => {
      if (scrollWatcherRef.current)
        navObserver.unobserve(scrollWatcherRef.current);
    };
  }, [scrollWatcherRef]);

  return (
    <>
      <div ref={scrollWatcherRef} data-scroll-watcher />

      <header
        id="primary-header"
        data-sticky={isSticky}
        className="fixed top-0 left-0 w-full z-20 backdrop-blur-sm group data-[sticky=true]:bg-blue-800 transition-colors"
      >
        <div className="container px-4 py-4 items-center flex justify-between mx-auto xl:max-w-screen-xl">
          <a href="/">
            <img src="/logo.webp" alt="" className="h-[32px]" />
          </a>

          <DesktopNavbar navLinks={NAV_LINKS} />
          {isOpen && (
            <MobileNavbar
              navLinks={NAV_LINKS}
              handleClose={() => setIsOpen(false)}
            />
          )}

          <button
            aria-label="open menu"
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2 8a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
