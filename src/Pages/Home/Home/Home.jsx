import Banner from "../Banner/Banner";
import HandleScreen from "../HandleScree/HandleScreen";
import MessageForm from "../Message/MessageForm";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HandleScreen></HandleScreen>
            <Testimonials></Testimonials>
            <MessageForm></MessageForm>
        </div>
    );
};

export default Home;