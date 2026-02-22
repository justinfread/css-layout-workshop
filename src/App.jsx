import FlexBasics from "./components/flex/FlexBasics";
//import FlexWrap from "./components/flex/FlexWrapDemo";
//import GridBasic from "./components/grid/GridBasic";
//import GridAreas from "./components/grid/GridAreas";

export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>CSS Layout Workshop</h1>

      <section>
        <h2>Flexbox Basics</h2>
        <FlexBasics />
        {/* <FlexWrap /> */}
      </section>

      {/*<section>
        <h2>Grid Basics</h2>
        <GridBasic />
        <GridAreas />
      </section> */}
    </main>
  );
}
