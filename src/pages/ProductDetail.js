import { Link, useParams } from "react-router-dom"

export default function ProductDetail() {
    const params = useParams();

    return <>
        <h1>Product Details!</h1>
        <p>{params.productId}</p>
        <p><Link to="..">Back</Link></p>
        <p><Link to=".." relative="path">Back relative path</Link></p>
    </>
}