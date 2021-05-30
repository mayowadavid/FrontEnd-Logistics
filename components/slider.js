import Slider from "react-slick";
import {RequestContext} from './context/RequestContext';
import { useContext } from "react";
import { v4 as uuidv4} from 'uuid';

export default function SimpleSlider() {
  const settings = {
    className: "center",
    infinite: true,
    useCSS: true,
    slidesToShow: 3,
    draggable: true,
    speed: 500
  };
  const {input} = useContext(RequestContext);
  const {requestImages} = input;
  return (
    <Slider {...settings}>
      {requestImages.length > 0 && requestImages.map(({cloudUrl}) => 
                    <img src={cloudUrl} key={uuidv4()}/>
                )}
    </Slider>
  );
}