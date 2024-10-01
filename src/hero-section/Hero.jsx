import './Hero.css'
import dnaAnim from "../assets/t0gQKcnM.mp4"

function Hero() {
    return (
        <div className='Hero'>
            <video src={dnaAnim} autoPlay muted loop playsInline ></video>
            <div className='overlay'>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis tenetur accusantium labore quaerat impedit architecto deserunt saepe magni? Doloribus, ab. Libero minima voluptate quod tempora mollitia voluptates animi provident iusto?</h2>
            </div>
        </div>
    )
}

export default Hero
