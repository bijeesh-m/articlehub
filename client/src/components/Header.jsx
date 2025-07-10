import React, { useEffect, useMemo, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { getAllArticles } from "../apis/articleApis";

const Header = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getAllArticles();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const queryResults = useMemo(() => {
    return articles.filter((article) => {
      return article.title.toLowerCase().startsWith(query.toLowerCase());
    });
  });

  console.log(queryResults);

  return (
    <div className=" bg-black text-white  p-5">
      <header className=" flex justify-between ">
        <div className=" flex gap-10 items-center">
          <h1 className=" text-2xl">📰 ArticleHub</h1>
          <nav>
            <ul className=" flex gap-10">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className=" flex gap-4">
          <div className=" relative">
            <input
              placeholder=" Search articles"
              className=" border-2 border-white outline-none rounded-full px-3 py-1 "
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              name=""
              id=""
            />
            {query && (
              <div className=" border border-black  absolute bg-white text-black w-full rounded-md p-3 max-h-[200px] overflow-auto">
                {queryResults.length > 0 ? (
                  queryResults.map((article, i) => {
                    return (
                      //   <Link to={`/article/${article._id}`}>
                      <p
                        onClick={() => {
                          setQuery("");
                          navigate(`/article/${article._id}`);
                        }}
                        className="  cursor-pointer hover:scale-103 line-clamp-1 duration-300 hover:text-blue-900   font-bold m-1"
                        key={i}
                      >
                        {article.title}
                      </p>
                      //   </Link>
                    );
                  })
                ) : (
                  <p className=" text-red-500 text-sm">Article not found</p>
                )}
              </div>
            )}
          </div>

          <button className=" cursor-pointer bg-white text-black rounded-full px-3">
            SignIn
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
