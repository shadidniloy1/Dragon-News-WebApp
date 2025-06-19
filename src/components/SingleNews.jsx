import React, { useState } from "react";
import { FaEye, FaStar } from "react-icons/fa";

const SingleNews = ({ news }) => {
  console.log(news);
  const { title, author, thumbnail_url, total_view, rating, details } = news;

  const [showFull, setShowFull] = useState(false);

  console.log(news);
  return (
    <div className="card shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-2">{title}</h2>

      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full  object-cover rounded mb-3"
      />

      <div className="px-4 py-3">
        <p className="text-sm text-gray-700">
          {showFull ? details : `${details.slice(0, 120)}...`}
          <span
            onClick={() => setShowFull(!showFull)}
            className="text-blue-600 font-medium cursor-pointer ml-1"
          >
            {showFull ? "Show Less" : "Read More"}
          </span>
        </p>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
