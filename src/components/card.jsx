import { Data } from "../../data"
import '../App.css'
import {Link} from 'react-router-dom'
export default function Card() {
    return (
        <>

            <div className="card_container">
                {
                    Data.map((item) => {
                        return (
                            <div className="card">
                                <figure className="card_figure">
                                    <img className='card_image' src={item.image} alt="" />
                                </figure>
                                <figcaption className="card_content">
                                    <h1 className="card_title">
                                        {item.title}
                                    </h1>
                                    <div className="card_detail">
                                        <Link to={`/details/${item.id}`}><button className="card_button">See Details</button>
                                        </Link>
                                        <h4 className="card_price">
                                            $ {item.price}
                                        </h4>
                                    </div>
                                </figcaption>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}