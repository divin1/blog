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
          <p className="pt-16">
            I was born in 1996, grew up and still live in Switzerland. <br />I
            studied Computer Science and, right after university, I joined a
            young and ambitious startup on a mission to revolutionize the
            processes of one of the most stagnant business fields.
          </p>
          <p className="pt-8">
            I like to learn, understand and simplify things. <br />
            The goal of this blog is to expose my thoughts, ideas and processes,
            trasparently and throughout my journey. <br />
            You will find articles on anything that intersects with the modern
            human condition, and the utmost goal of self actualization:
          </p>
          <ul className="p-4 list-disc list-inside">
            <li>Entrepreneurship</li>
            <li>Work and career</li>
            <li>Personal economy</li>
            <li>Technology</li>
            <li>Philosophy</li>
          </ul>
          <p>
            Hope you enjoy your stay.
            <br />
            <b>Nicolas</b>
          </p>
          <h2 className="text-stone-900 dark:text-stone-50 font-bold text-xl mt-24">
            Contact
          </h2>
          <p>
            Feel free to send me an email at{" "}
            <a
              href={`mailto:${config.email}`}
              className="text-stone-500 dark:text-stone-300 hover:text-secondary-400 dark:hover:text-secondary-400"
            >
              {config.email.replace("@", " [at] ")}
            </a>
            .
          </p>
        </Container>
      </Layout>
    </>
  );
}

export default About;
