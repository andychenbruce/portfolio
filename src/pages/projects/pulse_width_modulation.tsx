import React from 'react';

import Wrapper from '../../wrapper.js';
import {AndyCodeBlock} from '../../include_code.js';

function PulseWidthModulation(props) {

    let new_heads = (<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css" />);
  
  return (
    <Wrapper head={new_heads} {...props}>
	  <p>As part of my Capstone robot project, I need to control the speed of the drive wheels.  This is done using <strong>Pulse Width Modulation (PWM)</strong>.  To implement PWM on my robot, I needed to program and control the hardware timers.</p>
	  <p>There are libraries for PWM, but I decided not to use any library because they use wasteful busy loops and I needed tighter control of the Raspberry Pi's resources.  I also wanted to learn and understand how to program direct device access.</p>
	  <p>The ultimate goal is to control motors, but I started with LEDs since they are easier to visualize while debugging.</p>
	  <hr className="clearLeft" />
	  <p className="clearLeft">The images below show the GPIO Pin header for a Rasberry Pi. You can see that the PWM outputs are on <strong>Pin-32</strong> labeled <strong>BCM-12 PWM0</strong> and <strong>Pin-33</strong> labeled <strong>BCM-13 PWM1.</strong>  I also use the <strong>Ground</strong> on <strong>Pin-6.</strong></p>
	  <img className="floatLeft imageAlone" src="RaspberryPi-GPIO.png" alt="Raspberry Pi GPIO"/>
	  <div className="imageContainer">
	    <img src="LED-Timer.gif" alt="LED PWM Circuit" height="470"/>
	    <img src="PWM-Circuit.png" className="lowerRight" alt="LED PWM Circuit" height="170"/>
	  </div>
	  <hr className="clearLeft" />
	  <p>The Raspberry Pi uses memory-mapped I/O.  This means that device registers can be read and written as if they were locations in memory.  The hardware address of the GPIO registers depends on the version the Raspberry Pi board.  I am using a RPi4, which has a <strong>Broadcom BCM2711 SoC with an ARM Cortex-A72.</strong></p>
	  <p>The <a href="/pdf/bcm2711-peripherals.pdf">BCM2711 Peripherals Manual</a> documents the starting address of the GPIO registers.  For the RPi4, the address is 0xfe000000.  But I also want my program to work with a RPi3, where the address is 0x3f00000.  So I use this code to find the RPi model number:</p>

      <AndyCodeBlock source_path="static/projects/pulse_width_modulation/get_model_info.c" language="c" />
      	  <p>I then use the <span className="codeSpan">mmap()</span> system call to map the GPIO registers into virtual memory.</p>
      <AndyCodeBlock source_path="static/projects/pulse_width_modulation/gpio_mmap.c" language="c" />
	  	  <p>The rest of the code is a lot of low-level register banging.</p>
	  <p>You can see <a href="c02_Code.html">The Source code here</a>, or <a href="c02_PWM.zip">download a zipfile by clicking here</a>.</p>
	  <p>You can compile it using this makefile:</p>
      <AndyCodeBlock source_path="static/projects/pulse_width_modulation/rpi.makefile" language="makefile" />
	  	  <p>Compile it by running <span className="codeSpan">make</span>.</p>
	  <div className="terminalDiv"><pre>
  $ make
  gcc -O3 -Wall -Wextra -Werror -o pwmLed pwmLED.c
  $
	  </pre></div>
	  <p>You can use the <span className="codeSpan">-help</span> flag to show the usage.</p>
	  <div className="terminalDiv">
	    <pre>  
  $ sudo su
  # whoami
  root
  # pwmLED -help
  Usage: pwmLed &lt;red-duty-cycle-%&gt; &lt;red-frequency&gt; &lt;blue-duty-cycle-%&gt; &lt;blue-freq&gt;
  duty-cycle: 0 to 100
  frequency: Hertz, 1 to 18000000
  #
  #
	    </pre>
	  </div>
	  <p>So, let's give it a try, with a two-hertz, 50% duty cycle to the red LED, and a one-hertz, 50% duty cycle to the blue LED:</p>
	  <div className="terminalDiv">
	    <pre>  
  # pwmLED 50 2 50 1
  #
	    </pre>
	  </div>
	  <img className="floatLeft imageAlone" src="LED-Timer.gif" alt="LED PWM Circuit"/>
	  <p>Looks's good!</p>
	  <p>After the program exits <strong>the LED continues to blink</strong> because no software is running.  The blinking is controlled solely by the PWM hardware registers. The CPU is doing nothing.</p>

	  <hr className="clearLeft" />
	  <p>Now, let's try a 5Hz, 20% duty cycle on blue, and nothing on red:</p>

	  <div className="terminalDiv">
	    <pre>  
  # pwmLED 0 1 20 5
  #
	    </pre>
	  </div>
	  <img className="floatLeft imageAlone" src="LED-Timer-5Hz-20-Blue.gif" alt="LED PWM Circuit Blue 5Hz"/>
	  <p>Perfect!</p>
	  <hr className="clearLeft" />

	  <p><a href="code/c02_Code.html">Source code for this project</a></p>

	  <p><a href="zip/c02_PWM.zip">Download a zipfile by clicking here</a>.</p>

	  <p>The next step is to use this program to control motors: <a href="/projects/motor_pwm">Motor Speed Control using Raspberry Pi PWM</a>.</p>
	  <p>Another related project you can see is <a href="/projects/phone_controller">Controlling a Raspberry Pi with a Cell Phone</a>.</p>
      
      <hr className="clearLeft" />

    </Wrapper>
  );
};

export default PulseWidthModulation;

