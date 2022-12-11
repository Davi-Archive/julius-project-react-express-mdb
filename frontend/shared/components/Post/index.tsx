import { useState } from "react";
import { IOnePostFormat } from "../../dto/PostDto";
import Button from "../Button";

const MAX_CHARACTERS_AT_MORE = 130;

const Post = ({ title, description, imgUrl }: IOnePostFormat) => {
  const [showMoreText, setShowMoreText] = useState<boolean>(false);
  const getImagePost = (imageUrl: string | undefined): string => {
    if (imageUrl) return imageUrl;
    return "https://poe.ninja/images/classes/Raider_avatar.png";
  };

  return (
    <>
      <article className="containerPost">
        <div className="contentContainer">
          <div className="imagePostContainer">
            <img src={getImagePost(imgUrl)} alt={title || "Post Image"} />
          </div>
          <div className="titlePost">
            <h1>{title}</h1>
          </div>
          <div className="postTextContainer">
            {!showMoreText && (
              <>
                <p>
                  {description?.slice(0, MAX_CHARACTERS_AT_MORE)}{" "}
                  <span
                    className="showMoreOrHideText"
                    onClick={() => setShowMoreText(true)}
                  >
                    ...mais
                  </span>
                </p>
              </>
            )}
            {showMoreText && (
              <>
                <p>
                  {description}{" "}
                  <span
                    className="showMoreOrHideText"
                    onClick={() => setShowMoreText(false)}
                  >
                    ...esconder
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
        <div className="btnPostContainer">
          <Button onClick={() => console.log("click")}>Ler Mais</Button>
        </div>
      </article>
      <hr className="horizontalLine"></hr>
    </>
  );
};

export default Post;
