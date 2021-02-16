import React from "react";
import { Photo, View } from "./style";

import Image from "../../../Image";

const FeedPhotosItem = ({ id, setId, src, title, acessos }) => {
  return (
    <Photo id={id} onClick={() => setId(id)}>
      <Image src={src} alt={title} />
      <View views={acessos} />
    </Photo>
  );
};

export default FeedPhotosItem;
