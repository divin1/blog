import ThemeChanger from "components/ThemeChanger";
import { GitHub, Rss } from "react-feather";

function Footer() {
  return (
    <footer className="w-full min-h-32 p-12 flex flex-col text-base space-y-4 items-center dark:bg-stone-900">
      <span>ndv {new Date().getFullYear()}</span>

      <div className="flex items-center space-x-8">
        <a href="/rss.xml" target="_blank">
          <Rss />
        </a>
        <a href="https://github.com/divin1" target="_blank" rel="noreferrer">
          <GitHub />
        </a>
        <ThemeChanger />
      </div>
    </footer>
  );
}

export default Footer;
