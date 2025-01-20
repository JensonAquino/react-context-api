import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const initailData = {
  title: "",
    content: "",
    image: "",
    category: "",
    isPublished: false,
}
function CreatePostPage() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(initailData);

useEffect(() => {
  getPosts();
}, [])

const getPosts= () => {
  axios.get(`${apiUrl}/posts`).then((resp) => {
    console.log(resp);
    setPosts(resp.data.post)
  })
};

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const sendPost = (event) => {
    event.preventDefault();
    console.log("submit", formData);

    axios.post(`${apiUrl}/posts`, formData).then((resp) => {
      console.log(resp)
      const newPost = resp.data;

      const newPosts = [
        ...posts,
        newPost
      ]
      setPosts(newPosts)
      setFormData(initailData)
    })
  };

  const deletePost = (id) => {
    console.log("delate", id);
    axios.delete(`${apiUrl}/posts/${id}`).then((resp) => {
      console.log(resp)
      const updatedPosts = menu.filter((post) => post.id != id)
      setMenu(updatedPosts)
    })
  }
  return (
    <>
      <div className="container">
      {
        posts.length > 0 ? (
            posts.map((post) => (
                <div key={post.id}>
                    <h3 className="text-center text-black">Ultimi post</h3>
                    <div className="text-center mb-3">
                        {post.image && <img src={post.image} alt="" className="img-fluid" />}
                    </div>
                    <div className="card container">
                        <div className="card-body text-center">
                            <h5>{post.title}</h5>
                            <img src={`${apiUrl}/${post.image}`} alt="" />
                            <p>{post.content}</p>
                            <p><strong>Categoria:</strong> {post.category}</p>
                            <p>
                                <strong>Stato:</strong> {post.isPublished ? "Pubblicato" : "Non pubblicato"}
                            </p>
                        </div>
                    </div>
                    <div className="container text-center">
                        <button
                            className="btn btn-danger mt-2"
                            onClick={() => (deletePost(post.id))}
                        >
                            Elimina Post
                        </button>
                    </div>
                </div>
            ))
        ) : (
        <p className="text-center text-black">Articoli non esistenti</p>
    )
    }
        <form onSubmit={sendPost}>
          <div className="mb-3">
            <div className="text-center">
              <label htmlFor="title" className="form-label">
                <h1 className="text-black mt-4">Crea nuovo articolo</h1>
              </label>
            </div>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Titolo"
              value={formData.title}
              onChange={handleInputChange}
            />
            <textarea
              name="content"
              className="form-control mt-3"
              placeholder="Contenuto"
              value={formData.content}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="image"
              className="form-control mt-3"
              placeholder="URL immagine"
              value={formData.image}
              onChange={handleInputChange}
            />
            <select
              name="category"
              className="form-control mt-3"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Seleziona categoria</option>
              <option value="Tech">Tech</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Education">Education</option>
            </select>
            <div className="form-check mt-3">
              <input
                type="checkbox"
                name="isPublished"
                className="form-check-input"
                checked={formData.isPublished}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Pubblica articolo</label>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary">
                Salva Post
              </button>
            </div>
          </div>
        </form>
      </div>

    </>
  );
}

export default CreatePostPage;