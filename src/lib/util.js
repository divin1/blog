import remark from "remark";
import html from "remark-html";

export async function mdxToHtml(mdxContent) {
  const result = await remark().use(html).process(mdxContent);
  return result.toString();
}

// Over-simplified function to remove most of the md & html tags
function mdxToText(mdxContent) {
  return (
    mdxContent
      // HTML
      .replace(/<[^>]+>/g, "")
      // Strikethrough
      .replace(/~~/g, "")
      // Emphasis (applied twice to handle nested emphasis)
      .replace(/([\*\_]){1,3}([a-zA-Z0-9]+)\1/g, "$2")
      .replace(/([\*\_]){1,3}([a-zA-Z0-9]+)\1/g, "$2")
      // Inline code
      .replace(/`(.+)`/g, "$1")
      // Images
      .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, "")
      // Links
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1")
      // Blockquotes
      .replace(/^\s{0,3}>\s?/g, "")
      .replace(/(^|\n)\s{0,3}>\s?/g, "\n\n")
      // Horizontal rules
      .replace(/[\*\-\_]{3, }\n/g, "")
      // New lines
      .replace(/\n+/g, "s")
  );
}

export function getReadTime(mdxContent) {
  const text = mdxToText(mdxContent);
  const wordsCount = text.split(/\s/).length;
  return Math.max(parseInt(wordsCount / 200), 1);
}
