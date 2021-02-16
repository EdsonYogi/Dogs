import React, { useState } from "react";
import { Content, Img, SkeletonImg } from "./style";

const Image = ({ alt, ...props }) => {
  const [imgLoad, setImgLoad] = useState(false);

  const onLoadImg = ({ target }) => {
    target.style.opacity = 1;
    setImgLoad(true);
  };

  return (
    <Content>
      {imgLoad && <SkeletonImg />}
      <Img alt={alt} {...props} onLoad={onLoadImg} />
    </Content>
  );
};

export default Image;
