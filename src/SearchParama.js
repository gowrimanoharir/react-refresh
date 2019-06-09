import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Dropdown from "./Dropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = Dropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = Dropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(
    () => {
      setBreeds([]);
      setBreed("");

      pet.breeds(animal).then(({ breeds: apiBreeds }) => {
        const breedString = apiBreeds.map(({ name }) => name);
        setBreeds(breedString);
        console.log(breedString);
      }, console.error);
    },
    //needs dependencies of state variables even the state setters that are not really dependent eg; here setBreed and setBreeds
    //if you dont give dependency array then it will go on infinite api calls
    //if needs to runn only when component is mounted then give Empty Array
    [animal, setBreed, setBreeds]
  );

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
