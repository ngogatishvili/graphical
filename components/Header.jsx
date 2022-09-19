import React,{useState,useEffect} from 'react'
import Link from "next/link"

import { getCategories } from '../services'



const Header = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        getCategories().then(result=>setCategories(result))
    },[])
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="w-full border-b border-blue-400 py-8 inline-block">
                <div className="md:float-left block">
                    <Link href="/">
                        <span  className="text-white text-4xl font-bold cursor-pointer">Graphql CMS</span>
                    </Link>
                </div>
                <div className=" md:float-left md:contents">
                    {categories.map(category=>(
                        <Link  key={category.slug} href={`category/${category.slug}`}>
                            <span className="text-white float-right font-2xl font-bold cursor-pointer ml-4">{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Header;