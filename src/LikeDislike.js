import React, {useEffect, useState} from 'react'
import thumbsup from './assets/images/thumbs-up-3-48.png'
import LikeDiss  from './styling/LikeDislike.css'
import thumbdown from './assets/images/thumb.png'


function LikeDislike({movieId}){

    const[likes, setLikes]=useState(0);
    const[dislikes, setDislikes]= useState(0)


    useEffect(()=>{
       fetch(`http://localhost:4000/movies/${movieId}`)
       .then(res=>res.json())
       .then((movieInfo)=>{
           console.log(movieInfo)
           setLikes(movieInfo.likes)
           setDislikes(movieInfo.dislikes)
       })

    }, [])
  

    const handleLikeClick=(evt)=>{
        fetch('http://localhost:4000/movies', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                movie_id: movieId,
                likes: 1
            })
        })
        .then(res=>res.json())
        .then((movieUpdated)=>{
            console.log(movieUpdated)
            setLikes(movieUpdated.likes)
        })

    }

    const handleDislikeClick=(evt)=>{
        fetch('http://localhost:4000/movies/dislike', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                movie_id: movieId,
                dislikes:1
            })
        })
        .then(res=>res.json())
        .then((movieUpdated)=>{
            console.log(movieUpdated)
            setLikes(movieUpdated.likes)
            setDislikes(movieUpdated.dislikes)
        })
    }

    return(
        <div className="like-dislike-container">
                
          <h1 className="dislike-title">{dislikes} </h1>
          <img className="thumbs-down" src={thumbdown} onClick={handleDislikeClick} alt="like button"/>
 
        
         <h1 className="like-title">{likes} </h1>
          <img className="thumbs-up" src={thumbsup} alt="like button" onClick={handleLikeClick}/>
     
        </div>
    )
}

export default LikeDislike