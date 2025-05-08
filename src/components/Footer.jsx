import config from "config";
import { GitHub, Linkedin, Rss } from "react-feather";

function Footer() {
  return (
    <footer className="min-h-32 flex w-full flex-col items-center space-y-4 p-12 text-base dark:bg-stone-900">
      <div className="flex items-center space-x-8">
        <a
          href={config.github}
          target="_blank"
          aria-label="GitHub"
          rel="noreferrer"
        >
          <GitHub className="h-4 w-4 transition-colors delay-150 duration-300 hover:text-primary-500" />
        </a>

        <a
          href={config.linkedin}
          target="_blank"
          aria-label="LinkedIn"
          rel="noreferrer"
        >
          <Linkedin className="h-4 w-4 transition-colors delay-150 duration-300 hover:text-primary-500" />
        </a>

        <a href="/rss.xml" target="_blank" aria-label="RSS">
          <Rss className="h-4 w-4 transition-colors delay-150 duration-300 hover:text-primary-500" />
        </a>
      </div>

      <span className="text-[13px] text-gray-400">
        All rights reserved © {config.fullName} {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
