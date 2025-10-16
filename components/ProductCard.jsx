"use client";
import { Star } from "lucide-react";
export default function ProductCard({
  image,
  tag,
  title,
  subtitle,
  price,
  oldPrice,
  discount,
  rating,
}) {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-none bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col">
      <div className="relative w-full aspect-[3/4] @max-sm:aspect-[2/3] overflow-hidden">
        {tag && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-gray-800 text-white text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md z-10">
            {tag}
          </span>
        )}
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 z-10"
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-600"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.74 0-3.29.81-4 2.09A4.498 4.498 0 008 3.75C5.239 3.75 3 5.765 3 8.25c0 7.22 9 11.25 9 11.25s9-4.03 9-11.25z"
            />
          </svg>
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {rating && (
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center text-[11px] sm:text-sm text-gray-700 font-medium shadow-sm z-10">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 mr-1 fill-yellow-400" />
            {rating}
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3
          className="text-[14px] sm:text-[15px] font-semibold text-gray-900 truncate"
          title={title}
        >
          {title}
        </h3>
        <p
          className="text-xs sm:text-sm text-gray-500 mt-1 truncate"
          title={subtitle}
        >
          {subtitle}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-base sm:text-lg font-bold text-gray-900">
            ₹{price}
          </span>
          {oldPrice && (
            <span className="text-gray-400 line-through text-[11px] sm:text-sm">
              ₹{oldPrice}
            </span>
          )}
          {discount && (
            <span className="text-green-600 text-[11px] sm:text-sm font-semibold">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
