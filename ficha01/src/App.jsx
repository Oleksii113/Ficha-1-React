import { useState } from "react";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [nome, setNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [nomes, setNomes] = useState([]);
  const estilos = {
    minHeight: "100vh",
    backgroundColor: temaEscuro ? "#1f2937" : "#f3f4f6",
    color: temaEscuro ? "#f9fafb" : "#111827",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome) return;
    setNome(nome);
    setNomes((nomesAnteriores) => [...nomesAnteriores, nome]);
    setNome("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ultimoNome) return;
    setNome(ultimoNome);
    setNomes((nomesAnteriores) => [...nomesAnteriores, ultimoNome]);
    setNome("");
  };

  return (
    <main style={estilos}>
      <h1>Hello lindinios!</h1>
      <p>O Pedro é....</p>
      <button onClick={() => setTemaEscuro(!temaEscuro)}>
        Mudar Tema
      </button>
      <p>Ola {nome}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escreve o teu nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        ></input>
         <input
          type="text"
          placeholder="Escreve o teu ultimo nome"
          value={ultimoNome}
          onChange={(event) => setUltimoNome(event.target.value)}
        ></input>
        <button type="submit">Adicionar</button>
      </form>
      <h2>A bela da lista de nomes</h2>
      <ul>
        {nomes.map((nomeAtual, index) => (
          <li>{nomeAtual}</li>
        ))}
      </ul>
    </main>
  );
}

export default App; 