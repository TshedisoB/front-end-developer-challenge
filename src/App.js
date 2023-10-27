import "../src/styles/main.css";
import NavBar from "./Components/NavBar";
import WhatWeDo from "./Components/WhatWeDo";
import CaseStudies from "./Components/CaseStudies";
import TrustedBrands from "./Components/TrustedBrands";
import FooterInfo from "./Components/FooterInfo";

export function App() {
  return (
    <div className="App">
      <NavBar />
      <WhatWeDo />
      <CaseStudies />
      <TrustedBrands />
      <FooterInfo />
    </div>
  );
}

export default App;
