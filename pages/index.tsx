import React from "react";
import Head from "next/head";
import SlugPage from "./[slug]";

const Home: React.FC = (props) => {
  console.log(process.env.CMS_URI);
  console.log(props);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello, Next.js!</h1>
      <SlugPage />
    </div>
  );
};

export async function getStaticProps() {
  const getPages = await fetch(`http://localhost:3000/api/pages?where`);
  const resultPages = await getPages.json();

  console.log(resultPages);

  return {
    props: {
      pages: resultPages.docs,
    },
  };
}

export default Home;
