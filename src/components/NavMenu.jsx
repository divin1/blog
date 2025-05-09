import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import BulbIcon from "components/icons/BulbIcon";
import Link from "next/link";
import {
  Circle as CircleIcon,
  Menu as MenuIcon,
  Umbrella as UmbrellaIcon,
} from "react-feather";

function NavMenu() {
  const links = [
    { href: "/", label: "Home", icon: CircleIcon },
    { href: "/about", label: "About", icon: UmbrellaIcon },
    { href: "/thoughts", label: "Thoughts", icon: BulbIcon },
  ];

  return (
    <Menu>
      <MenuButton className="focus:not-data-focus:outline-hidden data-focus:outline data-focus:outline-white data-hover:bg-white/10 data-open:bg-white/10 inline-flex items-center gap-2 bg-transparent px-3 py-1.5 text-sm/6 font-semibold rounded-full">
        <MenuIcon className="size-6" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="z-99 origin-top-right bg-grey-800 data-closed:scale-95 data-closed:opacity-0 w-52 rounded-xl border border-white/5 bg-black/80 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-hidden"
      >
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <MenuItem key={link.href}>
              <Link
                href={link.href}
                className="data-focus:bg-white/10 transition-colors duration-300 group flex w-full items-center gap-2 rounded-lg px-3 py-1.5"
              >
                <span className="flex w-full items-center gap-2 px-3 py-1.5 hover:text-primary-500 delay-100 transition-colors duration-300">
                  <Icon className="size-4 fill-white/30" />
                  {link.label}
                </span>
              </Link>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

export default NavMenu;
