import React from "react";
import Wrapper from "../../wrapper.js";

function MotorPWM({title}: {title: string}) {
  let new_heads = (
    <link
      rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
    />
  );

  return (
    <Wrapper head={new_heads} title={title}>
      <hr className="clearLeft" />
      <div className="imageContainer floatLeft">
        <img src="L298-H-Bridge.jpg" width="353" height="393" alt="L298 H-Bridge"/>
        <div className="imageCaption">
	  <p>L298 H-Bridge</p>
        </div>
      </div>
      <p>
        To control the motors, I used the same PWM circuit described on{" "}
        <a href="p02_PWM.html">this webpage</a>, but the outputs are connected
        to an <a href="https://en.wikipedia.org/wiki/H-bridge">H-Bridge</a> to
        control a stronger current. Motors need much more power than LEDs.
      </p>
      <p>
        For the H-Bridge, I used an L298 Dual H-Bridge. I bought <a href="https://www.amazon.com/gp/product/B07WS89781/">a pack of four on Amazon</a> for $11.
      </p>
      <div className="imageContainer floatLeft">
        <img src="L298-Labels.jpg" width="500" height="333" alt="L298 with I/O Labels"/>
        <div className="imageCaption">
	  <p>L298 with I/O Labels</p>
        </div>
      </div>

      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <img src="L298-Schematic.png" width="437" height="433" alt="L298 to RPi interface"/>
        <div className="imageCaption">
	  <p>L298 to RPi interface</p>
        </div>
      </div>
      <p>
        This is the wiring diagram for connecting the Raspberry Pi header to the
        H-Bridge. I made the connections with{" "}
        <a href="https://en.wikipedia.org/wiki/Wire_wrap">wire wrap</a>.
      </p>

      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <img src="Buck-Converter.jpg" width="210" height="223" alt="12v to 5v Buck Converter" />
        <div className="imageCaption">
	  <p>12v to 5v Buck Converter</p>
        </div>
      </div>

      <p>
        To convert the 12 volt power from the battery to the 5 volts needed by
        the Raspberry Pi and the encoder logic circuit, I used a 12v-to-5v{" "}
        <a href="https://en.wikipedia.org/wiki/Buck_converter">
          buck converter
        </a>
        . I bought a four pack of these buck converters{" "}
        <a href="https://www.amazon.com/gp/product/B087RHWTJW/">
          on Amazon for $12
        </a>
        . The 5 volt output is emitted on a USB port, which is very convenient
        for attaching to the Raspberry Pi. All I needed was a USB-A to USB-C
        cable.
      </p>

      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <video className="floatLeft" width="640" controls>
          <source src="wiringControlBoard-720.mp4" type="video/mp4" />
          Your browser does not support the video tab.
        </video>
        <div className="imageCaption">
          Wiring the control board. My arms were sunburned when I made this
          video.
        </div>
      </div>
      <p>
        This is a video of the assembly and wiring of the robot control board.
        The Raspberry Pi is the green board in the lower right. The L298
        H-Bridges are at the top of the board. The metal angle holds a small USB
        fan used to keep the Raspberry Pi cool during intensive computer vision
        processing.
      </p>

      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <video className="floatLeft" width="640" controls>
          <source src="motorPwm-480.mp4" type="video/mp4" />
          Your browser does not support the video tab.
        </video>
        <div className="imageCaption">
          640
        </div>
      </div>

      <p>
        This video shows testing of the motors using Wifi between the Raspberry
        Pi and a cell phone. The and speed and direction of the motors can be
        independently controlled. The next step is to mount the motors on the
        robot to drive the wheels. The independent control allows differential
        steering.
      </p>
      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <img src="burnt-wires.jpg" width="564" height="772" alt="Burnt wires from an accidental short."/>
        <div className="imageCaption">
	  <p>Burnt wires from an accidental short.</p>
        </div>
      </div>
      <p>
        Just to show that it isn't all just fun and games, here are some burnt
        alligator clips. I accidently caused a short sending the full current of
        the 12 volt battery through the wires, causing a loud pop and plenty of
        smoke.
      </p>

      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default MotorPWM;
