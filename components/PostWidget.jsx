import React,{useState,useEffect} from 'react'
import Link from "next/link";
import moment from "moment";

import { getRecentPosts,getRelatedPosts } from '../services';


 const PostWidget = ({slug,categories}) => {
  console.log(slug);
  const [relatedPosts,setRelatedPosts]=useState([]);

  useEffect(()=>{
     if(slug) {
      getRelatedPosts(slug,categories).then(result=>{
        setRelatedPosts(result);
      })
     }else{
      getRecentPosts().then(result=>{
        setRelatedPosts(result)
      })
      .catch(err=>{
        console.log(err);
      })
     }
  },[slug])

  

  return (
    <div className="bg-white p-8 mb-8 shadow-lg rounded-lg">
        <h3 className="font-semibold text-xl border-b pb-4 mb-8">{slug?"Related posts":"Recent Posts"}</h3>
        {relatedPosts.map(post=>(
          <div className="flex items-center mb-4" key={post.title}>
              <div className="w-16">
                <img src={post.featuredImage.url} alt={post.title} width={60} height={60} className="rounded-full"/>
              </div>
              <div className="font-normal flex-grow ml-4">
                <p>{moment(post.createdAt).format("MMMM DD,YYYY")}</p>
                <Link href={`/post/${post.slug}`}>
                {post.title}
                </Link>

              </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget;
