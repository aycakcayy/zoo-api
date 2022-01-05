import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Posts(props) {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = 'http://universities.hipolabs.com/search?country=turkey';

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

  return (
    <>
      {animals.map((animal) => (
        <p>{animal.name}</p>
      ))}
    </>
  );
}
export default Posts;
