import { useState } from "react";
import "./CarGallery.css";
import carDetails from "../../data/carDetails";

const CarGallery = () => {
  const [selectedImage, setSelectedImage] = useState(
    carDetails.gallery[0]
  );

  return (
    <section className="car-gallery">
      <div className="gallery-container">
        <h1 className="gallery-title">
          {carDetails.title}
        </h1>

        <div className="gallery-grid">
          {/* Main Image */}
          <div className="main-image">
            <img
              src={selectedImage}
              alt={carDetails.title}
            />
          </div>

          {/* Thumbnails */}
          <div className="thumbnail-grid">
            {carDetails.gallery.slice(1).map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === image ? "active" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarGallery;