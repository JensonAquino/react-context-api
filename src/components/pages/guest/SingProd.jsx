import { useNavigate, useParams } from "react-router-dom"

function SingProd () {
const {id} = useParams();
const navigate = useNavigate();
    return (
        <>
     <button onClick={() => navigate(-1)}>indietro</button>
        <h1>Dettagli di un prodotto {id}</h1>
        <section>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate eos amet quo asperiores repudiandae alias quam nesciunt fugiat accusantium voluptatem, ex, aut velit voluptatum, officiis corporis! Deleniti, repellat fugiat?
            </p>
        </section>
        </>
    )
}

export default SingProd