import { useEffect, useState } from "react";
import "./App.css";

function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const [coords, setCoords] = useState({ x: -25, y: -25 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCoords({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      setCoords({ x: -25, y: -25 });
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "#09f",
          opacity: 0.8,
          pointerEvents: "none",
          transform: `translate(${coords.x}px, ${coords.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}
function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle follow mouse component
      </button>
    </main>
  );
}

export default App;
