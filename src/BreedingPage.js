import React, { useState } from "react";
import { Form, Button, Accordion, Card } from "react-bootstrap";

export default function BreedingPage() {
  const [breed, setBreed] = useState("Maltese");

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  return (
    <div>
      <section className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100 text-center hero-bg">
        <h1 className="display-1 fw-bold mb-4 text-light">
          Connecting Pet Lovers to Pet Care
        </h1>
        <p className="fs-4 mb-4 text-light">
          Find the best services for your pet, from grooming to adoption.
        </p>
        <button className="btn btn-primary btn-lg">
          Explore Breeding Services
        </button>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex">
                <div className="me-3">
                  <label htmlFor="petType">Pet Type</label>
                  <select className="form-select" id="petType">
                    <option>Dog</option>
                    <option>Cat</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="breedType">Breed Type</label>
                  <select
                    className="form-select"
                    id="breedType"
                    value={breed}
                    onChange={handleBreedChange}
                  >
                    <option>Maltese</option>
                    <option>Beagle</option>
                    <option>Bulldog</option>
                  </select>
                </div>
              </div>
              <button type="button" className="btn btn-primary">
                Book {breed} Here
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <h2>About {breed}</h2>
            <p className="lead text-info">An Amazing Breed for Pet Lovers!</p>
            <ul>
              <li>
                <strong>Average Height: </strong>
                Male: 9-10 inches, Female: 9-10 inches
              </li>
              <li>
                <strong>Average Weight: </strong>
                Male: 6-7 pounds, Female: 4-7 pounds
              </li>
              <li>
                <strong>Life Expectancy: </strong> 12-15 years
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <img
              src="/path-to-maltese-image.jpg"
              alt="Maltese"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
