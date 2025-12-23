import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-6">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className=""></div>
              <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
            </div>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Discover developer events, tech meetups, and conferences happening
              around the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Subscribe to newsletter
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              Get the latest events and updates straight to your inbox.
            </p>

            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gray-800"></div>

        {/* Bottom */}
        <div className="flex items-center justify-center text-sm md:flex-row">
          <p className="text-gray-400 flex items-center justify-center">
            © {new Date().getFullYear()} Upcoming Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
