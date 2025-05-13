import { Link } from "react-router-dom"

const PRODUCTS = [
    { id: 'product-1', title: 'Product 1' },
    { id: 'product-2', title: 'Product 2' },
    { id: 'product-3', title: 'Product 3' },
]

export default function Products() {
    return <>
        <h1>My Products Page</h1>
        <ul>
            {PRODUCTS.map((prod => (
                <li key={prod.id}>
                    {/* <Link to={`/products/${prod.id}`}>{prod.title}</Link> */}
                    <Link to={prod.id}>{prod.title}</Link>
                </li>
            )))}
        </ul>
    </>
}