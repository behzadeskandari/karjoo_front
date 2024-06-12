import React from "react";
import ReactCardSlider from "react-card-slider-component";

export default function Carousel() {
  const sliderClick = (e) => {
    console.log(e, "clickd slider");
  };
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: (
        <span>
          {" "}
          <button>button</button>This is a third description
        </span>
      ),
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: (e) => sliderClick(e),
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: (e) => sliderClick(e),
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: (e) => sliderClick(e),
    },
  ];

  return (
    // style={{ marginTop: "9em" }}
    <div className="row">
      <div className="d-flex justify-content-center ">
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
}
