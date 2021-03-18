import { getAll } from "../lib/posts";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

import Link from "next/link";
export default function Home({ allPostsData, links }) {
  console.log(links);
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        {links.map((item) => (
          <div>
            <Link href={`/posts/${item}`}>
              <a>{item}</a>
            </Link>
          </div>
        ))}

        <ul className={utilStyles.list}>
          {allPostsData.map((item) => (
            <li className={utilStyles.listItem}>{item}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const movies = await getAll();
  const links = ["trang-diem", "nuoc-hoa", "Son"];
  return {
    props: {
      allPostsData: movies.data,
      links,
    },
  };
}
