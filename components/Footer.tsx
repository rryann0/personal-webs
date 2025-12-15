"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-[clamp(20px,6vw,60px)] py-[22px] md:pb-10 text-[#6b7a8f] flex justify-between items-center gap-3 flex-wrap border-t border-[rgba(45,95,127,0.2)] bg-[rgba(255,255,255,0.5)] backdrop-blur-md">
      <div>© {year} Ryan Lee</div>
    </footer>
  );
}

