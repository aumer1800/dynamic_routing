import '../App.css'
import heroImage from './images/hero_image.jpg';
export default function Hero(){
    return(
        <>
        <section className="hero_section">
            <div className="hero_container">
                <figcaption className="hero_content">
                    <h1 className='hero_heading'>Style for Every Moment</h1>
                    <p className='hero_para'>From everyday essentials to standout accessories, explore fashion that fits your lifestyle — all in one place.</p>
                </figcaption>
                <figure className="hero_figure">
                    <img  className='hero_image' src={heroImage} alt="No image" />
                </figure>
            </div>
        </section>
        </>
    )
}