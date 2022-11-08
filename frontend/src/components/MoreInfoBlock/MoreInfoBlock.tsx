// global
import React from 'react'
import {Link} from "react-router-dom";
// styles and icons
import './MoreInfoBlock.scss';
// components
import HorizontalSlider from "../../components/HorizontalSlider/HorizontalSlider";
import BlockHeading from "../BlockHeading/BlockHeading";

interface MoreInfoBlockProps {
  className?: string
}

function MoreInfoBlock({className}: MoreInfoBlockProps) {
  return (
    <div className={`more-info-block ${className}`}>
      <BlockHeading>Больше Информации</BlockHeading>
      <HorizontalSlider>
        <Link className="more-info-block__slide" to="/" style={{"--index":  0} as React.CSSProperties}>
          <img src="/assets/s2.jpg" alt=""/>
        </Link>
        <Link className="more-info-block__slide" to="/" style={{"--index":  1} as React.CSSProperties}>
          <img src="/assets/s1.jpg" alt=""/>
        </Link>
        <Link className="more-info-block__slide" to="/" style={{"--index":  2} as React.CSSProperties}>
          <img src="/assets/s3.jpg" alt=""/>
        </Link>
      </HorizontalSlider>
    </div>
  )
}

export default MoreInfoBlock
