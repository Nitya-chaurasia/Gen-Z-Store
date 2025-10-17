import ProductCard from "../../components/ProductCard";

export default function WomensCategory() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className=" text-center mb-8">
          <h2 className="text-4xl text-gray-900 font-semibold mb-2">
            Women's Category
          </h2>
          <p className="text-gray-600">Explore the coolest tees for Women.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 place-items-stretch">
          <ProductCard
            image="/female/f1.jpg"
            tag="OVERSIZED FIT"
            title="Better Day Ahead"
            subtitle="Olive Green Graphic Oversized Tee"
            price="499"
            rating="4.4"
          />

          <ProductCard
            image="/female/f2.jpg"
            tag="OVERSIZED FIT"
            title="Hello Beach"
            subtitle="White Oversized T-shirt"
            price="666"
            rating="4.4"
          />

          <ProductCard
            image="/female/f3.jpg"
            tag="OVERSIZED FIT"
            title="Priceless Gift"
            subtitle="Off White Print Oversized Tee"
            price="399"
            rating="4.4"
          />

          <ProductCard
            image="/female/f4.jpg"
            tag="OVERSIZED FIT"
            title="Hawaii"
            subtitle="Teal Green Graphic Oversized T-shirt"
            price="599"
            rating="4.4"
          />

          <ProductCard
            image="/female/f5.jpg"
            tag="OVERSIZED FIT"
            title="Urban Mode"
            subtitle="Black Typography Oversized Tee"
            price="549"
            rating="4.5"
          />

          <ProductCard
            image="/female/f6.jpg"
            tag="REGULAR FIT"
            title="Desert Vibes"
            subtitle="Beige Printed Cotton T-shirt"
            price="449"
            rating="4.3"
          />

          <ProductCard
            image="/female/f7.jpg"
            tag="OVERSIZED FIT"
            title="Midnight Hustle"
            subtitle="Navy Blue Graphic Oversized Tee"
            price="729"
            rating="4.6"
          />

          <ProductCard
            image="/female/f8.jpg"
            tag="REGULAR FIT"
            title="Wild Soul"
            subtitle="Charcoal Grey Casual T-shirt"
            price="499"
            rating="4.2"
          />

          <ProductCard
            image="/female/f9.jpg"
            tag="OVERSIZED FIT"
            title="Abstract Art"
            subtitle="Multicolor Printed Oversized Tee"
            price="759"
            rating="4.5"
          />

          <ProductCard
            image="/female/f10.jpg"
            tag="REGULAR FIT"
            title="Weekend Mood"
            subtitle="Sky Blue Minimal Print Tee"
            price="589"
            rating="4.3"
          />

          <ProductCard
            image="/female/f11.jpg"
            tag="OVERSIZED FIT"
            title="Stay Curious"
            subtitle="Maroon Graphic Oversized T-shirt"
            price="639"
            rating="4.4"
          />

          <ProductCard
            image="/female/f12.jpg"
            tag="REGULAR FIT"
            title="Mountain High"
            subtitle="Olive Green Nature Print Tee"
            price="559"
            rating="4.5"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline text-center"
        >
          Load More
        </a>
      </div>
    </section>
  );
}
