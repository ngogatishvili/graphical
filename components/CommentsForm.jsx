import React,{useState,useEffect,useRef} from 'react'

import { submitComment} from '../services';


const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage,setLocalStorage]=useState(null);
  const [showSuccessMessage,setShowSuccessMessage]=useState(false);

  const commentEl=useRef();
  const nameEl=useRef();
  const emailEl=useRef();
  const storeDataEl=useRef();

  useEffect(()=>{
    nameEl.current.value=window.localStorage.getItem("name");
    emailEl.current.value=window.localStorage.getItem("email");
  },[])
 

  const handleCommentSubmission=()=>{
      setError(false);

      const {value:comment}=commentEl.current;
      const {value:name}=nameEl.current;
      const {value:email}=emailEl.current;
      const {checked:storeData}=storeDataEl.current;

      if(!comment||!name||!email) {
        setError(true);
        return;
      }

      const commentObj={
        name,email,comment,slug
      }

      if(storeData) {
        window.localStorage.setItem("name",name);
        window.localStorage.setItem("email",email)
      }else{
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("email");
      }

      submitComment(commentObj).then(()=>{
        setShowSuccessMessage(true);
        setTimeout(()=>{
          setShowSuccessMessage(false);
          nameEl.current.value="";
          emailEl.current.value="";
          commentEl.current.value="";
        },3000)
      })
      .catch(err=>{
        console.log(err);
      })

      



      


  }
  return (
    <div className='mt-20 bg-white shadow-md rounded-md p-8 pb-12 mb-8'>
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
        <div className="grid grid-cols-1 mb-4  gap-4">
          <textarea ref={commentEl} placeholder="Comment" name="comment"
          className="p-4 rounded-md outline-none bg-gray-100 focus:ring-2 focus:ring-gray-200 text-gray-700"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input ref={nameEl} name="name" placeholder="Name" className="px-4 py-2 outline-none rounded-md text-gray-700 bg-gray-100 focus:ring-2 focus:ring-gray-200"/>
          <input ref={emailEl} name="email" placeholder="E-mail" className="px-4 py-2 outline-none bg-gray-100 text-gray-700 rounded-md focus:ring-2 focus:ring-gray-200"/>

        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <input  ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true"/>
              <label className="text-gray-500 cursor-pointer ml-2" htmlFor='storeData'>Save my name and E-mail for the next time I comment</label>
            </div>
        </div>

        {error&& <p className="text-xs text-red-500">All Fields are required</p>}

        <div className="mt-8">
          <button type="button" onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
          >Post A comment</button>
          {showSuccessMessage && <span className="text-xl float-right font-semibold text-green-500 mt-3">Comment Submitted for Review</span>}
        </div>
    </div>
  )
}

export default CommentsForm;