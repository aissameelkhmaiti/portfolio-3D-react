import React from 'react';
import img from '../../assets/my-pi.jpg'
console.log(img)

const My3DPic = () => {
  return (
    <div className="w-96  h-100 overflow-hidden rounded-lg shadow-lg">
      <img
        src={img}   // <-- replace with your actual image path or URL
        alt="About me"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default My3DPic;
