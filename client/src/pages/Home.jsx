import GoogleOAuthButton from "../components/home/GoogleOAuthButton.jsx";
import Hero from "../components/home/Hero.jsx";
import LoginForm from "../components/home/LoginForm.jsx";
import RegistrationForm from "../components/home/RegistrationForm.jsx";

const Home = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Hero />
        </div>
    );
}

export default Home;