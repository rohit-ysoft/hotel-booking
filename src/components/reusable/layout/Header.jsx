import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({
  logo,
  title,
  mainMenu = [],
  rightMenu = [],
  appButton = true,
  currency = "INR",
  flag = "https://flagcdn.com/w20/in.png",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#141A33] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo + Title */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="logo" className="w-24 h-7" />
          {/* <h1 className="text-lg font-semibold">{title}</h1> */}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-6 text-sm">

          {/* Left Menus */}
          {mainMenu.map((item, i) => (
            <a key={i} href={item.href} className="hover:text-gray-300 flex items-center gap-1">
              {item.label}
              {item.icon && <span>{item.icon}</span>}
            </a>
          ))}

          {/* App Button */}
          {appButton && (
            <button className="border border-white/50 rounded-full px-3 py-1">
              Open app ⬇️
            </button>
          )}

          {/* Currency */}
          <span className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            {currency}
            <img src={flag} alt="flag" className="w-5" />
          </span>

          {/* Right Menus */}
          {rightMenu.map((item, i) => (
            item.onClick ? (
              <button
                key={i}
                onClick={item.onClick}
                className="hover:text-gray-300 flex items-center gap-2"
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </button>
            ) : (
              <a
                key={i}
                href={item.href}
                className="hover:text-gray-300 flex items-center gap-2"
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </a>
            )
          ))}

        </nav>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Opening Menu */}
      {open && (
        <div className="xl:hidden bg-[#141A33] px-4 pb-4 space-y-4 text-sm">

          {/* Main Menu */}
          {mainMenu.map((item, i) => (
            <a key={i} href={item.href} className="block hover:text-gray-300">
              {item.label}
            </a>
          ))}

          {/* App Button */}
          {appButton && (
            <button className="border border-white/50 rounded-full px-3 py-1 w-full">
              Open app ⬇️
            </button>
          )}

          {/* Currency */}
          <div className="flex items-center gap-2">
            {currency}
            <img src={flag} alt="flag" className="w-5" />
          </div>

          {/* Right Menu */}
          {rightMenu.map((item, i) => (
            <a key={i} href={item.href} className="block hover:text-gray-300">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
