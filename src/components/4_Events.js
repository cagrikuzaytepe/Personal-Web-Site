import React, { useState } from 'react'; // React'ten useState'i import ediyoruz
import Modal from './Modal'; // Yeni oluşturduğumuz Modal componentini import ediyoruz


// Etkinlik verilerini burada merkezi bir yerde tutuyoruz.
const eventData = [
  {
    title: "ProgrammixV",
    description: "Images from our ProgrammixV event that took place from October 30th, providing training in 5 different programming languages over 3-4 weeks.",
    images: [
      "/img/Flutter.jpg",
      "/img/Web.jpg",
      "/img/Java.jpg",
      "/img/C++.jpg",
      "/img/Python.jpg",
    ]
  },
  {
    title: "Meet Up with Levent Ertaul",
    description: "The promotional image of the Meet Up we conducted with Levent Ertaul, the head of the Computer Science department at California State University.",
    images: [
      "/img/MeetUp.jpg"
    ]
  },
  {
    title: "DevFest '23",
    description: "Images from DevFest 23, which is the largest developer festival in Turkey.",
    images: [
      "/img/DevFest1.jpg",
      "/img/DevFest2.jpg",
      "/img/DevFest3.jpg",
      "/img/DevFest4.jpg",
      "/img/DevFest5.jpg",
    ]
  },
  {
    title: "Hacettepe University Career Fair 2024",
    description: "I was the technical team leader in the Canan Dağdeviren hall.",
    images: [
      "/img/Career Fair/Kariyer Fuarı '24.jpg",
    ]
  },
    {
    title: "Pura Game Jam '24",
    description: "Pura Game Jam offers a unique platform for both experienced game developers and newcomers to the field to improve themselves and showcase their creativity. Seeing that we achieved this goal again in this year's event, with the exciting theme of 'Space', made my team and me very happy.",
    images: [
      "/img/Pura Game Jam/Pura1.jpeg",
      "/img/Pura Game Jam/Pura2.jpeg",
      "/img/Pura Game Jam/Pura3.jpeg",
      "/img/Pura Game Jam/Pura4.jpeg"
    ]
  },
 
];
const Events = () => {
  // Hangi resmin seçildiğini tutmak için bir state oluşturuyoruz.
  // Başlangıç değeri null (hiçbir resim seçilmemiş).
  const [selectedImg, setSelectedImg] = useState(null);
 // Bir resme tıklandığında bu fonksiyon çalışır ve state'i günceller
  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  // Modal'ı kapatmak için bu fonksiyon state'i tekrar null yapar
  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <> {/* Fragment kullanarak Events ve Modal componentlerini sarmalıyoruz */}
      <section className="events section" id="events">
        <h2 className="section-title">Events<span></span></h2>
        <div className="events-container">
          {eventData.map((event, index) => (
            <div className="event-card" key={index}>
              <h3 className="event-card__title">{event.title}</h3>
              <p className="event-card__description">{event.description}</p>
              <div className="event-card__image-gallery">
                {event.images.map((image, imgIndex) => (
                  <div 
                    className="event-card__image-wrapper" 
                    key={imgIndex}
                    onClick={() => openModal(image)} // Tıklandığında openModal fonksiyonunu çağırır
                  >
                    <img src={image} alt={`${event.title} - ${imgIndex + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal componentini buraya ekliyoruz. State'e göre görünüp kaybolacak. */}
      <Modal selectedImg={selectedImg} closeModal={closeModal} />
    </>
  );
};

export default Events;