import React from 'react'
import Link from "next/link"
import moment from "moment"

 const PostCard = ({post}) => {
  return (
   <div className="bg-white p-0 lg:p-8 pb-12  mb-6 shadow-lg rounded-lg">
    <img className="w-full h-80 object-cover object-top lg:rounded-lg mb-8" src={post.featuredImage.url} alt={post.title}/>
    <h1 className="font-bold text-3xl transition duration-700 hover:text-pink-600 text-center cursor-pointer mb-8">
      <Link href={`post/${post.slug}`}>
      {post.title}
      </Link>
    </h1>
    <div className="block lg:flex justify-center items-center">
      <div className="flex justify-center items-center mb-6">
      <img className="rounded-full" width={30} height={30} src={post.author.photo.url} alt={post.author.name}/>
              <span className="font-normal ml-2 text-2xl">{post.author.name}</span>
      </div>
      <div className="text-center lg:ml-8 mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            <span>{moment(post.createdAt).format("MMMM DD,YYYY")}</span>
      </div>
    </div>
    <p className="text-center px-4 text-gray-600 mb-8">{post.excerpt}</p>
    <div className="text-center">
      <Link href={`post/${post.slug}`}>
        <span className="px-8 py-3 bg-pink-400 text-white text-center rounded-full transition duration-500 transform hover:-translate-y-1 cursor-pointer inline-block">Continue Reading</span>
      </Link>
    </div>
   </div>
  )
}

export default PostCard;

