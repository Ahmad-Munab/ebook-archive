import React from "react";
import { About, Features, Hero } from "./_sections";

export default function Home() {
  return (
    <div>
      <div className="relative z-0 bg-primary">
        <Hero />

        <About />
        <Features />
      </div>
    </div>
  );
}
