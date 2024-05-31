import React from "react";

import Wrapper from "../../wrapper.js";

function DepthPerception(props) {
  return (
    <Wrapper {...props}>
      <div className="imageContainer floatLeft">
        <img src="Arducam-Stereo-Camera.jpg" width="610" height="470" />
        <div className="imageCaption" style={{ width: "610px" }}>
          ArduCam Stereo Camera
        </div>
      </div>

      <a href="https://en.wikipedia.org/wiki/Block-matching_algorithm">
        block-matching algorithm
      </a>

      <a href="https://en.wikipedia.org/wiki/OpenCV">OpenCV</a>
      <hr className="clearLeft" />
      <div className="imageContainer floatLeft">
        <img src="i08_seedlings.jpg" width="648" height="486" />
        <div className="imageCaption" style={{ width: "648px" }}>
          Stereo photo of seedlings
        </div>
      </div>
      <hr className="clearLeft" />
      <div className="imageContainer floatLeft">
        <img src="i08_depth.jpg" width="648" height="486" />
        <div className="imageCaption" style={{ width: "648px" }}>
          Depth map of distance from camera
        </div>
      </div>
      <hr className="clearLeft" />

      <img src="/imgs/Under-Construction.jpg" />
      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default DepthPerception;
