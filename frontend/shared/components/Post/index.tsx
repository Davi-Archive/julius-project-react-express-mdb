import Image from "next/image";
import React from "react";

interface IPost {
  title?: string;
  text?: string;
  imageUrl?: string;
}

const Post = ({ title, text, imageUrl }: IPost) => {
  const getImagePost = (imageUrl: string|undefined): string => {
    if (imageUrl) return imageUrl;
    return "https://poe.ninja/images/classes/Raider_avatar.png";
  };

  return (
    <>
      <article className="containerPost">
        <div className="imagePostContainer">
          <img src={getImagePost(imageUrl)} alt={title || "Post Image"} />
        </div>
        <div className="contentContainer">
          <div className="titlePost">
            <h1>{title}</h1>
          </div>
          <div className="postTextContainer">
            <p>{text}</p>
          </div>
        </div>
        <button className="buttonBottomPost">Placeholder</button>
      </article>
      <hr className="horizontalLine"></hr>
    </>
  );
};

export default Post;
