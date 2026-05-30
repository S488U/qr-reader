import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full h-auto bg-transparent flex justify-center items-center absolute top-4 left-0 right-0">
      <nav className="text-white bg-gray-900 flex flex-row items-end gap-1 py-5 px-7 rounded-full ">
        <Link href="/">
          <h1 className="font-bold text-xl">QR Reader</h1>
        </Link>
        <p className="italic text-sm">Read your QR instantly</p>
      </nav>
    </header>
  );
};

export default Navbar;
