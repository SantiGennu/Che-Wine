const products = [
  {
    id: 1,
    image: "../src/assets/alamos malbec.jpg",
    quantity: 1,
    name: "Alamos",
    type: "red wine",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 2,
    image: "../src/assets/emilia malbec.jpg",
    quantity: 1,
    name: "Emilia",
    type: "red wine",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 3,
    image: "../src/assets/estiba malbec.jpg",
    quantity: 1,
    name: "Estiba",
    type: "red wine",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 4,
    image: "../src/assets/rutini malbec.jpg",
    quantity: 1,
    name: "Rutini",
    type: "red wine",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 5,
    image: "../src/assets/zuccardi malbec.jpg",
    quantity: 1,
    name: "Zuccardi",
    type: "red wine",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 6,
    image: "../src/assets/azul malbec.jpg",
    quantity: 1,
    name: "Azul",
    type: "red wine",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 7,
    image: "../src/assets/luigi bosca white.jpg",
    quantity: 1,
    name: "Luigi Bosca",
    type: "white wine",
    variaty: "Blend",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 8,
    image: "../src/assets/rutini chardonay.jpg",
    quantity: 1,
    name: "Rutini",
    type: "white wine",
    variaty: "Chardonay",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 9,
    image: "../src/assets/santa julia.jpg",
    quantity: 1,
    name: "Santa Julia",
    type: "white wine",
    variaty: "Chardonay",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 10,
    image: "../src/assets/dona paula sauvignon.jpg",
    quantity: 1,
    name: "Dona Paula ",
    type: "white wine",
    variaty: "Sauvignon Blanc",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 11,
    image: "../src/assets/andeluna torrontes.jpg",
    quantity: 1,
    name: "Andeluna",
    type: "white wine",
    variaty: "Torrontes",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 12,
    image: "../src/assets/casa boher chardonnay.jpg",
    quantity: 1,
    name: "Casa Boher",
    type: "white wine",
    variaty: "Sauvignon Blanc",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 13,
    image: "../src/assets/kaiken rose.jpg",
    quantity: 1,
    name: "Kaiken Estate",
    type: "Rosé",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 14,
    image: "../src/assets/punto final rose.jpg",
    quantity: 1,
    name: "Punto Final",
    type: "Rosé",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 15,
    image: "../src/assets/norton.jpg",
    quantity: 1,
    name: "Norton",
    type: "Rosé",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 16,
    image: "../src/assets/andeluna rose.jpg",
    quantity: 1,
    name: "Andeluna",
    type: "Rosé",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 17,
    image: "../src/assets/dona paula rose.jpg",
    quantity: 1,
    name: "Doña Paula",
    type: "Rosé",
    variaty: "malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
  {
    id: 18,
    image: "../src/assets/trumpeter rose.jpg",
    quantity: 1,
    name: "Trumpeter",
    type: "Rosé",
    variaty: "Malbec",
    price: 1000,
    description: "es un vino que refleja su amor por la buena uva",
  },
];

export const getProduct = (id) => {
  const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    resolve(id ? products.find((prod) => prod.id == id) : products);
    // }, 2000);
  });

  return promise;
};

// export const getProduct = (id) => {
//   const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     resolve(products[0]);
//     // }, 2000);
//   });

//   return promise;
// };
