import React from "react";

import Project2Body from "../pages/projects/2body.js";
import Boltzman from "../pages/projects/boltzman_distribution.js";
import Capstone from "../pages/projects/capstone.js";
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
import SphereShadows from "../pages/projects/sphere_shadows.js";
import WaterMarbles from "../pages/projects/water_marbles.js";


export const ProjectsList = [
  {
    react: Capstone,
    path: "capstone",
    title: "Capstone: A Robot for Sustainable Agriculture"
  },
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
  {
    react: Mandelbrot,
    path: "mandelbrot",
    title: "Using a GPU to Draw the Mandelbrot Set"
  },
  {
    react: Icosahedron,
    path: "icosahedron",
    title: "Drawing a Sphere by Recursive Segmentation of an Icosahedron"
  },
  {
    react: SphereShadows,
    path: "sphere_shadows",
    title: "Lighting and Shadows in a 3D Scene"
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
  {
    react: Boltzman,
    path: "boltzman_distribution",
    title: "Ideal Gas Simulation and Boltzmann's Law"
  },
  {
    react: WaterMarbles,
    path: "water_marbles",
    title: "Liquid Simulation using Particles"
  },
  {
    react: NavierStokes,
    path: "fluid_sim_navier_stokes",
    title: "Fluid Flow Simulation with the Navier-Stokes Equation"
  },
  {
    react: Project2Body,
    path: "2body",
    title: "Closed Form Solution to the Two Body Problem"
  },
  {
    react: InterMolecularForce,
    path: "inter_molecular_forces",
    title: "Intermolecular forces condensation simulation"
  },
];

function MenuList() {
  return (
    <h3>
      <ol>{
	ProjectsList.map((project, index) => 
          <li key={index}>
            <a href={`/projects/${project.path}`}>
              {project.title}
            </a>
            <hr />
          </li>
	)
      }</ol>
    </h3>
  );
}

export default MenuList;
