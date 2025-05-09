import config from "config";
import { Linkedin, Twitter } from "react-feather";

function Share({ url, title }) {
  const twitterUrl = `http://twitter.com/share?url=${encodeURIComponent(
    url
  )}&text=${title}&via=${config.twitter}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-16">
      <span className="text-base">Share it</span>
      <div className="flex justify-center space-x-8">
        <a
          href={twitterUrl}
          target="_blank"
          className="text-stone-500 hover:text-secondary-400 dark:text-stone-300 dark:hover:text-secondary-400"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          className="text-stone-500 hover:text-secondary-400 dark:text-stone-300 dark:hover:text-secondary-400"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
}

export default Share;
