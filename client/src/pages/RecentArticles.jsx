import React, { useEffect, useMemo, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { getAllArticles } from "../apis/articleApis";

const RecentArticles = () => {
  const [category, setCategory] = useState("all");
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getAllArticles();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category)),
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const categorized =
        category === "all" ? true : category === article.category;
      const searchItems = article.title
        .toLowerCase()
        .startsWith(query.toLowerCase());
      return categorized && searchItems;
    });
  });

  console.log(filteredArticles);

  return (
    <div className="  min-h-screen py-5 px-20">
      <h1 className=" text-center text-4xl  font-semibold">
        📚 Recent Articles
      </h1>
      <div className=" flex justify-end gap-2">
        <div className=" flex justify-center items-center border rounded-full py-2 px-4 ">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className=" border-none outline-none  px-2"
            type="text"
            name=""
            id=""
          />
          <span>🔍</span>
        </div>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className=" border outline-none  rounded-full px-3 py-1"
          name=""
          value={category}
          id=""
        >
          {categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredArticles.map((article, i) => {
          return (
            <div key={i}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentArticles;
