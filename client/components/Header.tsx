import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "首页", path: "/" },
    { label: "参数化建模", path: "/modeling" },
    { label: "案例库", path: "/cases" },
    { label: "学习文档", path: "/docs" },
  ];

  return (
    <header className="w-full px-6 pt-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1800px]">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-extrabold text-brand-lightblue md:text-4xl lg:text-5xl">
              Sophicar
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-12 lg:flex xl:gap-24">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xl font-extrabold text-brand-lightblue transition-opacity hover:opacity-80 xl:text-3xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Icon & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-10 w-10 text-brand-lightblue" />
            </button>

            {/* User Icon */}
            <button className="flex items-center justify-center" aria-label="User menu">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 cursor-pointer transition-opacity hover:opacity-80 lg:h-16 lg:w-16 xl:h-[70px] xl:w-[70px]"
              >
                <path
                  d="M40.8721 35.1239C45.1866 32.933 48.1518 28.4543 48.1518 23.2931C48.1518 15.9799 42.202 10.0302 34.8888 10.0302C27.5755 10.0302 21.6259 15.9799 21.6259 23.2931C21.6259 28.4543 24.5911 32.9329 28.9056 35.1239C21.4111 37.6324 15.995 44.7183 15.995 53.0461C15.995 53.9327 16.7138 54.6517 17.6006 54.6517C18.4873 54.6517 19.2061 53.9328 19.2061 53.0461C19.2061 44.3987 26.2413 37.3634 34.8889 37.3634C43.5364 37.3634 50.5715 44.3987 50.5715 53.0461C50.5715 53.9327 51.2903 54.6517 52.1771 54.6517C53.0638 54.6517 53.7826 53.9328 53.7826 53.0461C53.7826 44.7183 48.3665 37.6325 40.8721 35.1239ZM24.8369 23.2931C24.8369 17.7504 29.3463 13.2412 34.8888 13.2412C40.4315 13.2412 44.9407 17.7505 44.9407 23.2931C44.9407 28.8357 40.4314 33.345 34.8888 33.345C29.3463 33.345 24.8369 28.8357 24.8369 23.2931Z"
                  fill="#E8F3FF"
                />
                <path
                  d="M59.7487 10.2512C53.1381 3.64075 44.3489 0 35 0C25.6511 0 16.8618 3.64066 10.2513 10.2512C3.64059 16.862 0 25.6511 0 35C0 44.3488 3.64059 53.1381 10.2513 59.7488C16.8619 66.3594 25.6511 70 35 70C44.3489 70 53.1381 66.3594 59.7487 59.7488C66.3594 53.1381 70 44.3488 70 35C70 25.6511 66.3594 16.8619 59.7487 10.2512ZM35 66.789C17.4715 66.789 3.211 52.5286 3.211 35C3.211 17.4715 17.4715 3.211 35 3.211C52.5285 3.211 66.789 17.4714 66.789 35C66.789 52.5286 52.5285 66.789 35 66.789Z"
                  fill="#E8F3FF"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="mt-4 flex flex-col gap-4 border-t border-brand-lightblue/20 pt-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-extrabold text-brand-lightblue transition-opacity hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
