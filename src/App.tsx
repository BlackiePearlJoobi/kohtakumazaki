import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LightMode from "./components/LightMode";
import Line from "./components/Line";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import { useDarkMode } from "./context/useDarkMode";

function App() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`w-full h-full ${darkMode ? "bg-[var(--black)]" : "bg-[var(--light)]"}`}
    >
      <header className="sticky z-50 top-0 w-full flex justify-end">
        <LightMode></LightMode>
      </header>
      <main className="flex flex-col gap-[60px]">
        <Hero></Hero>
        <Line></Line>
        <Stack></Stack>
        <Line></Line>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
