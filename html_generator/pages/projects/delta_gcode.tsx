import React from "react";
import { Tex } from "react-tex";

import { AndyCodeBlock } from "../../include_code.js";
import Wrapper from "../../wrapper.js";

function DeltaGcode(props) {
  let new_heads = (
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
    />
  );

  return (
    <Wrapper head={new_heads} {...props}>
      <div className="imageContainer floatLeft">
        <img src="Delta-X.jpg" width="487" height="479" />
        <div className="imageCaption" style={{ width: "487px" }}>
          Delta-X Robot
        </div>
      </div>

      <p>
        <a href="https://en.wikipedia.org/wiki/Delta_robot">Delta robots</a> are
        often used for factory "pick and place" operations.
      </p>
      <p>
        Delta robot arms are not as precise as some other robot arm geometries,
        but they can move fast and are easy to program. The millimeter-level
        accuracy is good enough for my project to move an end effector over
        weeds or crop plants.
      </p>

      <p>
        I bought the delta robot arm from{" "}
        <a href="https://deltaxrobot.com">Delta-X</a>, a Vietnamese company.
        They shipped the robot from Da Nang, Vietnam to Hawaii. When it arrived,
        I connect it to the bottom of the robot frame.
      </p>

      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <img src="DeltaAnimation.gif" width="437" height="367" />
        <div className="imageCaption" style={{ width: "437 px" }}>
          Delta robot kinematics, © Wikimedia
        </div>
      </div>
      <p>
        Delta robot kinematics (green arms are fixed length, at 90° to the blue
        axis that they rotate about)
      </p>
      <hr className="clearLeft" />
      <div className="imageContainer floatLeft">
        <video className="floatLeft" width="640" controls>
          <source src="Delta-G-Code-720.mp4" type="video/mp4" />
          Your browser does not support the video tab.
        </video>
        <div className="imageCaption" style={{ width: "640px" }}>
          Testing the delta robot arm with G-code
        </div>
      </div>
      <p>
        The delta robot arm is programmed with{" "}
        <a href="https://en.wikipedia.org/wiki/G-code">G-code</a>, a simple
        language used for the control of many machine tools.
      </p>
      <hr className="clearLeft" />
      <p>
        I wrote a program to run on the Raspberry Pi computer and communicate
        with the delta robot arm by sending G-Code commands over a serial port.
        The program is listed below.
      </p>
      <hr className="clearLeft" />

      <AndyCodeBlock
        source_path="static/projects/delta_gcode/delta.cpp"
        language="cpp"
      />
      <hr className="clearLeft" />
      <AndyCodeBlock
        source_path="static/projects/delta_gcode/serial.cpp"
        language="cpp"
      />
      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default DeltaGcode;
