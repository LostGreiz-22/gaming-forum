import React from "react";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <section className="aboutus bg-dark p-5 d-flex flex-row align-items-center justify-content-center">
        <div className="container p-1 bg-dark text-white align-self-end">
          <div className="p-1 p-md-1 text-center">
            <h1>
              - About Pawer<span style={{ color: "#58B19F" }}>Coded</span> -
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex bg-white flex-column bd-highlight mb-3">
          <div className="p-3 bd-highlight"></div>
          <div className="d-flex flex-nowrap justify-content-center">
            <div className="p-2 text-center">
              <p className="p-2">
                PawerCoded is a multi-platform technology and lifestyle media
                company.
              </p>
              <p className="p-2">
                Built for audiences around the globe, our goal is to make
                technology easier to understand.
              </p>
              <p className="p-2">
                PowerCoded is the everyday consumer’s source for technology
                news, reviews, videos, and buying advice…
              </p>
              <p className="p-2">
                A guide to finding the right devices to match their needs.
              </p>
              <p className="p-2">
                We have teams in New York, Singapore, Area 54, Germany,
                Biringan, and Manila.
              </p>
            </div>
          </div>
          <Container>
            <section className="banner d-flex flex-row align-items-center justify-content-center"></section>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
