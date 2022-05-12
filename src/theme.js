const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
};

const theme = {
  color_navy: "#2C2E43",
  color_yellow: "#FFD523",
  color_dark: "#595260",
  color_gray: "#B2B1B9",
  color_white: "#eee",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  boxShadow: "0px 5px 10px 0 rgba(0, 0, 0, .2)",
};

export default theme;
