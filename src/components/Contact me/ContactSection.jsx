import React from "react";
import Container from "../../UI/Container";
import Form from "./Form";
import { FullpageSection } from "@ap.cx/react-fullpage";
import Light from "../../UI/Light";

const ContactSection = () => {
    return (
        <FullpageSection>
            <Light color="turquoise" />
            <Container>
                <h2>Contact with me</h2>
                <p className="section-description">Get in touch or shoot me an email directly on <span className='bold'>nazar.mocherniuk@gmail.com</span>.
                    I will get back to you as soon as possible</p>
                <Form />
            </Container>
        </FullpageSection>
    );
};


export default ContactSection;