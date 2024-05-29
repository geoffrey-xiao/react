import React, { useState, useEffect } from "react";
import { toPng } from "html-to-image";

function HtmlPreviewList() {
  const [htmlFiles, setHtmlFiles] = useState([]); // 存储从后端获取的HTML文件数组
  const [images, setImages] = useState([]); // 存储转换后的图片base64字符串数组

  useEffect(() => {
    // 假设您有一个API端点可以返回HTML文件数组
    fetch("/api/get-html-files")
      .then((res) => res.json())
      .then((data) => setHtmlFiles(data));
  }, []);

  useEffect(() => {
    if (htmlFiles.length > 0) {
      Promise.all(
        htmlFiles.map((html) => {
          const element = document.createElement("div");
          element.innerHTML = html;
          document.body.appendChild(element);

          return toPng(element).then((dataUrl) => {
            document.body.removeChild(element);
            return dataUrl;
          });
        })
      ).then((imagesDataUrls) => {
        setImages(imagesDataUrls);
      });
    }
  }, [htmlFiles]);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`HTML Preview ${index}`} />
      ))}
    </div>
  );
}
