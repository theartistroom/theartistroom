import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/header";
import Information from "../../components/information";
import AboutEvent from "../../components/aboutEvent";
import EventCards from "../../components/eventCard";
import Gallery from "../../components/gallery";
import Testimonials from "../../components/testimonials";
import FAQs from "../../components/faqs";
import HostConnectedSoul from "../../components/hostConnectedSoul";
import Footer from "../../components/footer";
import SEO from "../../seo/SEO";

const Home = () => {

    return (
        <>
            <SEO title="The Artist Room — Home" description="Events, music, workshops, and community at The Artist Room. Book your spot now." />
            <Grid class="Home-Page">
                <Header />
                <Information />
                <AboutEvent />
                <EventCards />
                <Gallery />
                <Testimonials />
                <HostConnectedSoul />
                <FAQs />
                <Footer />
            </Grid>
        </>
    );
}

export default Home;
