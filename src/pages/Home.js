import Carousel from "../Components/Carousel";


const Home = () => {

    return (
        <div>
            <Carousel />
            <div className="home" style={{display: 'flex' , justifyContent: 'center' , alignContent : 'center'}}>
                <div className="events"style={{textAlign: "center"}}>
                    <h1>Hello there !!</h1>
                    <h1>Welcome to Turtle dedicated to savethe environment and supporting those who love there earth</h1>
                    
                    <p>At <strong>Turtle</strong>, we are passionate about making a positive impact on the environment and empowering local NGOs in their noble endeavors. Our platform serves as a hub for connecting individuals, communities, and organizations that share a common goal of preserving our planet and creating a sustainable future.</p>
                    
                    <p>Through our carefully curated events, we strive to raise awareness about environmental issues, encourage active participation, and foster a sense of community among like-minded individuals. From tree planting initiatives and beach cleanups to educational workshops and fundraising campaigns, we offer a diverse range of events that cater to various interests and causes.</p>
                    
                    <p>We believe that every small step counts, and by coming together, we can make a significant difference. Our platform provides a space where NGOs can showcase their impactful work, highlight upcoming events, and connect with passionate volunteers who are eager to contribute their time and skills.</p>
                    
                    <p>Whether you are an individual looking to make a positive change, a community group seeking inspiration, or an NGO in need of support, we invite you to explore our site and join our growing community. Together, let's create a brighter future for our planet and empower local NGOs to make a lasting impact.</p>
                    
                    <p>Join us in our mission to save the environment, support local NGOs, and make a difference. Together, we can create a more sustainable and thriving world for generations to come.</p>
                    
                    <h2>Welcome to <em>Turltel</em> !</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;