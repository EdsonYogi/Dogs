import React from "react";
import { Photo, View } from "./style";

import Image from "../../../Image";

const FeedPhotosItem = ({ id, src, title, acessos, setModal }) => {
  return (
    <Photo id={id} onClick={() => setModal(id)}>
      <Image src={src} alt={title} />
      <View views={acessos} />
    </Photo>
  );
};

export default FeedPhotosItem;
