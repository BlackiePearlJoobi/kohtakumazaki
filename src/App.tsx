import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Line from "./components/Line";
import Projects from "./components/Projects";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="w-full h-full bg-[var(--black)] flex flex-col gap-[60px]">
      <Hero></Hero>
      <Line></Line>
      <Stack></Stack>
      <Line></Line>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
