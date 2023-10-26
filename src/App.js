import "../src/Styles/main.css";
import NavBar from "./Components/NavBar";
import WhatWeDo from "./Components/WhatWeDo";
import CaseStudies from "./Components/CaseStudies";

export function App() {
  return (
    <div className="App">
      <NavBar />
      <WhatWeDo />
      <CaseStudies />
    </div>
  );
}

export default App;
