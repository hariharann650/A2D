import React from "react";
import "./userreview.css";
import s1 from "../assets/ss/1.jpg";
import s2 from "../assets/ss/2.jpg";
import s3 from "../assets/ss/3.jpg";
import s4 from "../assets/ss/4.jpg";
import s5 from "../assets/ss/5.jpg";
import s6 from "../assets/ss/6.jpg";
import s8 from "../assets/ss/8.jpg";
import s9 from "../assets/ss/9.jpg";
import s10 from "../assets/ss/10.jpg";
import s11 from "../assets/ss/11.jpg";



const images = [s1, s2, s3, s4, s5, s6, s8, s9, s10, s11];

const UserReview = () => {
  return (
    <>
      <h1 className="usertitle autoshowing">User's Review</h1>
      <p className="usersub">Happy customers share their experiences💖</p>
      <div className="marquee-container autoshowing">
        <div className="build-container">
         {images.map((src, index) => (
          <div key={index} className="build-particular">
          <img className="build-img" src={src} alt={`User Review ${index + 1}`} />
            </div>
          ))}
    {images.map((src, index) => (
          <div key={index + images.length} className="build-particular">      
            <img className="build-img" src={src} alt={`User Review Duplicate ${index + 1}`} />
        </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserReview;




// import React from "react";
// import "./userreview.css";
// import s1 from "../assets/ss/1.jpg";
// import s2 from "../assets/ss/2.jpg";
// import s3 from "../assets/ss/3.jpg";
// import s4 from "../assets/ss/4.jpg";
// import s5 from "../assets/ss/5.jpg";
// import s6 from "../assets/ss/6.jpg";
// import s7 from "../assets/ss/7.jpg";
// import s8 from "../assets/ss/8.jpg";
// import s9 from "../assets/ss/9.jpg";
// import s10 from "../assets/ss/10.jpg";
// import s11 from "../assets/ss/11.jpg";

// const UserReview = () => {
//   return (
//     <>
//       <h1 className="usertitle">User Review</h1>
//       <div className="build-container">
//         <div className="build-particular"><img className="build-img" src={s1} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s2} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s3} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s4} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s5} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s6} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s8} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s9} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s10} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s11} alt="" /></div>

//         <div className="build-particular"><img className="build-img" src={s1} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s2} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s3} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s4} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s5} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s6} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s8} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s9} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s10} alt="" /></div>
//         <div className="build-particular"><img className="build-img" src={s11} alt="" /></div>
//       </div>
//     </>
//   );
// };

// export default UserReview;

