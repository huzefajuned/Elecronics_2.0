import React, { useState } from "react";
import "../Carousal/Carousal.css";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const dataSlider = [
    {
      title: "Latest Image",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/Aug-ART-22/GW/Event/Hero/NTA/Aug_ART_PC_LIVE_now_UNREC_FDFO0.5x._CB630844079_.jpg",
    },
    {
      title: "Offers images",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/CEPC/2022/AUgART/Headers/Electronics_1242x700_unrec_1.jpg",
    },
    {
      title: "diwali offers",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img2022/AugART/Vernac/UnRec/Headers/Main_event_header_PC.jpg",
    },
    {
      title: "Latest Image",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/Aug-ART-22/GW/Event/Hero/NTA/Aug_ART_PC_LIVE_now_UNREC_FDFO0.5x._CB630844079_.jpg",
    },
    {
      title: "Offers images",
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/CEPC/2022/AUgART/Headers/Electronics_1242x700_unrec_1.jpg",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.url} alt="imge_Url" />
            {/* <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} /> */}
          </div>
        );
      })}

      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      {/* <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
