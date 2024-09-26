"use client"

import { useEffect, useState } from "react";


const page = () => {

    const [podcasts, setPodcasts] = useState([]);
  
  useEffect(() => {
    // Fetch the JSON data from the public folder
    const fetchData = async () => {
      const response = await fetch('/data.json'); // Replace with actual path
      const data = await response.json();
      setPodcasts(data);
    };

    fetchData();
  }, []);

  const filterByCategory = (category) => {
    return podcasts.filter(podcast => podcast.category === category);
  };

    return (
        <div>
            <div>
      <h2>Podcasts by Category</h2>

      {/* Technology Category */}
      <section>
        <h3>Technology</h3>
        <ul>
          {filterByCategory('Technology').map(podcast => (
            <li key={podcast.id}>
              <h4>{podcast.title}</h4>
              <p>Artist: {podcast.artist}</p>
              <p>Plays: {podcast.plays}</p>
              <p>{podcast.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Lifestyle Category */}
      <section>
        <h3>Lifestyle</h3>
        <ul>
          {filterByCategory('Lifestyle').map(podcast => (
            <li key={podcast.id}>
              <h4>{podcast.title}</h4>
              <p>Artist: {podcast.artist}</p>
              <p>Plays: {podcast.plays}</p>
              <p>{podcast.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Entertainment Category */}
      <section>
        <h3>Entertainment</h3>
        <ul>
          {filterByCategory('Entertainment').map(podcast => (
            <li key={podcast.id}>
              <h4>{podcast.title}</h4>
              <p>Artist: {podcast.artist}</p>
              <p>Plays: {podcast.plays}</p>
              <p>{podcast.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Food Category */}
      <section>
        <h3>Music</h3>
        <ul>
          {filterByCategory('Food').map(podcast => (
            <li key={podcast.id}>
              <h4>{podcast.title}</h4>
              <p>Artist: {podcast.artist}</p>
              <p>Plays: {podcast.plays}</p>
              <p>{podcast.description}</p>
            </li>
          ))}
        </ul>
      </section>

    </div>
        </div>
    );
};

export default page;