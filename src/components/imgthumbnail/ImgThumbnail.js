import React from 'react'
import "../imgthumbnail/imgthumbnail.css"

const ImgThumbnail = ({ first_name, last_name, src, style, className }) => {

    const getInitials = () => {
        if (first_name && last_name){
            return `${first_name[0]}${last_name[0]}`;
        }
        else{
            return " ";
        }
    };

  return (
    <div>
        {src && <img  width={45} 
        height={45}  
        src = {src}  
        style={style}
        className ={className} />}
        
        {!src && (
            <div style={style} className={`thumbnail ${className}`}>
                <span>{getInitials()}</span>
            </div>
        )}
    </div>
  )
}

export default ImgThumbnail