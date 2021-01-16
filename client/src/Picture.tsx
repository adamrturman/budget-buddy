import * as React from "react";

export default function Picture() {
    const [pictureUrl, setPictureUrl] = React.useState('');
  
    const handleClick = (event: any) => {
      fetch("https://source.unsplash.com/random")
      //  the response object has a url property that references the random picture
      //  we can set this to the state of the pictureUrl
      //  In the return, we can reference this url as the src of an image element
        .then((response) => setPictureUrl(response.url))
    };

  
    return (
        <div>
          <button onClick={handleClick}>Click</button>
          <img src={pictureUrl}></img>
        </div>
      );
  }

//  Version with useEffect and no button
// import React, {useState, useEffect} from 'react'


// function UnsplashAPI() {
//     const [photoUrl, setPhotoUrl] = useState('');

//     const loadData = () => {
//         fetch("https://source.unsplash.com/random")
//         .then((response) => setPhotoUrl(response.url)) 
//     }

//     useEffect(() => {
//         loadData()
//     });

//     return(
//         <div className="unplash-image">
//             <img  src={photoUrl} alt="" /> 
//         </div>
//     )
// }

// export default UnsplashAPI 