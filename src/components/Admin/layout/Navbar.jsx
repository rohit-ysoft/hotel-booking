import { Menu } from "lucide-react";

const Navbar = ({ setOpen }) => {
  return (
    <header className=" ml-40 bg-white shadow p-4 flex items-center justify-between">
      <button
        className="lg:hidden"
        onClick={() => setOpen(o => !o)}
      >
        <Menu size={28} />
      </button>

      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-4 py-2 w-72"
      />

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
};

export default Navbar;
