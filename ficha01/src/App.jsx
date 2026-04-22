import { useState } from "react";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const estilos = {
    backgroundColor: temaEscuro ? "#"
  return(
    <main>
      <h1>Hello lindinios!</h1>
      <p>O Pedro é....</p>
    </main>
  );
}

export default App;