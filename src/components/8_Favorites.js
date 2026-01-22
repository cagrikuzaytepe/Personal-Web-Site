// src/components/4_Favorites.js DOSYASININ YENİ İÇERİĞİ

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const favoritesData = [
  {
    category: "My Favorite Director",
    name: "Christopher Nolan",
    image: "/img/Nolan.jpg",
    link: "https://letterboxd.com/cagrikuzaytepe/",
  },
  {
    category: "My Favorite Musician",
    name: "Göksel",
    image: "/img/göksel.jpg", // Dosya adını küçük harfle yazdım, sizdekiyle aynı olmalı
    link: null,
  },
  {
    category: "My Favorite Sport",
    name: "Football",
    image: "/img/Voll.jpg",
    link: null,
  },
];

const Favorites = () => {
  return (
    <section className="favorites section" id="favorites">
      <h2 className="section-title">My Favorites<span></span></h2>
      <div className="favorites-grid">
        {favoritesData.map((fav, index) => (
          <div className="favorite-card" key={index}>
            <div className="favorite-card__image-wrapper">
              <img src={fav.image} alt={fav.name} />
            </div>
            <div className="favorite-card__content">
              <p className="favorite-card__category">{fav.category}</p>
              <h3 className="favorite-card__name">{fav.name}</h3>
              {fav.link && (
                <a href={fav.link} target="_blank" rel="noopener noreferrer" className="favorite-card__link">
                  My Profile <FaArrowRight />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;