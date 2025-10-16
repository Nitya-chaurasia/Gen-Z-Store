import ProductCard from "../ProductCard";
export default function MensCategory() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <h2 className="text-4xl text-gray-900 font-semibold mb-2">
              Men's Category
            </h2>
            <p className="text-gray-600">Explore the coolest tees for men.</p>
          </div>
          <div>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              View More
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 place-items-stretch">
          <ProductCard
            image="/mens/m1.jpg"
            tag="OVERSIZED FIT"
            title="Better Day Ahead"
            subtitle="Olive Green Graphic Oversized Tee"
            price="₹729"
            oldPrice="₹1399"
            discount="48% OFF"
            rating="4.4"
          />

          <ProductCard
            image="/mens/m2.jpg"
            tag="OVERSIZED FIT"
            title="Hello Beach"
            subtitle="White Oversized T-shirt"
            price="₹799"
            oldPrice="₹1499"
            discount="47% OFF"
            rating="4.4"
          />

          <ProductCard
            image="/mens/m3.jpg"
            tag="OVERSIZED FIT"
            title="Priceless Gift"
            subtitle="Off White Print Oversized Tee"
            price="₹699"
            oldPrice="₹1299"
            discount="46% OFF"
            rating="4.4"
          />

          <ProductCard
            image="/mens/m4.jpg"
            tag="OVERSIZED FIT"
            title="Hawaii"
            subtitle="Teal Green Graphic Oversized T-shirt"
            price="₹749"
            oldPrice="₹1399"
            discount="47% OFF"
            rating="4.4"
          />
        </div>
      </div>
    </section>
  );
}
