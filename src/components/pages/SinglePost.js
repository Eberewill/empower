import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ posts }) => {
  return (
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
      {posts
        ? posts.map((post) => (
            <div
              key={post.id}
              class="bg-white overflow-hidden hover:bg-green-100 border border-gray-200 p-3"
            >
              <img
                class="h-56 w-full object-cover object-center"
                src={post.featured_image}
                alt=""
              />
              <div class="m-2 text-justify text-sm">
                <h2 class="font-bold text-lg h-2 mb-8">
                  {post.title.rendered}
                </h2>
                <br />
                <div class="text-xs">{post.excerpt.rendered}</div>
              </div>
              <div class="w-full text-right mt-4">
                <Link
                  class="text-green-400 uppercase font-bold text-sm"
                  to={`/post/${post.slug}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SinglePost;
