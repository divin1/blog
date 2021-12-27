import { Linkedin, Twitter } from "react-feather";

function Share({ url, title }) {
  const twitterUrl = `http://twitter.com/share?url=${encodeURIComponent(
    url
  )}&text=${title}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 p-16">
        <span>Enjoyed? Consider sharing.</span>
        <div className="flex space-x-8 justify-center">
          <a
            href={twitterUrl}
            target="_blank"
            className="text-stone-500 dark:text-stone-300 hover:text-secondary-400 dark:hover:text-secondary-400"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            className="text-stone-500 dark:text-stone-300 hover:text-secondary-400 dark:hover:text-secondary-400"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default Share;
