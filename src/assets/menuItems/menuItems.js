import pizza1Small from "../foodPics/pizza1small.PNG";
import pizza1Medium from "../foodPics/pizza1medium.PNG";
import pizza1Large from "../foodPics/pizza1large.PNG";
import pizza2Small from "../foodPics/pizza2small.PNG";
import pizza2Medium from "../foodPics/pizza2medium.PNG";
import pizza2Large from "../foodPics/pizza2large.PNG";
import pizza3Small from "../foodPics/pizza3small.PNG";
import pizza3Medium from "../foodPics/pizza3medium.PNG";
import pizza3Large from "../foodPics/pizza3large.PNG";
////
import combo1 from "../foodPics/combo1.PNG";
import combo2 from "../foodPics/combo2.PNG";
import combo3 from "../foodPics/combo3.PNG";
//
import snack1 from "../foodPics/snack1.PNG";
import snack2 from "../foodPics/snack2.PNG";
import snack3 from "../foodPics/snack3.PNG";

const foodItems = {
  pizza: [
    {
      id: Math.random() * 10,
      name: "Margarita",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      pizzas: {
        small: {
          img: pizza1Small,
          price: 1800,
        },
        medium: {
          img: pizza1Medium,
          price: 2500,
        },
        large: {
          img: pizza1Large,
          price: 3200,
        }
      },
    },
    {
      id: Math.random() * 10,
      name: "Beef Pizza",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      pizzas: {
        small: {
          img: pizza2Small,
          price: 2200,
        },
        medium: {
          img: pizza2Medium,
          price: 3700,
        },
        large: {
          img: pizza2Large,
          price: 4100,
        }
      },
    },
    {
      id: Math.random() * 10,
      name: "Cheesy Pizza",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      pizzas: {
        small: {
          img: pizza3Small,
          price: 2100,
        },
        medium: {
          img: pizza3Medium,
          price: 3400,
        },
        large: {
          img: pizza3Large,
          price: 3800,
        }
      },
    },
  ],
  combo: [
    {
      id: Math.random() * 10,
      name: "Combo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      price: 2500,
      img: combo1,
    },
    {
      id: Math.random() * 10,
      name: "Combo 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      price: 2500,
      img: combo2,
    },
    {
      id: Math.random() * 10,
      name: "Combo 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      price: 2500,
      img: combo3,
    },
  ],
  snacks: [
    {
      id: Math.random() * 10,
      name: "Snack 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      price: 2500,
      img: snack1,
    },
    {
      id: Math.random() * 10,
      name: "Snack 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      price: 2500,
      img: snack2,
    },
    {
      id: Math.random() * 10,
      name: "Snack 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
      price: 2500,
      img: snack3,
    },
  ],
};

// export const pizza = [
//   {
//     id: Math.random() * 10,
//     name: "Margarita",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
//     price: 2500,
//     imgs: {
//       small: asasa,
//       medium: asasasa,
//       large: asasasa,
//     },
//   },
//   {
//     id: Math.random() * 10,
//     name: "Beef Pizza",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
//     price: 3200,
//     imgs: {
//       small: asasa,
//       medium: asasasa,
//       large: asasasa,
//     },
//   },
//   {
//     id: Math.random() * 10,
//     name: "Cheesy Pizza",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
//     price: 2800,
//     imgs: {
//       small: asasa,
//       medium: asasasa,
//       large: asasasa,
//     },
//   },
// ];
// export const combo = [
//   {
//     id: Math.random() * 10,
//     name: "Combo 1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
//     price: 2500,
//     img: asa,
//   },
//   {
//     id: Math.random() * 10,
//     name: "Combo 2",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
//     price: 2500,
//     img: asa,
//   },
//   {
//     id: Math.random() * 10,
//     name: "Combo 3",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque   temporibus voluptate perferendis quasi dolor aperiam",
//     price: 2500,
//     img: asa,
//   },
// ];
// export const snacks =
export default foodItems;
