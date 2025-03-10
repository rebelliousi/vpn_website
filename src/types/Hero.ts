import image from "../assets/img/Mask group.png";
import image2 from "../assets/img/Mask group (1).png";
import icon from "../assets/img/Vector.png";
import advert from "../assets/img/Logonetflix.png";
import advert2 from "../assets/img/BBC-Logo-1.png";
import advert3 from "../assets/img/Nike-Logo.png";

// Arayüzler (Interfaces)
interface Feature {
  icon: string;
  text: string;
}

interface TrustedBy {
  image: string;
  alt: string; // Alt özelliği eklendi
}

// Veriler
export const heroText = {
  title: "Browse the web anonymously, safe and secure",
  subtitle: "Protect your online <br /> footprint with Shield vpn",
};

export const buttonText = "Get shield vpn";

export const images = {
  mainImage: image,
  secondaryImage: image2,
};

export const features: Feature[] = [
  { icon: icon, text: "Safeguard your browsing experience" },
  { icon: icon, text: "Stay safe with 100% digital anonymity" },
  { icon: icon, text: "Protect up to 7 devices simultaneously" },
];

export const trustedByCompanies: TrustedBy[] = [
  { image: advert, alt: "Netflix Logo" }, // Alt değerleri eklendi
  { image: advert2, alt: "BBC Logo" },    // Alt değerleri eklendi
  { image: advert3, alt: "Nike Logo" },   // Alt değerleri eklendi
];
