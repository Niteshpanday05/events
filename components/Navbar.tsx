import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="">
          <Link href="/" className='"logo flex items-center space-x-2'>
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={24}
              height={24}
              className=""
            />
            <p className="hidden md:block">Upcoming Events</p>
          </Link>
        </div>

        <ul>
          <Link href="/">Home</Link>
          <Link href="/">Events</Link>
          <Link href="/">Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
