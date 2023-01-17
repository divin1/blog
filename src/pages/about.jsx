import Container from "components/Container";
import Layout from "components/Layout";
import SEO from "components/SEO";
import config from "config";

function About() {
  return (
    <>
      <SEO />
      <Layout>
        <Container>
          <p className="pt-24">
            Hi, I'm Nicolas. <br />
            I was born in 1996 and I'm from Switzerland. <br />I studied
            Computer Science and, right after university, I joined a young and
            ambitious startup on a mission to revolutionize the processes of one
            of the most stagnant business fields.
            <br />
            I like to learn, understand and simplify things. <br />
            The goal of this blog is to expose thoughts and ideas that I develop
            or come across throughout my journey.
          </p>
          <p className="pt-16">
            Got anything to say or ask?
            <br /> Feel free to send me a message at{" "}
            <a
              href={`https://twitter.com/${config.twitter}`}
              target="_blank"
              className="text-stone-500 hover:text-secondary-400 dark:text-stone-300 dark:hover:text-secondary-400"
              rel="noreferrer"
            >
              @{config.twitter}
            </a>
            .
          </p>
        </Container>
      </Layout>
    </>
  );
}

export default About;
