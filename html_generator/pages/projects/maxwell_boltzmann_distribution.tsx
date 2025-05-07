import React from "react";
import {MakeMath, MakeMathDisplay} from "../../render_math.js";


import Wrapper from "../../wrapper.js";

function Boltzman({title}: {title: string}) {
  let new_head = (
    <script type="module" src="./main.js"></script>
  );

  return (
    <Wrapper head={new_head} title={title}>
      <div className="boltzmanCanvases" >
	<canvas
          id="graph_canvas"
          width="800"
          height="400"
        ></canvas>
        <canvas
          id="andy_canvas"
          width="800"
          height="800"
        ></canvas>
      </div>
      <hr className="clearLeft" />
      <h2>Maxwell-Boltzmann Distribution for a microcanonical ensemble with no potential energy</h2>
      <br />
      <p>Equation for 3d elastic collissions of spheres from <a href="https://www.sjsu.edu/faculty/watkins/collision.htm">here</a>.</p>
      <br />
      <p>From the <a href="../boltzman_derivation">Boltzmann Distribution</a>, when entropy is maximized, the probability of a particle being in any microstate is</p>
      <MakeMathDisplay
        tex={"P(\\vec{x}, \\vec{p}) = \\dfrac{e^{-\\frac{H(\\vec{x}, \\vec{p})}{k_B T}}}{\\int_{-\\infty}^\\infty\\int_V e^{-\\frac{H(\\vec{x}', \\vec{p}')}{k_B T}} d\\vec{x}' d\\vec{p}'} = \\dfrac{e^{-\\frac{H(\\vec{x}, \\vec{p})}{k_B T}}}{Z}"}
      />
      <p>If the Hamiltonian has no potential energy, then for a non-relativistic particle it would just be</p>
      <MakeMathDisplay
        tex={"H(\\vec{x}, \\vec{p}) = \\frac{\\vec{p}^2}{2m} = \\frac{\\vec{p} \\cdot \\vec{p}}{2m} = \\frac{p_x^2 + p_y^2 + p_z^2}{2m}"}
      />
      <p>So since <MakeMath tex={"\\vec{x}"} /> doesn't matter</p>
      <MakeMathDisplay
        tex={"P(\\vec{p}) = \\dfrac{e^{-\\frac{p_x^2 + p_y^2 + p_z^2}{2 m k_B T}}}{Z}"}
      />
      <p>And to calculate the partition function</p>
      <MakeMathDisplay
        tex={"Z = \\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty \\int_{-\\infty}^\\infty e^{-\\frac{p_x^2 + p_y^2 + p_z^2}{2 m k_B T}} dp_x dp_y dp_z"}
      />
      <p>And this is just a 3D gaussan so</p>
      <MakeMathDisplay
        tex={"= (\\tau m k_B T)^{3/2}"}
      />
      <p>then substituting gives</p>
      <MakeMathDisplay
        tex={"P(\\vec{p}) = (\\tau m k_B T)^{-3/2}e^{-\\frac{p_x^2 + p_y^2 + p_z^2}{2 m k_B T}} = (\\tau m k_B T)^{-3/2}e^{-\\frac{\\vec{p}^2}{2 m k_B T}}"}
      />
      <p>and switching to <MakeMath tex={"\\vec{p} = m\\vec{v}"} /> while preserving the probability density</p>
      <MakeMathDisplay
        tex={"P(\\vec{v}) = P(\\vec{p}(\\vec{v}))\\Big(\\frac{d\\vec{p}_x}{d\\vec{v}_x} \\frac{d\\vec{p}_y}{d\\vec{v}_y} \\frac{d\\vec{p}_z}{d\\vec{v}_z}\\Big) = m^3 P(\\vec{p}(\\vec{v}))"}
      />
      <MakeMathDisplay
        tex={"P(\\vec{v}) = \\Big(\\frac{m}{\\tau k_B T}\\Big)^{3/2}e^{-\\frac{m\\vec{v}^2}{2 k_B T}}"}
      />
      <p>Now if we want to find the speed we can create a bijection into polar coordinates</p>
      <MakeMathDisplay
        tex={"s = \\sqrt{v_x^2 + v_y^2 + v_z^2}, \\theta, \\psi"}
      />
      <p>we get a Jacobian of</p>
      <MakeMathDisplay
        tex={"s^2 \\sin(\\theta)"}
      />
      <p>So we can write</p>
      <MakeMathDisplay
        tex={"P(s, \\theta, \\psi) = P(\\bigg\\langle r \\sin(\\theta) \\cos(\\psi), r \\sin(\\theta) \\sin(\\psi), r \\cos(\\theta) \\bigg\\rangle) s^2 \\sin(\\theta)"}
      />
      <p>then to find the probability of a speed</p>
      <MakeMathDisplay
        tex={"P(s) = \\int_0^\\tau\\int_0^{\\tau/2} P(\\bigg\\langle r \\sin(\\theta) \\cos(\\psi), r \\sin(\\theta) \\sin(\\psi), r \\cos(\\theta) \\bigg\\rangle) s^2 \\sin(\\theta) d\\theta d\\psi"}
      />
      <p>since each velocity coordinate is independent</p>
      <MakeMathDisplay
        tex={"\\int_0^\\tau\\int_0^{\\tau/2} P(v_x = r \\sin(\\theta) \\cos(\\psi)) P(v_y = r \\sin(\\theta) \\sin(\\psi)) P(v_z = r \\cos(\\theta)) s^2 \\sin(\\theta) d\\theta d\\psi"}
      />
      <p>And since it doesn't depend on angle</p>
      <MakeMathDisplay
        tex={"\\int_0^\\tau\\int_0^{\\tau/2} P(\\vec{v}^2 = s^2) s^2 \\sin(\\theta) d\\theta d\\psi"}
      />
      <p>And thats just the surface area of a sphere</p>
      <MakeMathDisplay
        tex={"P(s) = 2\\tau s^2 P(\\vec{v}^2 = s^2)"}
      />
      <MakeMathDisplay
        tex={"= 2 s^2 \\sqrt{\\frac{1}{\\tau}}\\Big(\\frac{m}{k_B T}\\Big)^{3/2}e^{-\\frac{m\\vec{v}^2}{2 k_B T}}"}
      />
      <hr />
      <h3>Finding temperature</h3>
      <p>
	   To find the temperature of a microcanonical system (NVE ensemble) with no potential energy we start with the Hamiltonian equal to a constant <MakeMath tex={"E"} />. Since there is only kinetic energy the position <MakeMath tex={"\\vec{x}"} /> doesn't matter.
      </p>
      <MakeMathDisplay
        tex={"H(\\vec{x}, \\vec{p}) = \\sum_i \\frac{p_i^2}{2m} = E"}
      />
      
      
      <p>What we want to find the temperature defined by</p>
      <MakeMathDisplay
        tex={"\\frac{1}{T} = \\frac{\\partial S(N, V, E)}{E}"}
      />
      <p>where the entropy <MakeMath tex={"S = - k_B \\sum_i P(x_i, p_i) ln(P(x_i, p_i) = -k_B ln\\Big(\\frac{1}{W(E)}\\Big) = k_B ln(W(E))"} /> when entropy is maximized (so all states are the same probability) and <MakeMath tex={"W(E)"} /> is the number of accessable states between <MakeMath tex={"E"} /> and <MakeMath tex={"E + \\Delta E"} />.</p>
      <p>Rearange to</p>
      <MakeMathDisplay
        tex={"\\sum_i p_i^2 = 2mE"}
      />
      <p>If we want to find <MakeMath tex={"W(E)"} /> then assuming all particles are indistunguishable for the factorial and using Plank's constant as a measure of the phase space then</p>
      <MakeMathDisplay
        tex={"W(E) = \\frac{1}{h^{3N}N!}\\int_V \\int_{-\\infty}^\\infty \\mathbb{1}(E \\le H(\\vec{x}, \\vec{p}) \\le E + \\Delta E) d^{3N}\\vec{p} d^{3N}\\vec{x}"}
      />
      <p>With no potential energy the position doesn't matter and can be factored out</p>
      <MakeMathDisplay
        tex={"= \\frac{V^{3N}}{h^{3N}N!}\\int_{-\\infty}^\\infty \\mathbb{1}\\bigg(2mE \\le  \\sum_i p_i^2 \\le 2m(E + \\Delta E) \\bigg) d^{3N}\\vec{p}"}
      />
      <MakeMathDisplay
        tex={"= \\frac{V^{3N}}{h^{3N}N!}\\int_{-\\infty}^\\infty \\mathbb{1}\\bigg(\\sum_i p_i^2 \\le 2m(E + \\Delta E)\\bigg) - \\mathbf{1}\\bigg(\\sum_i p_i^2 \\le 2mE\\bigg) d^{3N}\\vec{p}"}
      />
      <MakeMathDisplay
        tex={"= \\frac{V^{3N}}{h^{3N}N!}\\Bigg(\\int_{-\\sqrt{2m(E + \\Delta E)}}^{\\sqrt{2m(E + \\Delta E)}} \\int_{-\\sqrt{2m(E + \\Delta E) - p_1^2}}^{\\sqrt{2m(E + \\Delta E) - p_1^2}} \\cdots \\int_{-\\sqrt{2m(E + \\Delta E) - p_1^2 - \\cdots p_{n-1}^2}}^{\\sqrt{2m(E + \\Delta E) - p_1^2 - \\cdots p_{n-1}^2}} d^{3N}\\vec{p}"}
      />
      <MakeMathDisplay
        tex={"- \\int_{-\\sqrt{2mE}}^{\\sqrt{2mE}} \\int_{-\\sqrt{2mE - p_1^2}}^{\\sqrt{2mE - p_1^2}} \\cdots \\int_{-\\sqrt{2mE - p_1^2 - \\cdots p_{n-1}^2}}^{\\sqrt{2mE - p_1^2 - \\cdots p_{n-1}^2}} d^{3N}\\vec{p} \\Bigg)"}
      />
      <p>And recognize these are just the equation for a <MakeMath tex={"3N"} /> dimensional hypersphere of radius <MakeMath tex={"\\sqrt{2mE}"} /> and <MakeMath tex={"2m(E + \\delta E)"} />.</p>
      <MakeMathDisplay
        tex={"= \\frac{V^{3N}}{h^{3N}N!}\\Bigg(\\frac{\\Big(\\frac{\\tau}{2}\\Big)^{3N/2} (2m(E + \\Delta E))^{3N/2}}{\\Gamma(\\frac{3N}{2} + 1)} - \\frac{\\Big(\\frac{\\tau}{2}\\Big)^{3N/2} (2mE)^{3N/2}}{\\Gamma(\\frac{3N}{2} + 1)}\\Bigg)"}
      />
      <MakeMathDisplay
        tex={"= \\frac{V^{3N} \\Big(\\frac{\\tau}{2}\\Big)^{3N/2} 2m^{3N} }{h^{3N}N! \\Gamma(\\frac{3N}{2} + 1)}\\Bigg(\\Big(E + \\Delta E\\Big)^{3N/2} - E^{3N/2}\\Bigg)"}
      />
      <p>And now</p>
      <MakeMathDisplay
        tex={"\\frac{1}{T} = k_B\\frac{\\partial ln(W(E))}{\\partial E} = k_B \\frac{1}{W(E)}\\frac{\\partial W(E)}{\\partial E}"}
      />
      <p>substitute</p>
      <MakeMathDisplay
        tex={"= k_B\\frac{1}{\\frac{V^{3N} \\Big(\\frac{\\tau}{2}\\Big)^{3N/2} 2m^{3N} }{h^{3N}N! \\Gamma(\\frac{3N}{2} + 1)}\\Bigg(\\Big(E + \\Delta E\\Big)^{3N/2} - E^{3N/2}\\Bigg)}\\frac{V^{3N} \\Big(\\frac{\\tau}{2}\\Big)^{3N/2} 2m^{3N} }{h^{3N}N! \\Gamma(\\frac{3N}{2} + 1)}\\frac{3N}{2}\\Bigg(\\Big(E + \\Delta E\\Big)^{(3N/2)-1} - E^{(3N/2)-1}\\Bigg)"}
      />
      <p>cancell</p>
      <MakeMathDisplay
	tex={"= k_B\\frac{3N}{2}\\frac{\\Big(E + \\Delta E\\Big)^{(3N/2)-1} - E^{(3N/2)-1}}{\\Big(E + \\Delta E\\Big)^{3N/2} - E^{3N/2}}"}
      />
      <p>If we take the limit then</p>
      <MakeMathDisplay
	tex={"\\lim_{\\Delta E \\rightarrow 0} k_B\\frac{3N}{2}\\frac{\\Big(E + \\Delta E\\Big)^{(3N/2)-1} - E^{(3N/2)-1}}{\\Big(E + \\Delta E\\Big)^{3N/2} - E^{3N/2}}"}
      />
      <MakeMathDisplay
	tex={"= k_B\\frac{3N}{2}\\frac{\\frac{3N}{2}-1}{\\frac{3N}{2}E}"}
      />
      <p>so</p>
      <MakeMathDisplay
	tex={"\\frac{1}{T} = k_B\\frac{\\frac{3N}{2}-1}{E}"}
      />
      <p>making</p>
      <MakeMathDisplay
	tex={"k_B T = \\frac{E}{\\frac{3N}{2}-1}"}
      />
      <p>This equation is consistent with the equipartition theorem as each of the <MakeMath tex={"3N-1"} /> degrees of freedom contribute <MakeMath tex={"\\frac{3}{2}k_BT"} /> to the total energy.</p>
      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default Boltzman;
