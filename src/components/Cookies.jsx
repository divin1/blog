/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Cookies() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const initialState = localStorage.getItem("allow-analytics") === null;
    setIsOpen(initialState);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [router.asPath]);

  function close() {
    localStorage.setItem("allow-analytics", true);
    setIsOpen(false);
  }

  function reject() {
    localStorage.setItem("allow-analytics", false);
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => close()}
      className="z-25 fixed inset-0 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center">
        <Dialog.Overlay className="z-21 fixed inset-0 bg-black opacity-30" />
        <div className="relative mx-auto max-w-sm rounded rounded-xl bg-white p-4 shadow-md dark:bg-stone-900">
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
            to see what's going on on my blog.
          </Dialog.Description>

          <div className="flex justify-center">
            <button
              onClick={reject}
              type="button"
              className="mx-2 font-bold text-red-300 hover:text-red-400"
            >
              Reject
            </button>
            <button onClick={close} type="button" className="mx-2 font-bold">
              Got it
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default Cookies;
