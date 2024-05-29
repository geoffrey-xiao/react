import * as htmlToImage from "html-to-image";
import React, { useRef, useState } from "react";
// import backendHtml from "/email.html";
import backendHtml from "/email.html?url&raw";
const Preview = () => {
  // const backendHtml = require("/public/example.html");
  const ref = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  const convertToImage = () => {
    htmlToImage
      .toPng(ref.current)
      .then(function (dataUrl) {
        setImageUrl(dataUrl);
      })
      .catch(function (error) {
        console.error("转换出错", error);
      });
  };

  return (
    <>
      <button onClick={convertToImage}>转换HTML为图片</button>

      <div ref={ref} dangerouslySetInnerHTML={{ __html: backendHtml }}></div>
      {imageUrl && <img src={imageUrl} alt="Converted HTML" width={600} />}
    </>
  );
};

export default Preview;
