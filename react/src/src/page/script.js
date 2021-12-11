// import React, { useState, useEffect } from "react";

// document.addEventListener("DOMContentLoaded", function(event) { 
// // $(document).ready(function () {
//   $("#autoWidth").lightSlider({
//     adaptiveHeight: true,
//     auto: true,
//     item: 1,
//     slideMargin: 0,
//     loop: true,
//   });
// });

// const ScrollingElement = () => {
//   const navbarHome = document.querySelector(".navbarHome");

//   UseEffect(() => {
//     window.addEventListener("scroll", () => {
//       const post = window.scrollY > 100;
    
//       navbarHome.classList.toggle("scroll", post);
//     });

// });



// import React, { useState, useEffect } from "react";

// const ScrollingElement = () => {
//   const navbarHome = document.querySelector(".navbarHome");

//   function logit() {
//     setScrollY(window.pageYOffset);
//   }

//   useEffect(() => {
//     function watchScroll() {
//       window.addEventListener("scroll", () => {
//         const post = window.scrollY > 100;
      
//         navbarHome.classList.toggle("scroll", post);
//       });
//     watchScroll();
//   };
//   return (
//     <div className="App">
//       <div className="fixed-center">Scroll position: {scrollY}px</div>
//     </div>
//   );
// };