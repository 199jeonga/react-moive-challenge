const size = {
  mobile: "500px",
  tablet: "900px",
  laptop: "1100px",
};

export const theme = {
  color_navy: "#2C2E43",
  color_yellow: "#FFD523",
  color_dark: "#222831",
  color_gray: "#B2B1B9",
  color_white: "#eee",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width:${size.mobile}) and (max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  boxShadow: "0px 5px 10px 0 rgba(0, 0, 0, .2)",
  center: "margin-left: 50%;  transform: translateX(-50%);",
  box: "box-shadow:0px 5px 10px 0 rgba(0, 0, 0, .2); border-radius:10px;",
  event:
    "transform: scale(1.1); transition: all 300ms ease; outline: 4px solid #FFD523;",
};

export const mixins = {};
