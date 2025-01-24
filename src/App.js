// import { createElement } from "react";

// function App() {
//   const h1 = createElement("h1", null, "Hello");
//   const p = createElement("p", null, "Hello React.js");
//   const element = createElement("div", { className: "App" }, h1, p);

//   return element;
// }

// export default App;

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Fragment } from "react";
import HomePage from "./pages/HomePage";
import Header1 from "./components/header/Header1";

function App() {
  return (
    <Fragment>
      <Header />
      <Header1 />
      <HomePage />

      <p>Hello React.js</p>
      <Footer />
    </Fragment>
  );
}

export default App;
