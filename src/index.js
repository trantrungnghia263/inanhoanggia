import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

//css
import "./index.css";
import "./styles/base.scss";
import "./styles/grid.scss";
import "./styles/button.scss";
import "./styles/share.scss";
import "./styles/banner-slide.scss";
import "./styles/categories-page.scss";
import "./styles/blog-page.scss";
import "./styles/introduction-page.scss";
import "./styles/policy-page.scss";
import "./styles/quotation-page.scss";

//AOS ANIMATION
import "aos/dist/aos.css";

// WOW ANIMATION
import "wowjs/css/libs/animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
