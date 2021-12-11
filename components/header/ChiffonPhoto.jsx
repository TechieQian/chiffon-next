import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ChiffonPhoto(props) {
  const { idx, ...rest } = props;
  const [pic, setPic] = useState("");
  useEffect(() => {
    import(`../../assets/photos/chiffon${idx}.jpg`).then((module) => {
      setPic(module.default);
    });
  }, [idx]);
  return <img {...rest} src={pic} alt="pic"></img>;
}

export default ChiffonPhoto;
