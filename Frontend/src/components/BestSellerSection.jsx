

const products = [
  {
    brand: "EARNSHAW",
    name: "Earnshaw Watch",
    price: "Rs. 74,950",
    image: "/images/earnshaw1.png",
    soldOut: false,
  },
  {
    brand: "EARNSHAW",
    name: "Earnshaw Watch",
    price: "Rs. 70,950",
    image: "/images/earnshaw2.png",
    soldOut: false,
  },
  {
    brand: "TISSOT",
    name: "Tissot Watch",
    price: "Rs. 76,000",
    image: "/images/tissot1.png",
    soldOut: true,
  },
  {
    brand: "TISSOT",
    name: "Tissot Watch",
    price: "Rs. 86,000",
    image: "/images/tissot2.png",
    soldOut: false,
  },
];

const BestSellerSection = () => {
  return (
    <div className="py-12 px-4 md:px-10 bg-white text-center">
      <h2 className="text-3xl font-serif mb-8">Our Bestsellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="relative group">
            {product.soldOut && (
              <span className="absolute top-2 left-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                Sold Out
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
            <div className="mt-3 text-xs text-gray-500 uppercase">{product.brand}</div>
            <h3 className="font-medium text-base">{product.name}</h3>
            <p className="text-gray-700 text-sm">{product.price}</p>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800 transition rounded">
        Show All Products
      </button>
    </div>
  );
};

export default BestSellerSection;
