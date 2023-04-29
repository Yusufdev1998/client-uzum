const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return {
    paths: data.posts.map(post => {
      return {
        params: { id: post.id.toString() },
      };
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch("https://dummyjson.com/posts/" + params.id);
  const data = await res.json();
  return {
    props: {
      post: data,
    }, // will be passed to the page component as props
  };
}
