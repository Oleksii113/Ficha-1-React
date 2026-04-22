import { useState } from "react";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const estilos = {
    backgroundColor: temaEscuro ? "#1f2937" : "#f3f4f6",
    color: temaEscuro ? "#f9fafb" : "#111827",
  };
  return(
    <main style={estilos}>
      <h1>Hello lindinios!</h1>
      <p>O Pedro é....</p>
      <buttton onClick={() => setTemaEscuro(!temaEscuro)}>
        Mudar Tema
      </buttton>
    </main>
  );
}

export default App; 