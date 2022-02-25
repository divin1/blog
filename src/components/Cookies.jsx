/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Cookies() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const initialState = localStorage.getItem("cookies-notice") === null;
    setIsOpen(initialState);
  }, []);

  function close() {
    localStorage.setItem("cookies-notice", true);
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => close()}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white dark:bg-stone-900 rounded max-w-sm mx-auto shadow-md rounded-xl p-4">
          <Dialog.Title className="text-center">
            <span className="animate-bounce">🍪</span>
          </Dialog.Title>
          <Dialog.Description className="p-4 text-center text-stone-500 dark:text-stone-300">
            I use{" "}
            <a
              href="https://en.wikipedia.org/wiki/HTTP_cookie"
              target="_blank"
              className="underline hover:text-secondary-400 dark:hover:text-secondary-400"
              rel="noreferrer"
            >
              cookies
            </a>{" "}
            to enable analytics to monitor activity.
            <br />
            <Link href="articles/transparency" passHref>
              <a className="underline text-stone-500 dark:text-stone-300 hover:text-secondary-400 dark:hover:text-secondary-400">
                Here's my full statement
              </a>
            </Link>
          </Dialog.Description>

          <div className="flex justify-center">
            <button onClick={close} type="button" className="font-bold">
              Got it
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Cookies;
