import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../apis/articleApis";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      const fetchedArticle = await getArticle(id);
      setArticle(fetchedArticle);
    };
    fetchArticle();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br  flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl bg-white  overflow-hidden">
        {/* Content Section */}
        <div className="p-8 space-y-6">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Author: {article.author}
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
              Category: {article.category}
            </span>
            <span className="ml-auto">
              Published: {new Date(article.published_date).toLocaleDateString()}
            </span>
          </div>

          {/* Image Section */}
          {article.image && (
            <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full "
              />
            </div>
          )}

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex molestiae corporis eveniet aliquid veritatis recusandae at commodi quidem! Voluptates rerum velit perferendis id recusandae vitae tempora aut quo earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates beatae possimus, ad, ratione sunt cumque porro exercitationem cum eaque veniam fugit blanditiis minima commodi tenetur! Labore hic fuga nostrum.

          {/* Content */}
          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
