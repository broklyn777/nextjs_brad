import Link from "next/link";

import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Tillbaka</Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export default article;

// import Link from "next/link";

// const article = ({ article }) => {
//   const router = useRouter();
//   const { id } = router.query;
//   return (
//     <>
//       <h1>{article.title}</h1>
//       <p>{article.body}</p>
//       <br />
//       <Link href="/">Tillbaka</Link>
//     </>
//   );
// };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const article = await res.json();
// };

// export default article;
