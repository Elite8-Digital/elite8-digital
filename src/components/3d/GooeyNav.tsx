import React, { useRef, useEffect, useState } from "react";

type GooeyNavItem = {
  label: string;
  href: string;
};

type GooeyNavProps = {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  onNavigate?: (href: string) => void;
};

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 10,
  particleDistances = [60,8],
  particleR = 40,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  onNavigate,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const filterRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  // 🔹 Utility
  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance: number, pointIndex: number, totalPoints: number) => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  // 🔹 Particle animation
  const makeParticles = (element: HTMLElement) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      const particle = document.createElement("span");
      const point = document.createElement("span");

      particle.classList.add("particle");
      particle.style.setProperty("--start-x", `${p.start[0]}px`);
      particle.style.setProperty("--start-y", `${p.start[1]}px`);
      particle.style.setProperty("--end-x", `${p.end[0]}px`);
      particle.style.setProperty("--end-y", `${p.end[1]}px`);
      particle.style.setProperty("--time", `${p.time}ms`);
      particle.style.setProperty("--scale", `${p.scale}`);
      particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
      particle.style.setProperty("--rotate", `${p.rotate}deg`);

      point.classList.add("point");
      particle.appendChild(point);
      element.appendChild(particle);

      requestAnimationFrame(() => element.classList.add("active"));
      setTimeout(() => {
        if (element.contains(particle)) element.removeChild(particle);
      }, t);
    }
  };

  // 🔹 Update active effect
  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const left = pos.x - containerRect.x;
    const top = pos.y - containerRect.y;
    const width = pos.width;
    const height = pos.height;

    Object.assign(filterRef.current.style, {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    });
    Object.assign(textRef.current.style, {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    });
    textRef.current.innerText = element.innerText;
  };

  // 🔹 Click + keyboard
 const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
  const liEl = e.currentTarget;

  if (activeIndex === index) return;

  // 1️⃣ Update active index first
  setActiveIndex(index);

  // 2️⃣ Wait a frame so React updates the class before animating
  requestAnimationFrame(() => {
    updateEffectPosition(liEl);

    const filter = filterRef.current;
    const text = textRef.current;
    if (!filter || !text) return;

    // clear old particles
    filter.querySelectorAll(".particle").forEach((p) => p.remove());
    text.classList.remove("active");

    // force reflow
    void text.offsetWidth;
    text.classList.add("active");

    // trigger gooey animation
    makeParticles(filter);
    setTimeout(() => makeParticles(filter), 50);
  });

  // 3️⃣ After animation (400ms), force React repaint (color visible again)
  setTimeout(() => {
    const lis = navRef.current?.querySelectorAll("li") || [];
    lis.forEach((li, i) => {
      li.classList.toggle("active", i === index);
    });
  }, 400);
};

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement as HTMLLIElement | null;
      if (liEl) handleClick({ currentTarget: liEl } as any, index);
    }
  };

  // 🔹 Initial + resize
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi as HTMLElement);
      textRef.current?.classList.add("active");
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex];
      if (currentActiveLi) updateEffectPosition(currentActiveLi as HTMLElement);
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      {/* ✅ Scoped styles — only apply inside .gooey-nav */}
      <style>{`
        .gooey-nav {
          position: relative;
          isolation: isolate; /* prevent blending bleed */
          z-index: 20;
        }

        .gooey-nav .effect {
          position: absolute;
          pointer-events: none;
          display: grid;
          place-items: center;
          z-index: 1;
        }

        .gooey-nav .effect.text {
          color: white;
          transition: color 0.3s ease;
        }

        .gooey-nav .effect.text.active {
          color: white;
        }

        .gooey-nav .effect.filter {
          filter: blur(3px) contrast(500);
          mix-blend-mode: lighten;
        }

        .gooey-nav .particle,
        .gooey-nav .point {
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 60%;
          background: #ffffff;
          box-shadow:
            0 0 15px #ffffff,
            0 0 30px #ffffff,
            0 0 45px rgba(255, 255, 255, 1),
            0 0 60px rgba(255, 255, 255, 0.9);
        }

        .gooey-nav .particle {
          position: absolute;
          animation: particle var(--time) ease 1;
        }

        .gooey-nav .point {
          background: #ffffff;
          box-shadow:
            0 0 8px rgba(255, 255, 255, 0.9),
            0 0 16px rgba(255, 255, 255, 0.7),
            0 0 24px rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: point var(--time) ease 1;
        }

        @keyframes particle {
          0% { opacity: 1; transform: rotate(0deg) translate(var(--start-x), var(--start-y)); }
          100% { opacity: 0; transform: rotate(var(--rotate)) translate(var(--end-x), var(--end-y)); }
        }

        @keyframes point {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(var(--scale)); }
        }


.gooey-nav li button:hover {
  color: #666363ff; /* soft gray when hovered */
}

.gooey-nav li.active button {
  position: relative;
  z-index: 5; /* above .effect layers */
  color: #b3b3b3 !important; /* soft, visible grey */
  text-shadow: 0 0 8px rgba(179, 179, 179, 0.4);
}

.gooey-nav li button {
  position: relative;
  z-index: 4;
}

      `}</style>

      <div className="gooey-nav relative" ref={containerRef}>
        <nav
          className="flex relative"
          style={{ transform: "translate3d(0,0,0.01px)" }}
        >
          <ul
            ref={navRef}
            className="flex gap-8 list-none p-0 px-4 m-0 relative z-[3]"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`relative cursor-pointer text-white transition-all ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(e as any, index);
                    setTimeout(() => onNavigate?.(item.href), 400);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="outline-none py-[0.6em] px-[1em] inline-block bg-transparent border-none cursor-pointer text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Gooey overlays */}
        <span className="effect filter" ref={filterRef}></span>
        <span className="effect text" ref={textRef}></span>
      </div>
    </>
  );
};

export default GooeyNav;
