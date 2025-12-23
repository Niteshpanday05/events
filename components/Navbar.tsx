import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="">
          <Link href="/" className='"logo flex items-center space-x-2'>
            <Image
              src="/icons/aaa.jpg"
              alt="logo"
              width={24}
              height={24}
              className="bg-amber-700"
            />
            <p className="hidden md:block">Upcoming Events</p>
          </Link>
        </div>

        <ul className="text-[#178582]">
          <Link href="/">Home</Link>
          <Link href="/">Events</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Ticket</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
