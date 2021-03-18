import useSWR from "swr";
import axios from "axios";


const url = "https://7hit.vn/rest/V1/7hit/search/popular-search-term";

export const getAll = async function () {
  const response = await fetch(url);
  const movies = await response.json();
  return movies;
};

// ***************** Dùng cho dynamic route *****************
export function getAllPostIds() {
  const fileNames = ["trang-diem", "nuoc-hoa", "Son"];
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
export function getPostData(id) {
  const fullPath = id;
  const content = {
    data: `hello-${id}`,
    date: '2012-01-26T13:51:50.417-07:00'
  }
  console.log("matterResult", content);
  return {
    id,
    ...content,
  };
}







// ***************** Dùng cho dynamic route *****************
// export const App = async function() {
//   const fetcher = (url) => axios.get(url).then((res) => res.data);
//   const { data, error } = useSWR('/api/data', fetcher)
// }