import React from "react";

import Wrapper from "../../wrapper.js";

function DepthPerception({title}: {title: string}) {
  return (
    <Wrapper title={title}>
      <div className="imageContainer floatLeft">
        <img src="Arducam-Stereo-Camera.jpg" width="610" height="470" alt="Arducam sterioscopic camera"/>
        <div className="imageCaption">
	  <p>ArduCam Stereo Camera</p>
        </div>
      </div>
      <a href="https://en.wikipedia.org/wiki/Block-matching_algorithm">block-matching algorithm</a>
      <a href="https://en.wikipedia.org/wiki/OpenCV">OpenCV</a>
      <hr className="clearLeft" />
      <div className="imageContainer floatLeft">
        <img src="i08_seedlings.jpg" width="648" height="486" alt="Sterioscopic view of potted seedlings"/>
        <div className="imageCaption">
	  <p>Stereo photo of seedlings</p>
        </div>
      </div>
      <hr className="clearLeft" />
      <div className="imageContainer floatLeft">
        <img src="i08_depth.jpg" width="648" height="486" alt="Bitmap of calculated depth"/>
        <div className="imageCaption">
	  <p>Depth map of distance from camera</p>
        </div>
      </div>
      <hr className="clearLeft" />
      <img src="/imgs/Under-Construction.jpg" alt="Man next to under construction sign"/>
      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default DepthPerception;
