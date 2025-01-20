import { useContext } from "react";
import GlobalContext from "../../../contexts/GlobalContext";

const apiUrl = import.meta.env.VITE_API_URL;


function PostList() {

  const {posts} = useContext(GlobalContext);
  
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
              </div>
            ))
          ) : (
            <p className="text-center text-black">Articoli non esistenti</p>
          )
        }
      </div>
    </>
  );
}

export default PostList;