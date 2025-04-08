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

    console.log(article);

    return (
        <div className=" min-h-screen flex justify-center  p-10">
            <div className=" h-fit w-3xl border rounded overflow-hidden  space-y-3">
                <div className=" bg-green-100 text-green-800 p-5">
                    <h1 className=" font-bold text-2xl">Title : {article.title}</h1>
                    <p>Author : {article.author}</p>
                    <p>Category : {article.category}</p>
                </div>
                <div className=" p-5 space-y-3">
                    <p>
                        {article.content} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos cumque quo
                        quam, ad eum, quis distinctio alias iste sunt, aperiam consequuntur libero dolorum sed
                        consequatur incidunt quas! Veritatis, dignissimos culpa.
                    </p>
                    <p className=" text-sm mt-2 text-gray-400">Published : {article.published_date}</p>
                </div>
            </div>
        </div>
    );
};

export default Article;
