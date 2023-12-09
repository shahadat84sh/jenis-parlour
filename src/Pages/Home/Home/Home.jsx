import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import HandleScreen from "../HandleScree/HandleScreen";
import MessageForm from "../Message/MessageForm";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Jerin's Parlour</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <HandleScreen></HandleScreen>
            <Testimonials></Testimonials>
            <MessageForm></MessageForm>
        </div>
    );
};

export default Home;