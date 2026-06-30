import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

/**
 * Ambient floating particle field (WebGL / ogl).
 * Drifting, additive-blended dust — the immersive "activetheory" backdrop.
 * Pauses while off-screen; caller should skip render for reduced-motion.
 */
interface ParticlesProps {
  count?: number;
  colors?: string[];
  spread?: number;
  baseSize?: number;
  speed?: number;
  className?: string;
}

const hexToRgb = (hex: string): [number, number, number] => {
  let h = hex.replace("#", "");
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  const n = parseInt(h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const VERT = `
attribute vec3 position;
attribute vec3 random;
attribute vec3 color;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSpread;
uniform float uBaseSize;
varying vec3 vColor;
void main() {
  vColor = color;
  vec3 pos = position * uSpread;
  float t = uTime;
  pos.x += sin(t * random.z + random.x * 6.2831) * 0.7;
  pos.y += cos(t * random.y + random.z * 6.2831) * 0.7;
  pos.z += sin(t * random.x + random.y * 6.2831) * 0.7;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = uBaseSize * (random.x + 0.4) / max(-mv.z, 0.001);
  gl_Position = projectionMatrix * mv;
}
`;

const FRAG = `
precision highp float;
varying vec3 vColor;
void main() {
  vec2 uv = gl_PointCoord.xy - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(vColor, a * 0.85);
}
`;

export default function Particles({
  count = 320,
  colors = ["#22d3ee", "#3b6dff", "#8b5cf6", "#f65b9c"],
  spread = 11,
  baseSize = 90,
  speed = 0.12,
  className = "",
}: ParticlesProps) {
  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({ alpha: true, antialias: true, depth: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    ctn.appendChild(gl.canvas);
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    const camera = new Camera(gl, { fov: 28 });
    camera.position.set(0, 0, 14);

    const resize = () => {
      const w = ctn.offsetWidth;
      const h = ctn.offsetHeight;
      renderer.setSize(w, h);
      camera.perspective({ aspect: w / Math.max(h, 1) });
    };
    window.addEventListener("resize", resize);
    resize();

    // Build attributes
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 3);
    const colorArr = new Float32Array(count * 3);
    const palette = colors.map(hexToRgb);
    for (let i = 0; i < count; i++) {
      // point in a unit-ish sphere
      let x: number, y: number, z: number, len: number;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random()], i * 3);
      const c = palette[Math.floor(Math.random() * palette.length)];
      colorArr.set(c, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 3, data: randoms },
      color: { size: 3, data: colorArr },
    });

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: spread },
        uBaseSize: { value: baseSize },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let raf = 0;
    let running = true;
    const start = performance.now();
    const update = () => {
      if (!running) return;
      raf = requestAnimationFrame(update);
      const elapsed = (performance.now() - start) * 0.001;
      program.uniforms.uTime.value = elapsed * speed * 8;
      particles.rotation.y = elapsed * speed * 0.5;
      particles.rotation.x = Math.sin(elapsed * speed * 0.3) * 0.12;
      renderer.render({ scene: particles, camera });
    };
    raf = requestAnimationFrame(update);

    // Pause when tab hidden / scrolled away
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(update);
        } else if (!e.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(ctn);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      if (gl.canvas.parentNode === ctn) ctn.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [count, spread, baseSize, speed, colors]);

  return <div ref={ctnDom} className={`h-full w-full ${className}`} />;
}
