import Card from "@/components/product/Card";
import Head from "next/head";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl gap-5 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {products?.map(pro => (
          <Card key={pro.id} {...pro}></Card>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    }, // will be passed to the page component as props
    revalidate: 60,
  };
}
