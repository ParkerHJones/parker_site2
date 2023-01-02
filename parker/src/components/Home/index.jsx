import "./style.css"; 
import { Link } from "react-router-dom"; 

const Home = () => {
    return (
        <div className="home">
        <div className="title">
            <h1>
                <p> Hello </p>
                <p> My name is Parker </p>
                <p> I am a tennis coach, recreational programmer, certified yoga instructor, and spanish speaker. </p>
            </h1>
            <Link to="/about">
                <button> About </button>
            </Link>
        </div>
        <div className ="person">
            <img class="picture"
            src={`${process.env.PUBLIC_URL}/pinkShirt.png`} 
            alt="picture"
            />
        </div>
        </div>
    )   
};

export default Home;