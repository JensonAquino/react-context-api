import { Link } from "react-router-dom"

function ProductsPage () {
    return (
        <>
        <h1>ProductsPage</h1>
        <section>
            <p>tutti i prodotti</p>
            <ul>
                <li><Link to="/products/1">Prodotto 1</Link></li>
                <li><Link to="/products/2">Prodotto 2</Link></li>
                <li><Link to="/products/3">Prodotto 3</Link></li>
                <li><Link to="/products/4">Prodotto 4</Link></li>
                <li><Link to="/products/5">Prodotto 5</Link></li>
                <li><Link to="/products/6">Prodotto 6</Link></li>
            </ul>
        </section>
        </>
    )
}

export default ProductsPage