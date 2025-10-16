"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    href: "#",
    img: "/hero1.jpg",
  },
  {
    id: 2,
    href: "#",
    img: "/hero.png",
  },
  {
    id: 3,
    href: "#",
    img: "/hero2.jpg",
  },
  {
    id: 4,
    href: "#",
    img: "/hero3.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const isHovering = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const length = slides.length;
  const intervalMs = 4000; // 4 sec

  const goTo = (i) => setIndex((i + length) % length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);
// play auto 
  useEffect(() => {
    if (isHovering.current) return;
    timerRef.current = setInterval(() => {
      next();
    }, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [index]);

  const onMouseEnter = () => {
    isHovering.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const onMouseLeave = () => {
    isHovering.current = false;
    timerRef.current = setInterval(() => {
      next();
    }, intervalMs);
  };

  // swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-12">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-gray-200"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
      >
        {/* slider*/}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div
              key={s.id}
              className="relative min-w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh]"
            >
              {/* bg image */}
              <Image
                src={s.img}
                alt={`Slide ${s.id}`}
                fill
                priority={s.id === 1}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          ))}
        </div>

        {/* arws */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/80 text-gray-900 hover:bg-white shadow"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/80 text-gray-900 hover:bg-white shadow"
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 sm:gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-5 sm:w-6 bg-white"
                  : "w-2 sm:w-2.5 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
