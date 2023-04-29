import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={"/about"}>to About</Link>
      {posts?.map(d => (
        <Link key={d.id} href={`/post/${d.id}`}>
          <h1>
            {d.id}. {d.title}
          </h1>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data.posts,
    }, // will be passed to the page component as props
  };
}
