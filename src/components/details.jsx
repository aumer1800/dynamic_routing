import { Data } from "../../data";
import {Link, useParams } from "react-router-dom";

import '../App.css';

export default function Details() {
    const { id } = useParams();

    // Convert id to number if needed
    const product = Data.find((item) => item.id == id);

    // Fix filter logic
    const related_products = Data.filter(
        (item) => item.category === product.category && item.id != product.id
    );

    return (
        <>
            <Link to={'/home'}><button className="Home_btn">Home</button></Link>
            <div className="detail_section">
                <div className="detail_container">
                    <figure className="detail_figure">
                        <img className="detail_image" src={product.image} alt={product.title} />
                    </figure>
                    <figcaption>
                        <h1>Category: {product.category}</h1>
                        <h2>Title: {product.title}</h2>
                        <p>Description: {product.description}</p>
                        <h3>Price: {product.price}</h3>
                        <h4>Ratings: {product.rating.rate}</h4>
                    </figcaption>
                </div>

                <div className="related_container">
                    <h2 className="related">Related Products</h2>
                    {related_products.map((item) => (
                        <div className="related_card" key={item.id}>
                            <figure className="related_figure">
                                <img className="related_image" src={item.image} alt={item.title} />
                            </figure>
                            <figcaption className="related_content">
                                <h1 className="related_title">{item.title}</h1>
                                <div className="related_detail">
                                        <Link to={`/details/${item.id}`}><button className="related_button">See Details</button>
                                        </Link>
                                        <h4 className="related_price">
                                            $ {item.price}
                                        </h4>
                                    </div>
                            </figcaption>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
