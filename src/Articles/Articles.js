import "./Articles.css";
import { useState } from "react";
import Form from "../Form/Form";

function Article() {
  const [likes, setLikes] = useState(0);

  let parsePosts = JSON.parse(localStorage.getItem("posts"));
  console.log(parsePosts);

  function getForm() {
      if (parsePosts !== null)
    return parsePosts.map(function (posts) { // Créer un nouveau composant pour le maper et qu'il ait sa propre const d'état "like"
      return (
        <div>
          <div className="article-container">
            <h2>{posts.post.title}</h2>
            <p>{posts.post.article}</p>
            {/* <p>{date}</p> */}
            <p>écrit par {posts.post.name}</p>
            <img
              id="photo-amsterdam"
              src="https://medias.voyages-leonard.com/files/2850/p_970x620/2850-20939-amsterdam--28c-29-adobestock-201794112--281-29.jpg"
              alt="Amsterdam"
            />
            <button onClick={() => setLikes(likes + 1)}>like</button>
            <p> Vous avez {likes} likes</p>
          </div>
        </div>
      );
    });
  }

  return(
      <div>
          <h2>Les différents articles:</h2>
          <div>{getForm()}</div>
      </div>
  )
}
export default Article;
