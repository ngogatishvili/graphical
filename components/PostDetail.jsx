import React from 'react'
import moment from "moment"

 const PostDetail = ({post}) => {
  
  const getContectFragment=(index,text,obj,type)=>{
      let modifiedText=text;
      if(obj.bold) {
        modifiedText=(<b key={index}>{text}</b>)
      }
      else if(obj.italic) {
        modifiedText=(<em key={index}>{text}</em>)
      }
      else if(obj.underline) {
        modifiedText=(<u key={index}>{text}</u>)
      }

      

      

      switch(type) {
        case "heading-three":
          return <h3 className="text-xl font-semibold mb-4">{modifiedText.map((item,i)=><React.Fragment key={i}>{item}</React.Fragment>)}</h3>
        

        case "paragraph":
          return <p className="mb-8">{modifiedText.map((item,i)=><React.Fragment key={i}>{item}</React.Fragment>)}</p>

        case "heading-four":
          return <h4 className="mb-4 font-semibold text-xl">{modifiedText.map((item,i)=><React.Fragment key={i}>{item}</React.Fragment>)}</h4>

        case "image":
          return <img key={index} src={obj.src} alt={obj.title} width={obj.width} height={obj.height}/>

          default:return modifiedText;

         

      }
      


  }

 
  return (
   <div className="bg-white shadow-lg rounded-lg lg:p-8 mb-12 pb-12">
      <img src={post.featuredImage.url} alt={post.title} className="mb-6 object-top object-cover lg:rounded-lg w-full h-full"/>
      <div className="px-4 lg:px-0 w-full">
        <div className="block lg:flex items-center justify-center gap-7">
            <div className="flex items-center justify-center mb-6">
              <img width={40} height={40} src={post.author.photo.url} alt={post.author.name} className="rounded-full"/>
              <span className="font-semibold font-3xl ml-2">{post.author.name}</span>
            </div>
            <div className="flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{moment(post.createdAt).format("MMMM DD,YYYY")}</span>
            </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold text-center">{post.title}</h1>

        {post.content.raw.children.map((typeObj,index)=>{
           const children=typeObj.children.map((item,itemIndex)=>getContectFragment(itemIndex,item.text,item));
           return getContectFragment(index,children,typeObj,typeObj.type);
        })}
       


      </div>
   </div>
  )
}


export default PostDetail;