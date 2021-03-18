import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAll, getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      {postData.data}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
