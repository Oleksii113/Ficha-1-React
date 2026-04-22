import { useState } from "react";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const estilos = {
    minHeight: "100vh",
    backgroundColor: temaEscuro ? "#1f2937" : "#f3f4f6",
    color: temaEscuro ? "#f9fafb" : "#111827",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome) return;
    setNome(nome);
  };

  return (
    <main style={estilos}>
      <h1>Hello lindinios!</h1>
      <p>O Pedro é....</p>
      <buttton onClick={() => setTemaEscuro(!temaEscuro)}>
        Mudar Tema
      </buttton>
      <p>Ola {nome}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escreve o teu nome"
          value={nome}
          onChange={(event) => setHome(event.target.value)}
        ></input>
      </form>
    </main>
  );
}

export default App; 