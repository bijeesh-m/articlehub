import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const navigate = useNavigate();

    return (
        <div className=" mt-2 border border-gray-800 p-5   flex flex-col justify-between gap-4">
            <div className=" space-y-3">
                <h1 className=" font-bold line-clamp-1">{article.title}</h1>
                <p className=" text-sm">Category: {article.category}</p>
            </div>
            <button
                onClick={() => navigate(`/article/${article._id}`)}
                className=" text-sm border border-yellow-500 hover:bg-amber-300 cursor-pointer p-2"
            >
                View Article
            </button>
        </div>
    );
};

export default ArticleCard;
