import Image from "next/image";

const Post = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="relative min-h-[232px]">
        <Image
          className="rounded-lg"
          fill
          alt=""
          src={
            product.images[0].slice(0, 4) == "http"
              ? product.images[0]
              : undefined
          }
        ></Image>
      </div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  return {
    paths: data.map(pro => {
      return {
        params: { slug: pro.title.split(" ").join("-") + "-" + pro.id },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const ids = params.slug.split("-");
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products/" + ids[ids.length - 1]
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    }, // will be passed to the page component as props
  };
}
