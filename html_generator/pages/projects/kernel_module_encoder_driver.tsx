import React from "react";

import { AndyCodeBlock } from "../../include_code.js";
import Wrapper from "../../wrapper.js";
import { abort } from "process";

//<AndyCodeBlock source_path="static/projects/delta_gcode/delta.cpp" language="cpp" />

function KernelmoduleEncoderDriver({title}: {title: string}) {
  let new_heads = (
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
    />
  );

  return (
    <Wrapper head={new_heads} title={title}>
      <div className="imageContainer floatLeft">
        <img src="i05-Uxcell-Motor.jpg" width="465" height="349" />
        <div className="imageCaption" style={{ width: "465px" }}>
          Uxcell gear motor with encoder
        </div>
      </div>

      <p>
        A{" "}
        <a href="https://en.wikipedia.org/wiki/Rotary_encoder">
          rotary encoder
        </a>{" "}
        is an electro-mechanical device that senses rotation of a motor shaft
        and converts it into a digital signal that can be processed by a
        computer.
      </p>

      <div className="imageContainer">
        <img src="i05-Encoder-Wires.jpg" width="423" height="362" />
        <div className="imageCaption" style={{ width: "423px" }}>
          Encoder on the end of the motor shaft
        </div>
      </div>

      <p>
        For my robot project, I used two Uxcell gear motors with{" "}
        <a href="https://en.wikipedia.org/wiki/Hall_effect_sensor">
          Hall effect encoders
        </a>
        . I bought the{" "}
        <a href="https://www.amazon.com/gp/product/B0792RX5X1/">
          motors from Amazon
        </a>
        . The encoders have 16 magnets and two hall effect sensors. The magnets
        produce a rising and falling signal as they pass each sensor. So there
        are 64 encoder interrupts per revolution of the motor. The motors have a
        30:1 gear ratio, so there are 64*30 = 1920 pulses for each revolution of
        the gearbox shaft. That is plenty of resolution to navigate the robot.
      </p>

      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <img
          src="i05-Incremental_directional_encoder.gif"
          width="258"
          height="150"
        />
        <div className="imageCaption" style={{ width: "258px" }}>
          Incremental directional encoder
        </div>
      </div>

      <div className="imageContainer floatLeft">
        <img src="i05-EncoderSignals.png" width="300" height="249" />
        <div className="imageCaption" style={{ width: "300px" }}>
          Encoder signals
        </div>
      </div>

      <div className="imageContainer floatLeft">
        <img src="i05-EncoderFwdBwd.jpg" width="255" height="250" />
        <div className="imageCaption" style={{ width: "255 px" }}>
          Forward and backwards rotations
        </div>
      </div>

      <p>
        The sequence of interrupts tells us both the speed of the motor and the
        direction it is turning. The rotary position (Position), the rate it is
        changing (Derivative), and the accumulated error (Integral) can be used
        in a Position-Derivative-Integral{" "}
        <a href="https://en.wikipedia.org/wiki/PID_controller">
          PID feedback control loop
        </a>
        . The feedback is used to control the PWM signal to the motors.
      </p>

      <hr className="clearLeft" />
      <p>
        Reading the encoder interrupts is done in the Linux kernel on the
        Raspberry Pi. The device driver receives an interrupt for each encoder
        tick and increments or decrements the count in a data structure. The
        data is mapped to the address of an application using mmap().
      </p>
      <p>The source code for the device driver is listed below.</p>
      <AndyCodeBlock
        source_path="static/projects/kernel_module_encoder_driver/encoderDriver.c"
        language="c"
      />
      <hr className="clearLeft" />
      <p>This is the user program for reading the encoder counts.</p>
      <AndyCodeBlock
        source_path="static/projects/kernel_module_encoder_driver/encoderTestMmap.c"
        language="c"
      />
      <hr className="clearLeft" />
      <p>This is the Makefile for compiling the source code listed above.</p>
      <AndyCodeBlock
        source_path="static/projects/kernel_module_encoder_driver/encoder.makefile"
        language="makefile"
      />
      <hr className="clearLeft" />
      <p>
        This is a Python script for the GUI to display the encoder counts in the
        video.
      </p>
      <AndyCodeBlock
        source_path="static/projects/kernel_module_encoder_driver/gui.py"
        language="python"
      />
      <hr className="clearLeft" />

      <div className="imageContainer floatLeft">
        <video className="floatLeft" width="640" controls>
          <source src="Encoder-480.mp4" type="video/mp4" />
          Your browser does not support the video tab.
        </video>
        <div className="imageCaption" style={{ width: "640px" }}>
          Testing the encoder driver.
        </div>
      </div>

      <hr className="clearLeft" />

      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default KernelmoduleEncoderDriver;
