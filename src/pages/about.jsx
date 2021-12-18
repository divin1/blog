import Layout from "components/layout";
import Head from "next/head";
import config from "../../config";
import styles from "styles/about.module.css";

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
        <h1 className={styles.title}>About</h1>
        <h3>Hi</h3>
        <p>
          I was born in 1996 and live in Switzerland. I studied Computer
          Science, and right after university I joined a young and ambitious
          startup on a mission to revulutionize the processes of one of the most
          stagnant fields.
        </p>
        <p>
          In general, I like to understand and simplify things. <br />
          The goal of this blog is to expose my ideas and opinions throughout my
          journey. You will find articles and essays on anything that can be
          simplified in life, with the utmost goal of self actualization:
        </p>
        <ul>
          <li>Entrepreneurship</li>
          <li>Work and career</li>
          <li>Personal economy</li>
          <li>Tech</li>
          <li>Philosophy</li>
        </ul>
        <p>
          Hope you enjoy your stay.
          <br />
          <b>- Nicolas</b>
        </p>
        <h2 className={styles.title}>Contact</h2>
        <p>
          Feel free to send me an email at{" "}
          <a href="`mailto:${config.email}`">{config.email}</a>.
        </p>
      </Layout>
    </>
  );
}

export default About;
