const products = [
  {
    name: "Milk Chocolate",
    price: "$29.99",
    img: "https://via.placeholder.com/200"
  },
  {
    name: "Caramel Bar",
    price: "$29.99",
    img: "https://via.placeholder.com/200"
  },
  {
    name: "Peanut Butter Cups",
    price: "$34.99",
    img: "https://via.placeholder.com/200"
  },
  {
    name: "Chocolate Box",
    price: "$45.00",
    img: "https://via.placeholder.com/200"
  }
];

const Products = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        SHOP OUR COLLECTION
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 text-center hover:scale-105 transition"
          >
            <img src={p.img} className="mx-auto mb-4" />
            <h3 className="font-bold">{p.name}</h3>
            <p className="text-gray-500">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;