import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export default function NightSky() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fpsLimit: 60,
    particles: {
      number: { value: 60 },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: { min: 0.1, max: 0.5 } },
      move: { enable: true, speed: 0.3 },
    },
    detectRetina: true,
  }), []);

  return init && <Particles options={options} className="absolute inset-0 z-0" />;
}
