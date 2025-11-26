import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Location } from "./components/Location";
import { Reservations } from "./components/Reservations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Hero />
          <Menu />
          <About />
          <Gallery />
          <Location />
          <Reservations />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
