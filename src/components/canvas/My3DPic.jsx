import React from 'react';
import img from '../../assets/my-pi.jpg';

const My3DPic = () => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[4/5] mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={img}
        alt="About me"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default My3DPic;
