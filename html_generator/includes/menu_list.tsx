import React from "react";

import Project2Body from "../pages/projects/2body.js";
import MaxwellBoltzmann from "../pages/projects/maxwell_boltzmann_distribution.js";
import FreeEnergyGradient from "../pages/projects/free_energy_gradient.js";
import StatisticalMechanicsDerivation from "../pages/projects/statistical_mechanics_derivation.js";
import Capstone from "../pages/projects/capstone.js";
import FluctuationDissipationTheorem from "../pages/projects/fluctuation_dissipation_theorem.js";
import DeltaGcode from "../pages/projects/delta_gcode.js";
import DepthPerception from "../pages/projects/depth_perception.js";
import Fire from "../pages/projects/fire.js";
import NavierStokes from "../pages/projects/fluid_sim_navier_stokes.js";
import Icosahedron from "../pages/projects/icosahedron.js";
import InterMolecularForce from "../pages/projects/inter_molecular_forces.js";
import Jello from "../pages/projects/jello.js";
import KernelModuleEncoderDriver from "../pages/projects/kernel_module_encoder_driver.js";
import Mandelbrot from "../pages/projects/mandelbrot.js";
import MotorPWM from "../pages/projects/motor_pwm.js";
import PhoneController from "../pages/projects/phone_controller.js";
import Planets from "../pages/projects/planets.js";
import PulseWidthModulation from "../pages/projects/pulse_width_modulation.js";
import SeedlingSegmentation from "../pages/projects/seedling_segmentation.js";
import SeedlingTensorflow from "../pages/projects/seedlings_tensorflow.js";
import SphereReflectionTexture from "../pages/projects/sphere_reflection_texture.js";
import WaterMarbles from "../pages/projects/water_marbles.js";
import Schrödinger from "../pages/projects/schrödinger.js";
import DiracSpinors from "../pages/projects/dirac_spinor.js";
import TimeEvolutionOperators from "../pages/projects/time_evolution.js";
import FokkerPlank from "../pages/projects/fokker_plank.js";
import LangevinDynamics from "../pages/projects/langevin_dynamics.js";
import IncompletenessTheorem from "../pages/projects/incompleteness_theorem.js";

export const MathProjects = [
  {
    react: DiracSpinors,
    path: "dirac_spinors",
    title: "Dirac Spinors as the Minimal Left Ideal of a Clifford Algebra"
  },
  {
    react: FreeEnergyGradient,
    path: "free_energy_gradient",
    title: "Potential Mean Force in the Cannonical and Isothermal-Isobaric Ensemble"
  },
  {
    react: FluctuationDissipationTheorem,
    path: "fluctuation_dissipation_theorem",
    title: "Fluctuation Dissipation Theorem"
  },
  {
    react: StatisticalMechanicsDerivation,
    path: "statistical_mechanics_derivation",
    title: "Statistical Mechanics"
  },
  {
    react: TimeEvolutionOperators,
    path: "time_evolution",
    title: "Time Evolution Operators In Physics"
  },
  {
    react: FokkerPlank,
    path: "fokker_plank",
    title: "Fokker Plank Equation"
  },
  {
    react: LangevinDynamics,
    path: "langevin_dynamics",
    title: "Langevin Dynamics In Hamiltonian Phase Space"
  },
    {
    react: IncompletenessTheorem,
    path: "incompleteness_theorem",
    title: "Godel's Incompleteness Theorem"
  },

];

export const SimulationGraphicsProjects = [
  {
    react: Schrödinger,
    path: "schrödinger",
    title: "Simulating Schrödinger Equation in 1 Dimension"
  },
  {
    react: MaxwellBoltzmann,
    path: "maxwell_boltzmann_distribution",
    title: "Ideal Gas Simulation and the Maxwell–Boltzmann Distribution"
  },
  {
    react: NavierStokes,
    path: "fluid_sim_navier_stokes",
    title: "Fluid Flow Simulation with the Navier-Stokes Equation"
  },
  {
    react: InterMolecularForce,
    path: "inter_molecular_forces",
    title: "Intermolecular forces condensation simulation"
  },
  {
    react: Icosahedron,
    path: "icosahedron",
    title: "Drawing and Lighting a Sphere by Recursive Segmentation of an Icosahedron"
  },
  {
    react: Mandelbrot,
    path: "mandelbrot",
    title: "Using a GPU to Draw the Mandelbrot Set"
  },
  {
    react: WaterMarbles,
    path: "water_marbles",
    title: "Liquid Simulation using Particles"
  },
  {
    react: Project2Body,
    path: "2body",
    title: "Closed Form Solution to the Two Body Problem"
  },
  {
    react: SphereReflectionTexture,
    path: "sphere_reflection_texture",
    title: "Apply Textures to 3D Surfaces"
  },
  {
    react: Planets,
    path: "planets",
    title: "Apply Textures to a Sphere"
  },
  {
    react: Fire,
    path: "fire",
    title: "Smoke and Fire Simulation"
  },
  {
    react: Jello,
    path: "jello",
    title: "Simulating Jello with Hooke's Law"
  },

];

export const HardwareProjects = [
  {
    react: PulseWidthModulation,
    path: "pulse_width_modulation",
    title: "PWM on a Raspberry Pi using direct hardware access"
  },
  {
    react: PhoneController,
    path: "phone_controller",
    title: "Controlling a Raspberry Pi with a Cell Phone"
  },
  {
    react: MotorPWM,
    path: "motor_pwm",
    title: "Motor Speed Control using Raspberry Pi PWM"
  },
  {
    react: KernelModuleEncoderDriver,
    path: "kernel_module_encoder_driver",
    title: "Linux Device Driver for a Motor Encoder"
  },
  {
    react: DeltaGcode,
    path: "delta_gcode",
    title: "Controlling a Delta-X Robot Arm with G-Code"
  },
  {
    react: Capstone,
    path: "capstone",
    title: "High School Capstone: A Robot for Sustainable Agriculture"
  },
  {
    react: SeedlingSegmentation,
    path: "seedling_segmentation",
    title: "Isolating and Segmenting Images of Seedlings"
  },
  {
    react: DepthPerception,
    path: "depth_perception",
    title: "Depth Perception in Images of Seedlings"
  },
  {
    react: SeedlingTensorflow,
    path: "seedlings_tensorflow",
    title: "Deep Learning with TensorFlow and Keras to Classify Seedlings"
  },


];

export const AllProjectsList = MathProjects.concat(SimulationGraphicsProjects).concat(HardwareProjects);

function MenuList() {
  return <div>
	   <h2>Derivations</h2>
	   <ol>{
      
	     MathProjects.map((project, index) => 
               <li key={index}>
		 <h3>
		   <a href={`/projects/${project.path}`}>
		     {project.title}
		   </a>
		 </h3>
		 <hr />
               </li>
	     )
	   }</ol>
	   <h2>Simulations and WebGL</h2>
	   <ol>{
      	     SimulationGraphicsProjects.map((project, index) => 
               <li key={index}>
		 <h3>
		   <a href={`/projects/${project.path}`}>
		     {project.title}
		   </a>
		 </h3>
		 <hr />
               </li>
	     )
	   }</ol>
	   <h2>High School</h2>
	   <ol>{
	     HardwareProjects.map((project, index) => 
               <li key={index}>
		 <h3>
		   <a href={`/projects/${project.path}`}>
		     {project.title}
		   </a>
		 </h3>
		 <hr />
               </li>
	     )
	   }</ol>
	 </div>;
}

export default MenuList;
