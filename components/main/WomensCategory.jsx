import ProductCard from "../ProductCard";

export default function WomensCategory() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <h2 className="text-4xl text-gray-900 font-semibold mb-2">
              Women's Category
            </h2>
            <p className="text-gray-600">Stylish tees designed just for you.</p>
          </div>
          <div>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              View More
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 place-items-stretch">
          <ProductCard
            image="/female/f5.jpg"
            tag="OVERSIZED FIT"
            title="Better Day Ahead"
            subtitle="Red & White Striped Oversized Tee"
            price="₹749"
            oldPrice="₹1399"
            discount="47% OFF"
            rating="4.4"
          />

          <ProductCard
            image="/female/f1.jpg"
            tag="OVERSIZED FIT"
            title="Sunhoney"
            subtitle="Yellow Floral Oversized T-shirt"
            price="₹699"
            oldPrice="₹1299"
            discount="46% OFF"
            rating="4.4"
          />

          <ProductCard
            image="/female/f3.jpg"
            tag="OVERSIZED FIT"
            title="Lazy Mood"
            subtitle="Olive Green Minimal Print Oversized Tee"
            price="₹799"
            oldPrice="₹1499"
            discount="47% OFF"
            rating="4.4"
          />

          <ProductCard
            image="/female/f4.jpg"
            tag="OVERSIZED FIT"
            title="Hawaii"
            subtitle="Light Green Graphic Oversized T-shirt"
            price="₹729"
            oldPrice="₹1399"
            discount="48% OFF"
            rating="4.4"
          />
        </div>
      </div>
    </section>
  );
}
