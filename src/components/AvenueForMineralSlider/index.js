import React,{ useState, useEffect, useRef }  from "react";
import {SliderData} from "./avenueSliderData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "./../../assets/images/arrowL.png"
import RightArrow from "./../../assets/images/arrowR.png"

export const AvenueForMineralSlider = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
    const [slides, setSlides] = useState([
        'hide',
        'prev1',
        'prev',
        'act',
        'next',
        'new-next'
      ]);

    //   const nextSlide = () => {
    //     setCurrentSlideNumber((prevIndex) => (prevIndex + 1) % sliderData.length);
    //   };
    
    //   const prevSlide = () => {
    //     setCurrentSlideNumber((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
    //   };
    
      const getClassName = (index) => {
        const slideCount = SliderData.length;
        if (index === currentSlideNumber) return 'current';
        if (index === (currentSlideNumber - 1 + slideCount) % slideCount) return 'previous';
        if (index === (currentSlideNumber - 2 + slideCount) % slideCount) return 'previous1';
        if (index === (currentSlideNumber - 3 + slideCount) % slideCount) return 'previous2';
        return '';
      };
    


     var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
     };

     function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "flex", background: "#F4FBF7",top: "unset" }}
            onClick={onClick}
          > <img src={RightArrow} alt=""/> </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "flex", background: "#F4FBF7",top: "unset" }}
            onClick={onClick}
          ><img src={LeftArrow} alt=""/> </div>
        );
      }
    return(
        <div className="anevueslider_main">
            <div className="avenueslider_inner">
                <h2 className="text-center pages_heading_h2">
                 <span className="text-green">AVENUES</span> FOR MINERAL BASED INDUSTRIES
                </h2>
                <div className="avenueslider">
                <div className="avenueslider_left">

                <div className="avenue_image_slider">
                 {SliderData.map((data, index) => (
                      
                <div className={`avenue_image ${getClassName(index)}`}>
                <img src={data.img} alt={data.title}/>
                </div>
                ))}
                </div>
                </div>
                <div className="avenueslider_right">
                    <Slider {...settings} beforeChange={(currentSlide, nextSlide) => setCurrentSlideNumber(nextSlide)}>
                    {SliderData.map((data, index) => (
                        <>
                        <div key={index} className="slider_right_item">
                            <div className="slider_right_title">
                            {data.title}
                            </div>
                            <div className="slider_right_desc">
                            {data.description}
                            </div>
                        </div>
                     </>
                    ))}
                    </Slider> 
                    <div className="avenue_slider_pagination">
                        <span className="current_slider_number">{currentSlideNumber + 1}</span>/
                        {SliderData?.length} </div>
                </div>
                </div>
            </div>
        </div>
    )
}

