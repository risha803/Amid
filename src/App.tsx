import { Header } from "./components/layout/Header";
import { Companies } from "./components/sections/Companies/Companies";
import { Hero } from "./components/sections/Hero/Hero";
import { Services } from "./components/sections/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Services />
    </>
  );
}

export default App;