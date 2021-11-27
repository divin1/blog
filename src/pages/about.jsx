import Layout from "components/layout";
import Head from "next/head";
import config from "../../config";

function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>ndv</title>
          <meta name="description" content="about ndv" />
          <meta property="og:title" content="about - ndv's blog" />
          <meta property="og:description" content="about ndv" />
        </Head>
        <h1>About</h1>
        <h3>Hi</h3>
        <p>
          I'm Nicolas, born in the mid 90s, and raised somewhere in Switzerland.
        </p>
        <p>
          Out of the almost infinite interests, I ended up choosing and studying
          Computer Science, graduated and started working right away for a young
          startup.
        </p>
        <p>
          I often say that if I could, I would be a student for life, and in a
          way that is the case.
          <br />I strongly believe that constantly developing one's self is
          among the most influencial reasons for meaning in life, and therefore
          I spend most of my "free" time exploring new ideas, challenging my
          beliefs and learning.
        </p>
        <p>
          I've come to the conclusion that everything that is unknown to me
          intrigues me to different degrees, but at the center of it all, there
          are humans: what they do, why they do it, with whom, and how can these
          actions and relations be optimized.
        </p>
        <p>
          The goal of this blog is to share my ideas and experiences, the good
          and the bad, as I progress and evolve, so other people might relate
          and even benefit from it.
          <br />
          In this blog, you will find articles about entrepreneurship and
          startup life, technology and innovation, philosophy, personal economy
          and finance, and many other aspects that are core to humans in modern
          times.
        </p>
        <p>
          Hope you enjoy your stay.
          <br />
          <b>- Nicolas</b>
        </p>
        <h2>Contact</h2>
        <p>
          Feel free to send me an email at{" "}
          <a href="`mailto:${config.email}`">{config.email}</a>.
        </p>
      </Layout>
    </>
  );
}

export default About;
