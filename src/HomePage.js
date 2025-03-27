import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import breedingIcon from "./Assets/breeding-icon.png";
import groomingIcon from "./Assets/grooming.png";
import ServiceCard from "./ServiceCard";
import tomImg from "./Assets/tom.jpeg";
import dog2 from "./Assets/dog2.jpeg";
import dog3 from "./Assets/dog3.jpeg";
import PetCard from "./PetCard";
import accesories from "./Assets/assessories.jpeg"
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
        <section class="d-flex flex-column justify-content-center align-items-center hero-bg vh-100 vw-100 text-center">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-10 col-lg-8 mx-auto">
                <h1 class="display-4 fw-bold text-light mb-4">
                  Connecting Pet Lovers to Pet Care
                </h1>
                <p class="fs-5 text-light mb-4">
                  Find the best services for your pet, from grooming to adoption.
                </p>
                <a href="#services" class="btn btn-primary btn-lg">Get Started</a>
              </div>
            </div>
          </div>
        </section>


      {/* Services Section */}
      <section id="services" className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fs-1 fw-bold mb-5">Our Services</h2>
          <div className="row g-4">
            {/* Breeding Card */}
            <ServiceCard
              serviceimg={breedingIcon}
              altText="Breeding"
              text="Breeding"
              description="Breed your pet"
              path="/breeding"
            />
            <ServiceCard
              serviceimg={groomingIcon}
              altText="Grooming"
              text="Grooming"
              description="Find the perfect groomer for your pet."
              path="/"
            />
            <ServiceCard 
             serviceimg={accesories}
             altText="Customized accessories"
             text="Customized accessories"
             description="Find customized accessories for your pets"
             path="/"
             />
            {/* Repeat similar cards for Training, Grooming, etc. */}
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section id="adopt" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fs-1 fw-bold mb-5">Featured Pets for Adoption</h2>
          <div className="service-container">
            {/* Pet Card */}
            <PetCard
              petimg={tomImg}
              petName="Tom"
              petDescription="Golden Retriever, 2 years"
            />
            <PetCard
              petimg={dog2}
              petName="Chutki"
              petDescription="German Shepherd, 2 years"
            />
            <PetCard
              petimg={dog3}
              petName="Luci"
              petDescription="Chinese Dog, 2 years"
            />

            {/* Repeat similar cards for other pets */}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fs-1 fw-bold mb-4">Petaverse Community</h2>
          <p className="fs-5 mb-4">
            Join our community of pet lovers, share tips, and post updates about
            your pets.
          </p>
          <div className="bg-light p-5 shadow rounded">
            <p>Community feed coming soon...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 Petaverse. All rights reserved.</p>
          <div className="d-flex justify-content-center mt-3">
            <a href="#" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
