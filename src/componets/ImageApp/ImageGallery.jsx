import React from 'react'
import "./Image.css"


const ImageGallery = ({data}) => {
  return (
    <>
    <h1 className='text-center mb-1 p-0'>Your Photos</h1>
     <div className='row'>
        {data.map((image)=>
        <div className='col-md-3 p-2 pt-5 justify-content-center d-flex imagedata ' key={image.id}>
            <img  src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
            height="250" width="280"  alt={image.title} download />
         </div>
    )}
    </div>

    </>
  
  )
}

export default ImageGallery
