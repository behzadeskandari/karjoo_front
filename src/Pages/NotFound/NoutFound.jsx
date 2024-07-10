import React, { Suspense, lazy, useEffect, useState } from "react";
import "./NotFound.css";
import Loader from "../../components/Loader/Loader";

import astornat from "../../assets/images/404/astronaut.png";
import ghost from "../../assets/images/404/cute-ghost.png";
import female from "../../assets/images/404/female.png";
import boy from "../../assets/images/404/sad-boy.png";
import Searcher from "../../assets/images/404/Searcher.png";

export default function NoutFound() {
  const [menuActive, setMenuActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    // const handleLinkClick = (e) => {
    //   setSelectedLink(e.target);
    // };
    // const menuLinks = document.querySelectorAll(".menu-page a");
    // menuLinks.forEach((link) => {
    //   link.addEventListener("click", handleLinkClick);
    // });
    // return () => {
    //   menuLinks.forEach((link) => {
    //     link.removeEventListener("click", handleLinkClick);
    //   });
    // };
  }, []);

  // const toggleMenu = () => {
  //   setMenuActive((prev) => !prev);
  // };
  const [bigImageSrc, setBigImageSrc] = useState(astornat);

  const handleSmallImageClick = (src) => {
    setBigImageSrc(src);
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <main className="main">
          <div className="text-404 text-center">
            <h1>4 X 4</h1>
            <p>صفحه مورد نظر پیدا نشد</p>
          </div>
          <div className="image">
            <img id="big_image" src={bigImageSrc} alt="#" />
          </div>
          <div class="image-box">
            <img
              className="small_image active"
              src={astornat}
              style={{ maxWidth: "50%", animationDelay: "300ms" }}
              alt="Astronaut"
              onClick={() => handleSmallImageClick(astornat)}
            />
            <img
              className="small_image"
              src={ghost}
              style={{ maxWidth: "80%", animationDelay: "300ms" }}
              alt="Cute Ghost"
              onClick={() => handleSmallImageClick(ghost)}
            />
            <img
              className="small_image"
              src={female}
              style={{ maxWidth: "50%", animationDelay: "300ms" }}
              alt="Female"
              onClick={() => handleSmallImageClick(female)}
            />
            <img
              className="small_image"
              src={boy}
              style={{ maxWidth: "70%", animationDelay: "300ms" }}
              alt="Sad Boy"
              onClick={() => handleSmallImageClick(boy)}
            />
            <img
              className="small_image"
              src={Searcher}
              style={{ maxWidth: "80%", animationDelay: "300ms" }}
              alt="Searcher"
              onClick={() => handleSmallImageClick(Searcher)}
            />
          </div>
        </main>
      </Suspense>
    </>
  );
}
