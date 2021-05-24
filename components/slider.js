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
  const {permanentImages} = useContext(RequestContext);
  return (
    <Slider {...settings}>
      {permanentImages.length > 0 && permanentImages.map(({img}) => 
                    <img src={img} key={uuidv4()}/>
                )}
    </Slider>
  );
}