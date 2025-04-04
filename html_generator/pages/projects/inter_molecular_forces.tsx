import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";

import Wrapper from "../../wrapper.js";

function InterMolecularForce({title}: {title: string}) {
  let new_head = (
    <script type="module" src="./main.js"></script>
  );

  return (
    <Wrapper head={new_head} title={title}>
      <div id="dvMain">
        <canvas
          id="andy_canvas"
          width="800"
          height="800"
          onContextMenu={(event) => event.preventDefault()}
        ></canvas>
      </div>
      <hr className="clearLeft" />
      <br />
      <p>
        I modeled it off of the Lennard-Jones potential (
        <a href="https://en.wikipedia.org/wiki/Lennard-Jones_potential">
          wikipedia
        </a>
        )
      </p>
      <br />
      <p>
        Each sphere is basically one atom or molecule and it's potential energy
        is the sum of its Lennards-Jones potential relative to every other atom
      </p>
      <MakeMathDisplay
        tex={
          "E(r) = 4\\epsilon [\\left(\\dfrac{\\sigma}{r}\\right)^{12} - \\left(\\dfrac{\\sigma}{r}\\right)^{6}]"
        } />
      <br />
      where
      <MakeMath tex={"E(r)"} /> is the potential energy for that distance
      <br />
      <MakeMath tex={"r"} /> is the distance between particles
      <br />
      <MakeMath tex={"\\epsilon"} /> is the depth of the potential well,
      basically the potential energy at the minimum or most stable
      <br />
      <MakeMath tex={"\\sigma"} /> is where potential energy is zero,
      basically the size of the particle.
      <br />
      <p>
        Note that particles won't go to the distance where potential energy is
        zero, but will go to the bottom of the potential well where potential
        energy is negative, slightly before the edge of the particle where
        potential energy is zero.
      </p>
      <br />
      The bottom of the energy well is <MakeMath tex={"r = {2^{1/6}}\\sigma"} />
      <br />
      <p>
        A more accurate simulation would put the potential energy into the
        potential energy function in Schrödinger's equation at every point to
        model the change in the probability waves of atoms. But that is really
        hard to program since it uses derivatives of vector fields. Instead, it
        can be approximated for a worse but way faster and easier numerical
        solution.
      </p>
      <br />
      <MakeMath tex={"v"} /> = change in distance of nuclei, like velocity but
      only the direction toward the other nuclei
      <br />
      <MakeMath tex={"r"} /> = distance between nuclei
      <br />
      <MakeMath tex={"K"} /> = kinetic energy of <MakeMath tex={"v"} />
      <br />
      <br />
      <br />
      <MakeMath tex={"v = \\dfrac{dr}{dt}"} />
      <br />
      <MakeMath tex={"K = \\dfrac{1}{2}v^2"} />
      <br />
      taking the derivative of <MakeMath tex={"K"} /> with respect to{" "}
      <MakeMath tex={"t"} />
      <br />
      <MakeMath tex={"\\dfrac{dK}{dt} = v\\dfrac{dv}{dt}"} />
      <br />
      dividing both sides by <MakeMath tex={"v"} />
      <br />
      <MakeMath tex={"\\dfrac{dK}{dt}\\dfrac{1}{v} = \\dfrac{dv}{dt}"} />
      <br />
      substitute <MakeMath tex={"v"} /> for{" "}
      <MakeMath tex={"\\dfrac{dr}{dt}"} />
      <br />
      <MakeMath
        tex={"\\dfrac{dK}{dt}\\dfrac{1}{\\frac{dr}{dt}} = \\dfrac{dv}{dt}"}
      />
      <br />
      simplify to
      <br />
      <MakeMath tex={"\\dfrac{dK}{dt}\\dfrac{dt}{dr} = \\dfrac{dv}{dt}"} />
      <br />
      the <MakeMath tex={"dt"} />'s cancel to become
      <br />
      <MakeMath tex={"\\dfrac{dK}{dr} = \\dfrac{dv}{dt}"} />
      <br />
      The change in velocity over the change in time is just acceleration so
      <br />
      acceleration = <MakeMath tex={"\\dfrac{dK}{dr}"} />
      <br />
      Now let's assume that kinetic energy is the only energy exchanged with
      potential energy, ignoring electron levels, etc. So the only place a drop
      in potential energy can go is into kinetic energy, so
      <br />
      acceleration = <MakeMath tex={"\\dfrac{dK}{dr} = -\\dfrac{dE(r)}{dr}"} />
      <br />
      Taking the derivative of the Lennards-Jones potential gives
      <br />
      <MakeMath
        tex={
          "\\dfrac{dE(r)}{dr} = 4\\epsilon [-12\\dfrac{(\\dfrac{\\sigma}{r})^{13}}{\\sigma} + 6\\dfrac{(\\dfrac{\\sigma}{r})^{7}}{\\sigma}]"
        }
      />
      <br />
      So finally an easily implementable numeric solution
      <br />
      <MakeMathDisplay
        tex={
          "\\text{acceleration} = 4\\epsilon [-12\\dfrac{(\\dfrac{\\sigma}{r})^{13}}{\\sigma} + 6\\dfrac{(\\dfrac{\\sigma}{r})^{7}}{\\sigma}]"
        }
      />
      <br />
      where the accelation is directly towards the other atom
      <br />
      <br />
      <br />
      <p>
        In the simulation above this exact equation is implemented except when{" "}
        <MakeMath tex={"r"} /> approaches very close to{" "}
        <MakeMath tex={"\\sigma"} /> because the Lennards-Jones potential has
        an extremely steep incline, so the derivative makes an extremely large
        acceleration. Because the simulation only does one physics tick in a set
        time frame it can't simulate sharp changes. Realistically the atoms
        would be pushed apart before it reaches that close the simulation does
        have atoms get that close due to a large enought{" "}
        <MakeMath tex={"dt"} /> causing innaccuraccies in each time tick. To
        compensate the equation is disabled for when{" "}
        <MakeMath tex={"r < 1.07\\sigma"} />, and instead applies an elastic
        collission which is closer to real life than the numerical solution. The
        elastic collision equation in 3D is taken from{" "}
        <a href="https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional">
          here
        </a>
      </p>
      <br />
      <p>
        There are still glitches in the elastic collision detection since each
        sphere is only allowed one collision with every other sphere. When
        around a lot of other spheres it is pulled in harder than the elastic
        collisions push it out. The solution would to keep colliding a sphere
        with its neightbor until the velocity vectors are moving apart within
        the same physics tick. But that uses a lot of computing power and the
        simulation already doesn't run well, but the basic concept of IMF
        simulation is still there
      </p>
    </Wrapper>
  );
}

export default InterMolecularForce;
