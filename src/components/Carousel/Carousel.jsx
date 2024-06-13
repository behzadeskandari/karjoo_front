import React from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // large desktops
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // tablets and small desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // small mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Box sx={{ position: "relative", width: "90%", margin: "auto" }}>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: 1,
                textAlign: "center",
                padding: 2,
              }}
            >
              <div style={{ display: "flex", justifyContent: "right" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <h6 className="mt-4 mb-2">{item.title}</h6>
              <p>{item.description}</p>
              {item.clickEvent && (
                <button onClick={item.clickEvent}>توضیحات بیشتر</button>
              )}
            </Box>
          </Box>
        ))}
      </Slider>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
        }}
        onClick={handlePrev}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
        }}
        onClick={handleNext}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;

// export default function Carousel() {
//   const clickEvent = () => {
//     console.log("clickd slider");
//   };
//   const slides = [
//     {
//       image: logo,
//       title: "This is a title",
//       description: "This is a description",
//       clickEvent: clickEvent,
//     },
//     {
//       image: logo,
//       title: "This is a second title",
//       description: "This is a second description",
//       clickEvent: clickEvent,
//     },
//     {
//       image: logo,
//       title: "This is a third title",
//       description: (
//         <span>
//           {" "}
//           <button>button</button>This is a third description
//         </span>
//       ),
//       clickEvent: clickEvent,
//     },
//     {
//       image: logo,
//       title: "This is a fourth title",
//       description: "This is a fourth description",
//       clickEvent: clickEvent,
//     },
//     {
//       image: logo,
//       title: "This is a fifth title",
//       description: "This is a fifth description",
//       clickEvent: clickEvent,
//     },
//     {
//       image: logo,
//       title: "This is a sixth title",
//       description: "This is a sixth description",
//       clickEvent: clickEvent,
//     },
//     {
//       image: logo,
//       title: "This is a seventh title",
//       description: "This is a seventh description",
//       clickEvent: clickEvent,
//     },
//   ];

//   return (
//     //
//     <div className="row">
//       <div className="d-flex justify-content-center py-5">
//         <ReactCardSlider slides={slides} />
//       </div>
//     </div>
//   );
// }
