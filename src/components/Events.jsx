import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import Modal from './Modal.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const Events = () => {
  const { t, events } = useLanguage();
  const [selectedImg, setSelectedImg] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selectedImg) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedImg(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [selectedImg]);

  const openModal = (image) => setSelectedImg(image);
  const closeModal = () => setSelectedImg(null);

  return (
    <>
      <section className="events section" id="events">
        <Container>
          <SectionHeading eyebrow={t.events.eyebrow} title={t.events.title} />

          <div className="events-grid">
            {events.map((event) => (
              <article key={event.id} className="event-card">
                <div className="event-card__header">
                  <h3>{event.title}</h3>
                  <p className="event-card__role">
                    {t.events.roleLabel}: {event.role}
                  </p>
                </div>
                <p className="event-card__description">{event.description}</p>

                <div className="event-card__gallery">
                  {event.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className="event-card__thumb"
                      onClick={() => openModal(image)}
                      aria-label={`${t.events.openGallery} — ${event.title} ${index + 1}`}
                    >
                      <img src={image} alt="" loading="lazy" width="160" height="120" />
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Modal
        selectedImg={selectedImg}
        closeModal={closeModal}
        closeButtonRef={closeButtonRef}
        closeLabel={t.modal.close}
        altLabel={t.modal.enlarged}
      />
    </>
  );
};

export default Events;
