import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Animals(props) {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/6';

  const getAllAnimals = async () => {
    const res = await axios.get(URL);
    const data = res.data;
    setAnimals(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllAnimals();
    console.log(animals);
  }, []);

  if (loading) return 'Loading...Wait a minute';

  return (
    <div className="container-fluid bg-dark mt-5">
      <div className="row d-flex justify-content-center mt-5">
        {animals.map((item, index) => (
          <div key={index} className="col-sm-12 col-md-6 card-style">
            <Link to={`products/${item.date}`}>
              <img
                src={item.image_link}
                className="card-img-top shadow-lg"
                alt="..."
              />
            </Link>
            <div className="card-body bg-light rounded mt-2 border border-info shadow-lg">
              <p className="card-title d-flex text-font">{item.name}</p>
              <Link
                to={`products/${item.date}`}
                className="text-decoration-none d-flex justify-content-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-info-circle-fill mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>{' '}
                <span className="mx-2 text-font"> Get Info</span>{' '}
              </Link>
              <p className="card-text text-secondary text-end mt-2 text-font">
                {item.habitat}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Animals;
