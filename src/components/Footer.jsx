import ThemeChanger from "components/ThemeChanger";
import { GitHub, Rss } from "react-feather";

function Footer() {
  return (
    <footer className="min-h-32 flex w-full flex-col items-center space-y-4 p-12 text-base dark:bg-stone-900">
      <span>ndv {new Date().getFullYear()}</span>

      <div className="flex items-center space-x-8">
        <a href="/rss.xml" target="_blank" aria-label="RSS">
          <Rss />
        </a>
        <a
          href="https://github.com/divin1"
          target="_blank"
          aria-label="GitHub"
          rel="noreferrer"
        >
          <GitHub />
        </a>
        <ThemeChanger />
      </div>
    </footer>
  );
}

export default Footer;
