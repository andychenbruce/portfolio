#version 300 es

precision highp float;

uniform uint fragEnum;
uint ENUM_FLOOR = 0u;
uint ENUM_BLACK = 1u;
uint ENUM_WHITE = 2u;
uint ENUM_RED = 3u;
uint ENUM_GREEN = 4u;
uint ENUM_BLUE = 5u;
uint ENUM_CYAN = 6u;
uint ENUM_MAGENTA = 7u;
uint ENUM_YELLOW = 8u;

uniform vec3 lightPos;
uniform mat4 cameraMatrix;

in vec3 model_pos;
in vec3 world_pos;
out vec4 outColor;

float AMBIENT_BRIGHTNESS = 0.4;
float DIFFUSE_BRIGHTNESS = 0.6;


float diffuse_reflect_factor(){
  vec3 dir = vec3(lightPos) - vec3(world_pos);
  float cosine = dot(normalize(dir), normalize(vec3(model_pos)));
  float cf = clamp((AMBIENT_BRIGHTNESS * cosine) + DIFFUSE_BRIGHTNESS, 0.0, 1.0);
  return cf;
}

float specular_reflect_factor(){
  vec3 camera_pos = vec3(inverse(cameraMatrix) * vec4(0.0, 0.0, 0.0, 1.0));
  vec3 incident = -(camera_pos - vec3(world_pos));
  vec3 optimal_dir = normalize(reflect(incident, normalize(vec3(model_pos))));
  vec3 light_dir = normalize(lightPos - vec3(world_pos));
  float cos = dot(optimal_dir, light_dir);
  float shinyness = 5.0;
  float factor = pow(clamp(cos, 0.0, 1.0), shinyness);
  return factor;
}

vec4 make_spectral(vec3 base_color){
  vec4 regular_color = vec4(diffuse_reflect_factor() * base_color, 1.0);
  vec4 light_color = vec4(1.0, 1.0, 1.0, 1.0);
  float specular_factor = specular_reflect_factor();
  return (specular_factor * light_color) + ((1.0-specular_factor) * regular_color);
}

void main() {
  if(fragEnum == ENUM_FLOOR){
    bool x = (int(floor(model_pos.x*2.0)) % 2) == 0;
    bool z = (int(floor(model_pos.z*2.0)) % 2) == 0;
    if(x != z){
      outColor = vec4(0.9, 0.9, 0.9, 1.0);
    }else{
      outColor = vec4(0.6, 0.4, 0.8, 1.0);
    }
  }else if(fragEnum == ENUM_BLACK){
    outColor = vec4(0.0, 0.0, 0.0, 1.0);
  }else if(fragEnum == ENUM_WHITE){
    outColor = vec4(1.0, 1.0, 1.0, 1.0);
  }else if(fragEnum == ENUM_RED){
    outColor = make_spectral(vec3(1.0, 0.0, 0.0));
  }else if(fragEnum == ENUM_GREEN){
    outColor = make_spectral(vec3(0.0, 1.0, 0.0));
  }else if(fragEnum == ENUM_BLUE){
    outColor = make_spectral(vec3(0.0, 0.0, 1.0));
  }else if(fragEnum == ENUM_CYAN){
    outColor = make_spectral(vec3(0.0, 1.0, 1.0));
  }else if(fragEnum == ENUM_MAGENTA){
    outColor = make_spectral(vec3(1.0, 0.0, 1.0));
  }else if(fragEnum == ENUM_YELLOW){
    outColor = make_spectral(vec3(1.0, 1.0, 0.0));
  }else{
    outColor = vec4(model_pos, 1.0);
  }
}
