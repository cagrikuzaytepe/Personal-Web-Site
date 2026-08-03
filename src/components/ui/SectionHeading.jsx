const SectionHeading = ({ eyebrow, title, align = 'left' }) => (
  <div className={`section-heading section-heading--${align}`}>
    {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
    <h2 className="section-heading__title">{title}</h2>
  </div>
);

export default SectionHeading;
