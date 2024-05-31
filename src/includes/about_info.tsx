import React from "react";

function AboutInfo() {
  return (
    <>
      <img className="portrait" src="/imgs/Andy-HPA.jpg" />
      <p>
        Welcome to my website. I am a senior majoring in computer science at{" "}
        <a href="https://ucsc.edu">UCSC</a> in Santa Cruz, California.
      </p>
      <p>
        This website has many projects that I have worked on in the past few
        years, including my senior capstone project, an agricultural robot.
      </p>
      <p>
        My interests include programming, electronics, robotics, artificial
        intelligence, embedded systems, 3D-graphics, physical simulations, and
        sustainable agriculture.
      </p>
      <p>
        I will graduate with a BS in computer science in June 2024. I will start
        an MS in computer science in the fall of 2024 through UCSC's Contiguous
        Pathways master's degree program.
      </p>
      <p>
        I am seeking an internship for the summer of 2024 when I will have
        completed my BS and be enrolled as a master's degree student.
      </p>
      <p>
        If you want to hire me as an intern in machine learning, software
        engineering, or embedded programming, please look at{" "}
        <a href="/Andy-Bruce-Resume.pdf">my resume</a>.
      </p>
    </>
  );
}

export default AboutInfo;
