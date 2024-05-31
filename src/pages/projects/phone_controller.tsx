import React from 'react';
import {Tex} from 'react-tex';

import {AndyCodeBlock} from '../../include_code.js';
import Wrapper from '../../wrapper.js';

// <AndyCodeBlock source_path="static/projects/delta_gcode/serial.cpp" language="cpp" />

function PhoneController(props) {

  let new_heads = (<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css" />);
  
  return (
    <Wrapper head={new_heads} {...props}>
      	<p>
	  In <a href="p02_PWM.html">the previous project</a>, I implemented PWM on
	  a Raspberry Pi using direct hardware access.
	</p>
	
	<p>In this project, I will implement a web-app to control the
	  PWM from a browser running on a phone.</p>

	<p>The first step is to write an HTTP server to open a
	  <a href="https://en.wikipedia.org/wiki/Network_socket">TCP/IP socket</a> and
	  send requested files to the client browser.  The code to do that is listed
	  below.</p>

      <AndyCodeBlock source_path="static/projects/phone_controller/server.c" language="c" />
      

	<p>We also need some utility functions for dealing with the
	  socket requests. These are listed below:</p>

      <AndyCodeBlock source_path="static/projects/phone_controller/socket.c" language="c" />
      
	<p>Next, we need the HTML and JavaScript files to create the
	  user interface in the phone's browser.</p>
      <AndyCodeBlock source_path="static/projects/phone_controller/phone_code.html" language="html" />
      
	       <AndyCodeBlock source_path="static/projects/phone_controller/phone_code.js" language="javascript" />
		 

	<p>Ok.  Now let's run it.  A normal HTTP server is on port 80, but that port
	  may already be in use, so we can use port 12345 instead.  It could be any
	  unused port number, as long as the server and client agree. We also need
	  the internet address of the Raspberry Pi.  To get that we run
	  <span className="codeSpan">hostname -I</span>.</p>
	<div className="terminalDiv">
	  <pre>
	    $ hostname -I
	    192.168.0.115
	    $
	    $
	  </pre>
	</div>
      <div className="imageContainer floatLeft">
	  <video className="floatLeft" width="640" controls><source src="phonePwm480.mp4" type="video/mp4" />Your browser does not support the video tab.
	  </video>
	  <div className="imageCaption" style={{width: "640px"}}>PWM control with a phone
	</div></div>
	<p>So we start the server on the Raspberry Pi, and then connect
	  over Wifi by entering the URL
	  <span className="codeSpan">http://192.168.0.115:12345/</span>.</p>
	<p>When the interface is displayed, we can used the sliders
	  to control the frequency and the pulse width (duty cycle) of
	  the signal driving the LEDs. Click on the video to see a demo.</p>
	<hr className="clearLeft" />
    </Wrapper>
  );
};

export default PhoneController;
