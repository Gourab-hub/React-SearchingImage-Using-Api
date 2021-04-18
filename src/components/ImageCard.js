import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    
<div className="css">


    <div className=" card card_image " >
      <img className="card-img-top pb-sm-2 card_image1"  src={image.webformatURL} alt="Card image cap"/>
      <div className="card-body pb-sm-2">
        <h5 className="card-title bluecolor">{image.user}</h5>
        <ul className="ul">
           <li className="like">
             <strong className="likes">Views : </strong>
             {image.views}
           </li>
           <li className="like">
             <strong className="likes">Downloads : </strong>
             {image.downloads}
           </li>
           <li className="like">
             <strong className="likes">Likes : </strong>
             {image.likes}
           </li>
         </ul>
        
        

         <div className="bluecolor">
        {tags.map((tag, index) => (
          <span key={index} className="bluecolor">
          #{tag}
        </span>
        ))}
      </div>

      </div>
      
    </div>
</div>
    
 
  )
}

export default ImageCard;
