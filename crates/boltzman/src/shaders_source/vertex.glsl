#version 300 es

uniform mat4 perspectiveMatrix;
uniform mat4 cameraMatrix;
uniform mat4 modelMatrix;

in vec3 position;
out vec4 mPosition;

void main() {
  mPosition = vec4(position, 1.0);
  gl_Position = perspectiveMatrix * cameraMatrix * modelMatrix * vec4(position, 1.0);
}
