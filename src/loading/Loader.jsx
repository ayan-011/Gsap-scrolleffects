import gsap from "gsap";

function Loader() {
  return (
    <div
      id="loader"
      className="fixed inset-0 z-[50] flex items-center justify-center bg-black text-white"
    >
      <h1 className="text-2xl tracking-widest">LOADING…</h1>
    </div>
  );
}

export default Loader;
