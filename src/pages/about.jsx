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
            I'm Nicolas. I was born in 1996 and I'm from Switzerland. <br />I
            studied Computer Science and, right after university, I joined a
            young and ambitious startup on a mission to revolutionize the
            processes of one of the most stagnant business fields.
          </p>
          <p className="pt-8">
            I like to learn, understand and simplify things. <br />
            The goal of this blog is to trasparently expose what I learn, my
            thoughts, ideas and processes throughout my journey. <br />
          </p>
          <p>
            Hope you enjoy your stay.
            <br />
            <b>Nicolas</b>
          </p>
          <h2 className="mt-24 text-xl font-bold text-stone-900 dark:text-stone-50">
            Contact
          </h2>
          <p>
            Feel free to send me an email at{" "}
            <a
              href={`mailto:${config.email}`}
              className="text-stone-500 hover:text-secondary-400 dark:text-stone-300 dark:hover:text-secondary-400"
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
