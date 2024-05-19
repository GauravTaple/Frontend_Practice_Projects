const HeroSection = () => {
    return (
    <main className="hero container ">
        <div className="Hero-content">
            <div>
            <h1>Your Feet Deserve the Best</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        </div>

        <div className="Hero-btn">
            <button className="b1">Shop Now</button>
            <button className="b2">Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>
            <div className="Hero-icon">
                <img src="/images/flipkart.svg" alt="flipkart"/>
                <img src="/images/amazon.svg" alt="amazon"/>
            </div>
        </div>
        </div>
        <div className="Hero-image">
            <img src="/images/shoe_image.svg" alt="shoe"/>
        </div>

    </main>
    )
}

export default HeroSection;