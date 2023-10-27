import "../src/Styles/main.css";
import NavBar from "./Components/NavBar";
import WhatWeDo from "./Components/WhatWeDo";
import CaseStudies from "./Components/CaseStudies";
import TrustedBrands from "./Components/TrustedBrands";

export function App() {
  return (
    <div className="App">
      <NavBar />
      <WhatWeDo />
      <CaseStudies />
      <TrustedBrands />
    </div>
  );
}

export default App;
