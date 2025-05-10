import React, { useEffect, useState } from "react";
import clock from "../assets/icons/clock.png";
import blogLingkaran from "../assets/images/blogLingkaran.png";
import { fetchArticles } from "../api/articleApi";

function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };
    getArticles();
  }, []);

  // Function to format the date as "DD MMM YYYY"
  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="px-[28px] mt-[4rem] lg:mt-[5rem] lg:px-[48px]">
      {/* Background spiral decoration (lingkaran) */}
      <img
        src={blogLingkaran}
        alt=""
        className="absolute right-0 top-[500px] h-[600px] -z-10 md:h-[700px] lg:h-[1000px] lg:top-96"
      />

      {/* Latest Posts */}
      <div className="md:bg-green-100/50 px-[0px] py-[30px] mt-[80px] jusify-center lg:py-[50px] lg:px-[80px] lg:mt-[130px] rounded-3xl">
        <h3 className="font-medium mb-8 text-[30px] leading-8 text-center lg:text-[40px] lg:mb-10 lg:text-left">
          Discover Our Latest Posts
        </h3>

        {/* Container for the Posts */}
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-10 md:gap-x-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {articles &&
            articles.map((article) => (
              <div key={article.id} className="flex flex-col hover:cursor-pointer h-full">
                {article.media_url && (
                  article.media_url.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                      src={article.media_url}
                      controls
                      className="w-full h-48 object-cover hover:scale-105"
                    />
                  ) : (
                    <img
                      src={article.media_url}
                      alt={article.title}
                      className="w-full h-48 object-cover hover:scale-105"
                    />
                  )
                )}
                <div className="flex flex-col flex-grow">
                  <p className="mt-4 font-medium flex-grow">
                    <a
                      href={`/articles/${article.id}`}
                      className="hover:text-yellow-400 hover:duration-300"
                    >
                      {article.title}
                    </a>
                  </p>
                  {/* Clock and Date */}
                  <div className="flex items-center mt-3">
                    <img src={clock} alt="" className="w-5 h-5" />
                    <span className="pl-2 text-green-800">
                      {formatDate(article.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
