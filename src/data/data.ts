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
    price: 42,
    image: "/featured-products/chair 1.png",
  },
  {
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42,
    image: "/featured-products/chair 2.png",
  },
  {
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42,
    image: "/featured-products/chair 3.png",
  },
  {
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42,
    image: "/featured-products/chair 4.png",
  },
];

const latestProducts: TLatestProduct[] = [
  {
    title: "Comfort Handy Craft",
    price: 42,
    oldPrice: 65,
    sale: false,
    image: "/latest-products/chair-1.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42,
    sale: true,
    oldPrice: 65,
    image: "/latest-products/chair-2.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42,
    sale: false,
    oldPrice: 65,
    image: "/latest-products/chair-3.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42,
    sale: false,
    oldPrice: 65,
    image: "/latest-products/chair-4.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42,
    sale: false,
    oldPrice: 65,
    image: "/latest-products/chair-5.png",
  },
  {
    title: "Comfort Handy Craft",
    price: 42,
    sale: true,
    oldPrice: 65,
    image: "/latest-products/chair-6.png",
  },
];

const trendingProducts: TTrendingProduct[] = [
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-1.png",
    price: 26,
    oldPrice: 40,
  },
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-2.png",
    price: 26,
    oldPrice: 40,
  },
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-3.png",
    price: 26,
    oldPrice: 40,
  },
  {
    title: "Cantilever Chair",
    image: "/trending-products/chair-4.png",
    price: 26,
    oldPrice: 40,
  },
];

const topCategories = [
  {
    title: "Mini LCW Chair",
    price: 56,
    image: "/top-categ/chair-1.png",
  },
  {
    title: "Mini LCW Chair",
    price: 56,
    image: "/top-categ/chair-2.png",
  },
  {
    title: "Mini LCW Chair",
    price: 56,
    image: "/top-categ/chair-3.png",
  },
  {
    title: "Mini LCW Chair",
    price: 56,
    image: "/top-categ/chair-4.png",
  },
];

export { featuredProducts, latestProducts, trendingProducts, topCategories };
