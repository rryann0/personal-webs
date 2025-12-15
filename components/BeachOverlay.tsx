"use client";

export function BeachOverlay() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#4a8fb8] via-[#4a8fb8] to-transparent opacity-30 animate-[wave-animation_8s_ease-in-out_infinite]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)] animate-[wave-shift_12s_linear_infinite]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-[#e8d5c0] opacity-40 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.05)_1px,transparent_1px),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:30px_30px,40px_40px]" />
      </div>
      <div className="fixed inset-0 pointer-events-none z-[2] opacity-30 mix-blend-multiply" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%270.05%27/%3E%3C/svg%3E')]" />
      </div>
    </>
  );
}

