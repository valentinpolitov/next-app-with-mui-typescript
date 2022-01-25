import Head from "next/head";
import Link from "@/components/link";

const Home: import("next").NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next App template with Material-UI and TypeScript</title>
        <meta
          name="description"
          content="Template created by Valentin Politov"
        />
      </Head>

      <main>
        <h1>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </h1>
      </main>
    </div>
  );
};

export default Home;
