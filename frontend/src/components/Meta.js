import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset="utf-8" />
        <title>{props.title}</title>
        {/* SEO 태그 */}
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={props.url} />
        <script
          src="https://kit.fontawesome.com/1818959bdb.js"
          crossorigin="anonymous"
        ></script>
        <script src="node_modules/@glidejs/glide/dist/glide.min.js"></script>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        ></link>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "Campen",
  description: "React.js로 구현한 covid19 OpenAPI 연동",
  keywords: "React, Kakao, OpenAPI",
  author: "문태호, 양소현",
  image:
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port +
    "/logo512.png",

  url: window.location.href,
};

export default Meta;