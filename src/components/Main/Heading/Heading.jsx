import React from "react";

const Heading = () => {
  return <>

    <section className="heading" id="section-heading">
      <article>
        <h1>Hi there, Im Alvaro Cuallado</h1>
        <h2>Full Stack developer</h2>

        {/* iconos de tecnologias conocidas */}
        <div className="icons-box">
          <div className="icons-group-1">
            <img src="./5968242.png" alt="" />
            <img src="./1200px-Javascript-shield.svg.png" alt="" />
            <img src="./Angular_full_color_logo.svg.png" alt="" />
            <img src="./1280px-Sass_Logo_Color.svg.png" alt="" />
          </div>
          <div className="icons-group-2">
            <img src="./nodejs_original_wordmark_logo_icon_146412.png" alt="" />
            <img src="./MongoDB_Logo.svg.png" alt="" />
            <img src="./4299956.png" alt="" />
            <img src="./Git-Icon-1788C.png" alt="" />
          </div>
        </div>
      </article>
      {/* foto de careto si procede */}
      <img src="" alt="" />
    </section >
  </>;
};

export default Heading;
