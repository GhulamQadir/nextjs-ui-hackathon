interface TProduct {
  title: string;
  code: string;
  price: number;
  image: string;
}
interface TLatestProduct {
  title: string;
  price: number;
  oldPrice: number;
  sale: boolean;
  image: string;
}

interface TTrendingProduct {
  title: string;
  image: string;
  price: number;
  oldPrice: number;
}

const featuredProducts: TProduct[] = [
  {
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    image: "/featured-products/chair 1.png",
  },
  {
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    image: "/featured-products/chair 2.png",
  },
  {
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    image: "/featured-products/chair 3.png",
  },
  {
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    image: "/featured-products/chair 4.png",
  },
];

const latestProducts: TLatestProduct[] = [
  {
    title: "Comfort Handy Craft",
    price: 42.0,
    oldPrice: 65.0,
    sale: false,
    image: "/latest-products/chair-1.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42.0,
    sale: true,
    oldPrice: 65.0,
    image: "/latest-products/chair-2.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42.0,
    sale: false,
    oldPrice: 65.0,
    image: "/latest-products/chair-3.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42.0,
    sale: false,
    oldPrice: 65.0,
    image: "/latest-products/chair-4.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42.0,
    sale: false,
    oldPrice: 65.0,
    image: "/latest-products/chair-5.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42.0,
    sale: true,
    oldPrice: 65.0,
    image: "/latest-products/chair-6.png",
  },
];

const trendingProducts: TTrendingProduct[] = [
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-1.png",
    price: 26.0,
    oldPrice: 40.0,
  },
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-2.png",
    price: 26.0,
    oldPrice: 40.0,
  },
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-3.png",
    price: 26.0,
    oldPrice: 40.0,
  },
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-4.png",
    price: 26.0,
    oldPrice: 40.0,
  },
];

export { featuredProducts, latestProducts, trendingProducts };
