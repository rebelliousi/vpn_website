// advertiseData.ts
import image from "../assets/img/image 2.png";
import image2 from "../assets/img/image 5.png";
import image3 from "../assets/img/image 7.png";

export interface AdvertiseItem {
    image: string;
    backgroundColor: string;
    title: string;
    description: string;
    imagePosition?: 'left' | 'right'; // Optional: Image position
  }
  
  const advertiseData: AdvertiseItem[] = [
    {
      image: image,
      backgroundColor: "#E7D9D033",
      title: "Protect your online footprint with Shield VPN",
      description:
        "Every account created, email sent, image posted, or website visited adds to a person's online footprint. Why let anyone know where you are surfing the web from? Connect to any of the locations on Shield VPN and keep your IP hidden from people and cyber attackers snooping around and monitoring your activities online.",
      imagePosition: 'left',
    },
    {
      image: image2,
      backgroundColor: "#0133661A",
      title: "Stream content from anywhere in the world",
      description:
        "Your favorite videos, movies, TV shows, or other media content that’s available on streaming platforms like Netflix, HBO Max, even Amazon Prime might vary from region to region. Who says you can't get access to those contents? With Shield VPN, you have can stream your favorite media content from anywhere in the world with no buffering.",
      imagePosition: 'right',
    },
    {
      image: image3,
      backgroundColor: "#97979726",
      title: "Enjoy high-speed and reliable internet connections",
      description:
        "No more buffering on your favorite TV shows or music streaming platforms. You can now browse the internet with the speed of light when you use Shield VPN today and not miss the best moments on your streaming platforms. Cool right?",
      imagePosition: 'left',
    },
  ];
  
  export default advertiseData;