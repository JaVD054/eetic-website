// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// render(<ControlledCarousel />);

import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./css/carousel.css";
import { Image } from "react-bootstrap";

function ImgReel() {
  return (
    <>
      {/* <div className="arc"></div>
      <div className="dashes"></div> */}

      <Carousel>
        <Carousel.Item interval={2000} className="">
          <Image
            className="rounded-circle carousel-img"
            // width={800}
            // height={800}
            src={require("../images/1.png")}
            fluid
            roundedCircle
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item interval={2000} className="">
          <Image
            className="rounded-circle carousel-img"
            // width={800}
            // height={800}

            src={require("../images/3.png")}
            fluid
            roundedCircle
          />

          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item interval={2000} className="">
          <Image
            className="rounded-circle carousel-img"
            // width={800}
            // height={800}

            src={require("../images/5.png")}
            fluid
            roundedCircle
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ImgReel;
