import FlexBasics from "./components/flex/FlexBasics";
import FlexSizing from "./components/flex/FlexSizing";
//import GridBasic from "./components/grid/GridBasic";
//import GridAreas from "./components/grid/GridAreas";

export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>CSS Layout Workshop</h1>

      <section>
        <h2 style={{ margin: "100px", borderTop: "3px dashed #000", padding: "20px" }}>Flexbox Basics</h2>
        <FlexBasics />
        <h2 style={{ margin: "100px", borderTop: "3px dashed #000", padding: "20px" }}>Flexbox Shrink, Grow, and Wrap</h2>
        <FlexSizing /> 
      </section>

      {/*<section>
        <h2>Grid Basics</h2>
        <GridBasic />
        <GridAreas />
      </section> */}
    </main>
  );
}
