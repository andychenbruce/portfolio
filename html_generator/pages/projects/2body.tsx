import React from "react";

import Wrapper from "../../wrapper.js";
import {MakeMath} from "../../render_math.js";

function Project2Body({title}: {title: string}) {
  let new_head = (
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
      integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
      crossOrigin="anonymous"
    />
  );

  return (
    <Wrapper head={new_head} title={title}>
      <div id="dvMain">
        <div id="dvSmallButtons" className="dvB"></div>
        <div id="dvLargeButtons" className="dvB"></div>
        <canvas
          id="canvas"
          width="800"
          height="800"
          onContextMenu={(event) => event.preventDefault()}
        ></canvas>
      </div>
      <hr className="clearLeft" />
      <h2>Closed form 2 body equation based on angle from periapsis</h2>
      <p>
        Orbital equation where one body's mass is negligible{" "}
        <a href="https://en.wikipedia.org/wiki/Orbit_equation">wikipedia</a>
      </p>
      <div style={{ textAlign: "center" }}>
	<MakeMath tex={"r = {l^2 \\over m^2\\mu}{1 \\over 1+e \\cdot cos(\\theta)}"} />
      </div>
      Where
      <br />
      <MakeMath tex={"l"} /> = angular momentum
      <br />
      <MakeMath tex={"m"} /> = small body mass
      <br />
      <MakeMath tex={"M"} /> = large body mass
      <br />
      <MakeMath tex={"\\mu = GM"} /> = the standard gravitational parameter
      <br />
      <MakeMath tex={"e"} /> = the eccentricity of the orbit
      <br />
      <MakeMath tex={"\\theta"} /> = angle from the periapsis, the closest
      point
      <br />
      <br />
      <br />
      If <MakeMath tex={"l"} /> is the angular momentum, dividing it by the
      mass, <MakeMath tex={"m"} />, would give the angular velocity, let that
      be <MakeMath tex={"a"} />.
      <br />
      <MakeMath tex={"a = {l \\over m}"} />
      <br />
      so then
      <br />
      <MakeMath tex={"{l^2 \\over m^2 \\mu} = {a^2 \\over \\mu}"} />
      <br />
      making the equation independent of the smaller body's mass as expected
      <br />
      <br />
      <br />
      <p>
        According to the{" "}
        <a href="https://en.wikipedia.org/wiki/Angular_momentum#Orbital_angular_momentum_in_three_dimensions">
          wikipedia page
        </a>{" "}
        for angular momentum it can be found that it is equal to the length of
        the cross product of the difference in position and the difference in
        velocity
      </p>
      <br />
      let <MakeMath tex={"\\vec{p}"} /> be the difference in postion of the 2
      objects
      <br />
      let <MakeMath tex={"\\vec{v}"} /> be the difference in velocity of the 2
      objects
      <br />
      so then
      <br />
      <MakeMath tex={"a = ||\\vec{p} \\times \\vec{v}||"} />
      <br />
      <br />
      <br />
      <p>
        According to this{" "}
        <a href="https://en.wikipedia.org/wiki/Eccentricity_vector">
          wikipedia page
        </a>
        , one can find an obscure thing called an eccentricity vector. It is a
        vector pointing from the apoapsis of the orbit to the periapsis with the
        magnitude of the eccentricity. It is calculated by
      </p>
      <br />
      <MakeMath
        tex={
          "\\vec{e} = {\\vec{v} \\times (\\vec{p} \\times \\vec{v}) \\over \\mu} - {\\vec{p} \\over ||\\vec{p}||}"
        }
      />
      <br />
      so then
      <br />
      <MakeMath tex={"e = ||\\vec{e}||"} />
      <br />
      <br />
      <br />
      <p>
        All parameters are known except $r$ and $\theta$, but the radius and
        angle must be projected onto the plane that the small body is orbiting
        on. This is the hardest part. There are many ways to do this but the one
        I derived is:
      </p>
      <br />
      <MakeMath tex={"\\vec{e}"} /> goes from the apoapsis to the periapsis.
      Because the periapsis and apoapsis are always 180 degrees apart, it goes
      through the center so it also goes from the center to the periapsis. By
      rotating <MakeMath tex={"\\vec{e}"} /> around the normal vector to the
      plane by <MakeMath tex={"\\theta"} /> it will give the direction the
      position is in 3d space since <MakeMath tex={"\\theta"} /> is defined as
      the angle from the periapsis.
      <br />
      <br />
      The normal vector to the plane can be definded as
      <br />
      <MakeMath tex={"\\vec{n} = \\vec{p} \\times \\vec{v}"} />
      <br />
      since both the position vector and velocity vector must be on the orbit's
      plane. This technically won't work if the position vector and velocity
      vector are parallel, but that would mean that the orbit is a straight line
      going through the center and has an infinite number of planes the orbit
      can lie on and that doesn't matter anyway.
      <br />
      <br />
      <p>
        {" "}
        <MakeMath tex={"\\vec{e}"} /> can be rotated around{" "}
        <MakeMath tex={"\\vec{n}"} /> using the{" "}
        <a href="https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula">
          Rodrigues' rotation formula
        </a>
        , which rotates a vector around a unit normal vector. Because the
        ecentricity vector also lies on the plane,{" "}
        <MakeMath tex={"\\vec{n}"} /> is already a normal vector to it, it
        just needs to be normalised to a unit vector
      </p>
      <br />
      <br />
      <MakeMath tex={"\\vec{m} = {\\vec{n} \\over ||\\vec{n}||}"} />
      <br />
      <MakeMath
        tex={
          "\\vec{o} = \\vec{e}cos(\\theta) + (\\vec{m} \\times \\vec{e})sin(\\theta) + \\vec{m}(\\vec{m} \\cdot \\vec{e})(1 - cos(\\theta))"
        }
      />
      <br />
      <br />
      Where <MakeMath tex={"\\vec{o}"} /> would be pointing in the direction
      from the center to the position at angle $\theta$ from the periapsis.
      <br />
      <br />
      Now taking <MakeMath tex={"\\vec{o}"} />, normalizing it into a unit
      vector, then multiplying by r will give the final position.
      <br />
      <br />
      <MakeMath tex={"r{\\vec{o} \\over ||\\vec{o}||}"} />
      <br />
      which is equal to
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <MakeMath
          tex={
            "{a^2 \\over \\mu}{1 \\over 1+ecos(\\theta)}{\\vec{o} \\over ||\\vec{o}||}"
          }
        />
      </div>
      <br />
      where
      <br />
      <MakeMath tex={"a = ||\\vec{p} \\times \\vec{v}||"} />
      <br />
      <MakeMath tex={"\\mu = -GM"} />
      <br />
      <MakeMath
        tex={
          "\\vec{e} = {\\vec{v} \\times (\\vec{p} \\times \\vec{v}) \\over \\mu} - {\\vec{p} \\over ||\\vec{p}||}"
        }
      />
      <br />
      <MakeMath tex={"e = ||\\vec{e}||"} />
      <br />
      <MakeMath tex={"\\vec{n} = \\vec{p} \\times \\vec{v}"} /> or{" "}
      <MakeMath tex={"\\vec{v} \\times \\vec{p}"} />, doesn't matter
      <br />
      <MakeMath tex={"\\vec{m} = {\\vec{n} \\over ||\\vec{n}||}"} />
      <br />
      <MakeMath
        tex={
          "\\vec{o} = \\vec{e}cos(\\theta) + (\\vec{m} \\times \\vec{e})sin(\\theta) + \\vec{m}(\\vec{m} \\cdot \\vec{e})(1 - cos(\\theta))"
        }
      />
      <hr />
      <h2>Extra technical stuff</h2>
      <p>
        The shadowing of the balls is just the cosine of the angle between the
        normal vector to the surface of the sphere on that point to the light
        source, the yellow ball. The cosine between -1 and 1 is limited to 0 as
        the minimum so everything below -1 is 0, then the value between 0 and 1
        is scaled between the ambient light and the light under full exposure
      </p>
      <br />
      <p>
        The orbits aren't predetermined. They are randomly generated positions
        and velocities. They are the same when the page is reloaded since it
        uses the same seed, but the program is robust enough to handle any
        orbit.
      </p>
      <br />
      <p>
        The paths aren't exactly accurate because the simulation is run
        numerically, while the path prediction, the black line, is closed form.
        This is a minor prolem because the derivation is very efficient when
        translated to computer code. It runs at 5000 ticks every 1/30th of a
        second with a dt = 0.000005. The inaccuracy is most notable on the
        hyberbola after a while because of the way computers handle floating
        point numbers. When it gets to a large distance and tries to normalise,
        it looses a lot of accuracy when dividing then multiplying back by
        either really large or really small numbers. It is notable in the
        hyperbola messing up and in the really close orbit shaking a tiny bit
        when the cyan ball passes extremely close to the yellow ball.
      </p>
      <br />
      <p>
        The black lines are actually drawn pretty inefficently. Since the
        function is based on <MakeMath tex={"\\theta"} /> which is an angle
        the farther away portions of orbits get only a few points since they
        occupy less of the angle, you can see the far out parts of the elipses
        get jankey since they are drawn with fewer points. Also the lines are
        draw inefficiently as they are buffered into the GPU. The lines share
        their start and end points with each other, but when drawing it
        duplicates points in the buffer and then passes it to the GPU. The data
        passed to the GPU every frame could be basically halved in size by using
        indices, but for now it runs fine at least on my computer.
      </p>
      <hr />
      <hr className="clearLeft" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      var g = {};
      g.smallButtons = true;
      g.buttonArray = [
      [ 0, 'R', 'Reset' ],
      [ 0, 'r', 'Run' ],
      [ 0, 'S', 'Pause' ],
      ];
      var Module = {
      canvas: document.getElementById("canvas"),
      arguments: ["-tab", "9", "-smallButtons" ]
      };`,
        }}
      />
      <script src="/wasm/readfile.js"></script>
      <script src="/wasm/buttons.js"></script>
      <script src="/wasm/index.js"></script>
    </Wrapper>
  );
}

export default Project2Body;
