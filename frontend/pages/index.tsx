import { Footer, HeaderContainer, Post, NewsLetter } from "../shared";

export default function Home() {
  interface IPost {
    title: string;
    imageUrl: string;
    text: string
  }

  const posts = [
    {
      title: "Titulo 1",
      imageUrl: "https://poe.ninja/images/classes/Deadeye_avatar.png",
      text: "Post1",
    },
    { title: "Titulo 2", imageUrl: "", text: "Post2" },
    { title: "Titulo 3", imageUrl: "", text: "Post3" },
  ];

  return (
    <div>
      <HeaderContainer />

      {posts.map((post: IPost, index: any) => (
        <Post key={index} title={post.title} imageUrl={post.imageUrl} text={post.text} />
      ))}

      <NewsLetter />
      <Footer />
    </div>
  );
}
