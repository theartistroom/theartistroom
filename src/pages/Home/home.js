import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Information from "../../components/information";
import AboutEvent from "../../components/aboutEvent";
import EventCards from "../../components/eventCard";
import Gallery from "../../components/gallery";
import Testimonials from "../../components/testimonials";
import FAQs from "../../components/faqs";
import HostConnectedSoul from "../../components/hostConnectedSoul";
import Footer from "../../components/footer";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Grid class="Home-Page">
                <div>websit under construction</div>
                // <Header />
                // <Information />
                // <AboutEvent />
                // <EventCards />
                // <Gallery />
                // <Testimonials />
                // <HostConnectedSoul />
                // <FAQs />
                // <Footer />
            </Grid>
        </>
    );
}

export default Home;
