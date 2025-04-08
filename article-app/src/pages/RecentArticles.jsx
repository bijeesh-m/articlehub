import React, { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import articles from "../../data.json";

const RecentArticles = () => {
    const [category, setCategory] = useState("all");
    const categories = ["all", ...new Set(articles.map((article) => article.category))];

    const filteredArticles = articles.filter((article) => {
        return category === "all" ? true : category === article.category;
    });

    console.log(category);

    return (
        <div className="  min-h-screen py-5 px-20">
            <h1 className=" text-center text-4xl  font-semibold">📚 Recent Articles</h1>
            <div className=" flex justify-end">
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
