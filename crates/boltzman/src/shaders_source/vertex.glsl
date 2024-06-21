#version 300 es

uniform mat4 perspectiveMatrix;
uniform mat4 cameraMatrix;
uniform mat4 modelMatrix;

in vec3 position;
out vec3 model_pos;
out vec3 world_pos;

void main() {
  model_pos = position;
  world_pos = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = perspectiveMatrix * cameraMatrix * modelMatrix * vec4(position, 1.0);
}
