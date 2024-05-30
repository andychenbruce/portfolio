#version 410 core
//#version 300 es // Use this for WebAssembly

// A fragment shader implementation for drawing the
// Mandelbrot Set.

precision mediump float; // Use medium precision (32 bit)

in vec3 mPosition;  //input position
out vec4 fragColor; //output RGBA color

vec3
mandelbrot(vec3 mpos)
{
  float x = 1.5 * mpos.x - 0.7;
  float y = 1.5 * mpos.y;
  float zi = 0.0;
  float zr = 0.0;
  int count;
  const int maxCount = 100;
  for (count = 0; count < maxCount; ++count) {
    float zr0 = zr;
    zr = zr*zr - zi*zi + x;
    zi = 2.0*zr0*zi + y;
    float a = zr*zr + zi* zi;
    if (a >= 4.0) {
      break;
    }
  }

  // From here on is just coloring

  float H = float(count) * (360.0/float(maxCount)); //hue, scaled betwee 0 to 360
  float S = 1.0; // saturation
  float V = 1.0; // value

  // HSV to RGB

  float C = V*S;
  float Hp = H/60.0;
  float oddPart = Hp - 2.0*floor(Hp/2.0); // mod 2
  float X = C*(1.0-abs(oddPart-1.0));

  vec3 rgb;
  if ((0.0 <= Hp) && (Hp < 1.0)) {
    rgb = vec3(C, X, 0);
  } else if ((1.0 <= Hp) && (Hp < 2.0)) {
    rgb = vec3(X, C, 0);
  } else if ((2.0 <= Hp) && (Hp < 3.0)) {
    rgb = vec3(0, C, X);
  } else if ((3.0 <= Hp) && (Hp < 4.0)) {
    rgb = vec3(0, X, C);
  } else if ((4.0 <= Hp) && (Hp < 5.0)) {
    rgb = vec3(X, 0, C);
  } else if ((5.0 <= Hp) && (Hp < 6.0)) {
    rgb = vec3(C, 0, X);
  } else {
    rgb = vec3(0, 0, 0); // Black when count == 100
  }
  float m = V-C;
  return rgb + vec3(m, m, m);
}

void
main()
{
  vec3 f3 = mandelbrot(mPosition);
  fragColor = vec4(f3.rgb, 1); // Set opacity to 1.0
}
