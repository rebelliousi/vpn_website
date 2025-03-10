import stars4 from "../assets/img/Group 22.png";
import stars5 from "../assets/img/Group 22 (1).png";
export interface TestimonialData {
  stars: string;
  comment: string;
  fullName: string;

}

export const testimonials: TestimonialData[] = [
  {
    stars: stars5,
    comment:
      "I am super impressed with Shield VPN, I now have access to HBO Max which was not available in my country. Now I can comfortably stream movies online.",
    fullName: "Pet Vamburg",
  
  },
  {
    stars: stars4,
    comment: "Been using for 2 days for Spotify and videos online, Liking it … no, LOVING IT! Awesome speed, 15 second server connection and so easy to use!!!",
    fullName: "Frank Burg",
  
  },
  {
    stars: stars5,
    comment: "Been using for 2 days for Spotify and videos online, Liking it … no, LOVING IT! Awesome speed, 15 second server connection and so easy to use!!!",
    fullName: "Frank Burg",
  
  },
  {
    stars: stars4,
    comment: "Been using for 2 days for Spotify and videos online, Liking it … no, LOVING IT! Awesome speed, 15 second server connection and so easy to use!!!",
    fullName: "Frank Burg",
  
  },
];
