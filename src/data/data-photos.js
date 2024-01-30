import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/photos/`;

export const photos = [
  {
    name: "Photo 1",
    description:
      "Cupidatat nostrud commodo incididunt anim mollit consequat sunt commodo aliqua culpa voluptate est ea consectetur.",
    image: imageUrl + "001.jpg",
  },
  {
    name: "Photo 2",
    description: "Aliqua commodo deserunt magna et.",
    image: imageUrl + "002.jpg",
  },
  {
    name: "Photo 3",
    description: "Excepteur laborum irure laborum ut commodo ea dolor.",
    image: imageUrl + "003.jpg",
  },
  {
    name: "Photo 4",
    description: "Ipsum voluptate velit veniam nostrud.",
    image: imageUrl + "004.jpg",
  },
  {
    name: "Photo 5",
    description:
      "Sit sunt ullamco nisi minim cillum velit id nostrud nisi deserunt id amet nulla fugiat.",
    image: imageUrl + "005.jpg",
  },
  {
    name: "Photo 6",
    description:
      "Enim aliqua consectetur enim exercitation cillum dolore eiusmod dolore consequat nisi exercitation proident exercitation.",
    image: imageUrl + "006.jpg",
  },
  {
    name: "Photo 7",
    description:
      "Mollit aute eiusmod mollit sunt id incididunt velit dolor culpa.",
    image: imageUrl + "007.jpg",
  },
  {
    name: "Photo 8",
    description:
      "Anim nostrud non tempor quis laboris aliquip veniam exercitation nisi aute anim ad.",
    image: imageUrl + "008.jpg",
  },
  {
    name: "Photo 9",
    description: "Eiusmod magna ut ea aute minim ut.",
    image: imageUrl + "009.jpg",
  },
  {
    name: "Photo 10",
    description:
      "Sit ullamco non reprehenderit laboris est sint pariatur incididunt.",
    image: imageUrl + "010.jpg",
  },
];
