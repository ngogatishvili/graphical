import React from 'react'
import Image from "next/image"

 const Author = ({author}) => {
  return (
    <div className="mt-20 p-12 mb-6 rounded-lg bg-black bg-opacity-20 text-center relative">
      <div className="absolute left-0 right-0 -top-14">
        <Image unoptimized src={author.photo.url} alt={author.name} width="100px" height="100px" className="rounded-full"/>
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white">{author.bio}</p>
    </div>
  )
}


export default Author;

