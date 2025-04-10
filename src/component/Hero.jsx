
import heroimg from '/src/assets/hero.jpg'


function Hero(){
    return(
        <section className="image">
            <img src={heroimg} alt="Training Image" className="sale__image"/>
            <div className=" image__offer">
                <h2>Udemy flash sale! 24 hours to save.</h2>
                <p>get the top courses for just 499.Just one day to save but a lifetime to learn</p>

            </div>
        </section>




    )
}

export default Hero