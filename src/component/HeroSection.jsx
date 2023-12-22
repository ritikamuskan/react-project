import React from "react";

const HeroSection = () => {
  return (
    <>
      <div>
        <section className="container">
          <div className="hero-section">
            <h1>YOUR HOME DESERVE THE BEST</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              saepe minima, iure minus suscipit, doloribus molestias earum ipsam
              deserunt libero, autem voluptates at nobis quas voluptatibus
              possimus accusamus aspernatur expedita?
            </p>
            <div className="btn-section">
              <button>Explore</button>
              <button>shop Now</button>
            </div>
          </div>

          <div className="img-section">
            <img src="/luxury-home-decor.jpg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
