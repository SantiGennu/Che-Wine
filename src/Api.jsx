const products = [
  {
    id: 1,
    image: "../src/assets/alamos malbec.jpg",
    name: "Alamos",
    type: "Red wine",
    variaty: "Malbec",
    price: 800,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 12,
    bestSeller: "false",
  },
  {
    id: 2,
    image: "../src/assets/emilia malbec.jpg",
    name: "Emilia",
    type: "Red wine",
    variaty: "Malbec",
    price: 1150,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 6,
    bestSeller: "false",
  },
  {
    id: 3,
    image: "../src/assets/estiba malbec.jpg",
    name: "Estiba",
    type: "Red wine",
    variaty: "Malbec",
    price: 830,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 22,
    bestSeller: "false",
  },
  {
    id: 4,
    image: "../src/assets/rutini malbec.jpg",
    name: "Rutini",
    type: "Red wine",
    variaty: "Malbec",
    price: 3490,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 11,
    bestSeller: "false",
  },
  {
    id: 5,
    image: "../src/assets/zuccardi malbec.jpg",
    name: "Zuccardi",
    type: "Red wine",
    variaty: "Malbec",
    price: 2900,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 12,
    bestSeller: "true",
  },
  {
    id: 6,
    image: "../src/assets/azul malbec.jpg",
    name: "Azul",
    type: "Red wine",
    variaty: "Malbec",
    price: 1100,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 12,
    bestSeller: "true",
  },
  {
    id: 7,
    image: "../src/assets/luigi bosca white.jpg",
    name: "Luigi Bosca",
    type: "White wine",
    variaty: "Blend",
    price: 3350,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 14,
    bestSeller: "false",
  },
  {
    id: 8,
    image: "../src/assets/rutini chardonay.jpg",
    name: "Rutini",
    type: "White wine",
    variaty: "Chardonay",
    price: 3290,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 15,
    bestSeller: "false",
  },
  {
    id: 9,
    image: "../src/assets/santa julia.jpg",
    name: "Santa Julia",
    type: "White wine",
    variaty: "Chardonay",
    price: 870,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 16,
    bestSeller: "false",
  },
  {
    id: 10,
    image: "../src/assets/dona paula sauvignon.jpg",
    name: "Dona Paula ",
    type: "White wine",
    variaty: "Sauvignon Blanc",
    price: 1200,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 14,
    bestSeller: "true",
  },
  {
    id: 11,
    image: "../src/assets/andeluna torrontes.jpg",
    name: "Andeluna",
    type: "White wine",
    variaty: "Torrontes",
    price: 1500,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 9,
    bestSeller: "true",
  },
  {
    id: 12,
    image: "../src/assets/casa boher chardonnay.jpg",
    name: "Casa Boher",
    type: "White wine",
    variaty: "Sauvignon Blanc",
    price: 2340,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 11,
    bestSeller: "false",
  },
  {
    id: 13,
    image: "../src/assets/kaiken rose.jpg",
    name: "Kaiken Estate",
    type: "Rosé",
    variaty: "Malbec",
    price: 1420,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 12,
    bestSeller: "false",
  },
  {
    id: 14,
    image: "../src/assets/punto final rose.jpg",
    name: "Punto Final",
    type: "Rosé",
    variaty: "Malbec",
    price: 1800,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 13,
    bestSeller: "false",
  },
  {
    id: 15,
    image: "../src/assets/norton.jpg",
    name: "Norton",
    type: "Rosé",
    variaty: "Malbec",
    price: 900,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 13,
    bestSeller: "false",
  },
  {
    id: 16,
    image: "../src/assets/andeluna rose.jpg",
    name: "Andeluna",
    type: "Rosé",
    variaty: "Malbec",
    price: 1200,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 15,
    bestSeller: "true",
  },
  {
    id: 17,
    image: "../src/assets/dona paula rose.jpg",
    name: "Doña Paula",
    type: "Rosé",
    variaty: "Malbec",
    price: 2200,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 14,
    bestSeller: "false",
  },
  {
    id: 18,
    image: "../src/assets/trumpeter rose.jpg",
    name: "Trumpeter",
    type: "Rosé",
    variaty: "Malbec",
    price: 3000,
    description: "Es un vino que refleja su amor por la buena uva",
    stock: 10,
    bestSeller: "true",
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
