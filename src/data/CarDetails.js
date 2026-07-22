import mainImage from "../assets/images/cars/car-red-toyota.jpeg";
import thumb1 from "../assets/images/cars/car-black-muscle.png";
import thumb2 from "../assets/images/cars/car-orange-wagon.png";
import thumb3 from "../assets/images/cars/car-black-convertible.png";
import thumb4 from "../assets/images/cars/car-red-toyota.jpeg";

const carDetails = {
  id: 1,
  title: "1967 Toyota 2000GT",

  gallery: [
    mainImage,
    thumb1,
    thumb2,
    thumb3,
    thumb4,
  ],

  specs: {
    body: "Chevrolet",
    year: "1967",
    drive: "4-wheel drive",
    vin: "130141A490292",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "28,452 miles",
    power: "420 HP",
    engine: "7.0L",
    color: "Red",
  },

  description:
    "The 1967 Toyota 2000GT is one of the most iconic classic sports cars ever produced. Carefully restored to preserve its timeless styling, it delivers a unique blend of heritage, craftsmanship, and driving experience.",
};

export default carDetails;