import React, { useEffect, useState } from "react";
import "./NotFound.css";
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
  const [bigImageSrc, setBigImageSrc] = useState(
    "https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/astronaut.png"
  );

  const handleSmallImageClick = (src) => {
    setBigImageSrc(src);
  };

  return (
    <>
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
            src="https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/astronaut.png"
            style={{ maxWidth: "50%", animationDelay: "300ms" }}
            alt="Astronaut"
            onClick={() =>
              handleSmallImageClick(
                "https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/astronaut.png"
              )
            }
          />
          <img
            className="small_image"
            src="https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/cute-ghost.png"
            style={{ maxWidth: "80%", animationDelay: "300ms" }}
            alt="Cute Ghost"
            onClick={() =>
              handleSmallImageClick(
                "https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/cute-ghost.png"
              )
            }
          />
          <img
            className="small_image"
            src="https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/female.png"
            style={{ maxWidth: "50%", animationDelay: "300ms" }}
            alt="Female"
            onClick={() =>
              handleSmallImageClick(
                "https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/female.png"
              )
            }
          />
          <img
            className="small_image"
            src="https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/sad-boy.png"
            style={{ maxWidth: "70%", animationDelay: "300ms" }}
            alt="Sad Boy"
            onClick={() =>
              handleSmallImageClick(
                "https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/sad-boy.png"
              )
            }
          />
          <img
            className="small_image"
            src="https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/Searcher.png"
            style={{ maxWidth: "80%", animationDelay: "300ms" }}
            alt="Searcher"
            onClick={() =>
              handleSmallImageClick(
                "https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/Searcher.png"
              )
            }
          />
          {/* <img
            className="small_image"
            src="https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/cherry.png"
            style={{ maxWidth: "60%", animationDelay: "300ms" }}
            alt="Cherry"
            onClick={() =>
              handleSmallImageClick(
                "https://mjavadh.github.io/4X4-Collection/Fantasy/Black%20Box/assets/cherry.png"
              )
            }
          /> */}
        </div>
      </main>
    </>
  );
}
