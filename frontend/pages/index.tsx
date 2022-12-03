import { Footer, HeaderContainer, Post, NewsLetter } from "../shared";

export default function Home() {
  interface IPost {
    title: string;
    imageUrl: string;
  }

  const posts = [
    { title: "Titulo 1", imageUrl: "#" },
    { title: "Titulo 2", imageUrl: "#" },
    { title: "Titulo 3", imageUrl: "#" },
  ];

  return (
    <div>
      <HeaderContainer />

      {posts.map((post: IPost, index: any) => (
        <Post key={index} />
      ))}

      <NewsLetter />
      <Footer />
    </div>
  );
}
