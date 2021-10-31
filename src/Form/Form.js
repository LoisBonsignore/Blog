//Importer la fonction useState de React
import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
 
  const [post, setPost] = useState({
    name: "",
    firstname:"",
    title:"",
    article:""
  })
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const localPost = localStorage.getItem("posts")
    if (localPost !== null) {
      setPosts(JSON.parse(localPost))

    }
  }, [])

  const handleSubmit = (e) => {
    console.log("ok");
    setPosts([...posts, {post}]);
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  function handleInput(e) {
    
  }

 
  return (
    <div id="form">
      <form id="form" onSubmit={handleSubmit}>
        <div id="infos">
          <input
            id="name"
            placeholder="Ton nom"
            type="text"
            onInput={(e) => handleInput(e, setPost({...post, name: e.target.value}))}
          />
          <input
            id="firstname"
            placeholder="Ton prenom"
            type="text"
            onInput={(e) => handleInput(e, setPost({...post, firstname: e.target.value}))}
          />
        </div>
        <div id="form-article">
          <input
            id="title"
            placeholder="Titre"
            type="text"
            onInput={(e) => handleInput(e, setPost({...post, title: e.target.value}))}
          />
          <textarea
            cols="50"
            rows="10"
            placeholder="Votre article"
            onInput={(e) => handleInput(e, setPost({...post, article: e.target.value}))}
          ></textarea>
          <button onClick={handleSubmit}>Accepter</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
