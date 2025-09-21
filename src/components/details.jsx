import { Data } from "../../data"
import { useParams } from "react-router"
export default function Details() {
    const { id } = useParams()

    let product = Data.find((item) => {
        return item.id == id
    })
    return (
        <>
            <div className="detail_container">
                <figure>
                    <img src={product.image} alt="" />
                </figure>
                <figcaption>
                    <h1>Category:{product.category}</h1>
                    <h2>Title:{product.title}</h2>
                    <p>Description:{product.description}</p>
                    <h3>Price:{product.price}</h3>
                    <h4>Ratings:{product.rating.rate}</h4>
                </figcaption>
            </div>
        </>
    )
}