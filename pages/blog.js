function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export function getStaticProps() {
  // Call an external API endpoint to get posts
  const posts = {
    code: 200,
    message: "success",
  };

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
