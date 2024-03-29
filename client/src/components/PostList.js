// PostList.js
import React from "react";
import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const PostList = ({ posts }) => {
  return (
    <div className="container mx-auto mt-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="max-w-4xl mx-auto bg-white rounded-md overflow-hidden shadow-md mb-6"
        >
          <p className="text-gray-700 text-base">{post.text}</p>
          <Carousel className="rounded-xl">
            {post.images &&
              post.images.map((imgurl) => {
                return (
                  <img
                    src={imgurl}
                    alt="post"
                    className="h-72 w-full object-cover"
                  />
                );
              })}
            {post.videos &&
              post.videos.map((url) => {
                return (
                  <video
                    src={url}
                    controls
                    className="h-72 w-full object-cover"
                  />
                );
              })}
          </Carousel>

          <div className="flex justify-end px-6 py-4">
            <button className="text-blue-500 mr-4" title="Edit Post">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="text-red-500" title="Delete Post">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
