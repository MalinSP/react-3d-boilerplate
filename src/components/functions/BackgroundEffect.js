import { Effect } from 'postprocessing'

const fragmentShader = /* glsl */ `

#define NUM_OCTAVES 5

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}

float fbm(vec2 x) {
	float v = 0.0;
	float a = 0.5;
	vec2 shift = vec2(100);
	// Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
	for (int i = 0; i < NUM_OCTAVES; ++i) {
		v += a * noise(x);
		x = rot * x * 2.0 + shift;
		a *= 0.5;
	}
	return v;
}

  

    vec4 rgb(float r, float g, float b) {
    return vec4(r/255.0, g / 255.0, b / 255.0, 1.0 );
}


    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)
    {    
         vec4 color1 = rgb(255.0, 243.0, 226.0);
         vec4 color2 = rgb(255.0, 139.0, 94.0);

        float grain = mix(-0.05, 0.05, rand(uv));

         color1 += fbm(2. * uv + time * 0.25);
         color1 += grain;

         vec4 c = mix(
          color1,
          color2 + 0.05 * rand(uv),
          2.0 * (uv.x+ uv.y)
         );
         vec4 color = vec4(vec3(inputColor+ c) , 1.0);
         outputColor = color;
    }
`

export default class BackgroundEffect extends Effect {
  constructor() {
    super('BackgroundEffect', fragmentShader)
  }
}
