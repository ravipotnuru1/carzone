import "./ServiceDetails.css";

const ServiceDetails = ({
  title,
  image,
  paragraphs,
  buttonText,
}) => {
  return (
    <section className="service-details">
      <div className="service-container">

        <h1 className="service-title">
          {title}
        </h1>

        <div className="service-content">

          <div className="service-image">
            <img
              src={image}
              alt={title}
            />
          </div>

          <div className="service-text">

            {paragraphs.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}

            <button className="deliver-btn">
              {buttonText}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;