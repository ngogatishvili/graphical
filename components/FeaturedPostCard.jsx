import React from 'react'
import Image from "next/Image"
import moment from "moment"
import Link from "next/link"

const FeaturedPostCard = ({ post }) => {
  return (
    <div className="h-72 relative rounded-md shadow-md">
        <div className="w-full h-full absolute">
          <img className="w-full h-full object-cover rounded-md" src={post.featuredImage.url} alt={post.title}/>
        </div>
        <div className="w-full h-full absolute flex flex-col items-center justify-center">
          <p className="text-white mb-4 text-xs">{moment(post.createdAt).format("MMMM DD,YYYY")}</p>
          <p className="text-white text-2xl mb-4 font-semibold text-center">{post.title}</p>
          <div className="absolute flex items-center justify-center bottom-5">
            <Image src={post.author.photo.url} unoptimized width="30px" height="30px" className="rounded-full"/>
            <p className="text-white font-normal ml-2">{post.author.name}</p>
          </div>
        </div>

        <Link  href={`/post/${post.slug}`}><span className="absolute w-full h-full cursor-pointer"></span></Link>

    </div>
  )
}

export default FeaturedPostCard;


