import { useState } from "react"

export default function LikeButton(){

    let [isliked,setIsLiked]= useState(false);
    let toggleLike=()=>{
        setIsLiked(!isliked);
    }

    let clicked=()=>{console.log("clicked")}
    return (
        <div>
            <p onClick={toggleLike}>
                {isliked ? (
                    <i className="fa-solid fa-heart"></i>
                ):(
                    <i className="fa-regular fa-heart"></i>
                )}

            </p>
        </div>
    )
}