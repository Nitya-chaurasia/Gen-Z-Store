import ProductCard from "../ProductCard";

export default function NewLaunch() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-gray-900 font-semibold mb-10 text-center">
          New Arrivals!!!
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 place-items-stretch">
          <ProductCard
            image="/mens/m5.jpg"
            tag="OVERSIZED FIT"
            title="Better Day Ahead"
            subtitle="Teal Brown Graphic Oversized Tee"
            price="699"
            oldPrice="1299"
            discount="46% OFF"
          />

          <ProductCard
            image="/female/f1.jpg"
            tag="OVERSIZED FIT"
            title="Sunhoney"
            subtitle="Yellow Floral Oversized T-shirt"
            price="699"
            oldPrice="1299"
            discount="46% OFF"
          />

          <ProductCard
            image="/female/f2.jpg"
            tag="OVERSIZED FIT"
            title="Hello Sunshine"
            subtitle="Pink Flower Print Oversized Tee"
            price="699"
            oldPrice="1299"
            discount="46% OFF"
          />

          <ProductCard
            image="/combo/c5.jpg"
            tag="OVERSIZED FIT"
            title="Combo"
            subtitle="White Graphic Oversized T-shirt"
            price="699"
            oldPrice="1299"
            discount="46% OFF"
          />
        </div>
      </div>
    </section>
  );
}
