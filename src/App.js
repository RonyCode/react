import React from "react";

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];
const teste = produtos.map((item) => item.preco.replace("R$ ", ",").split(","));
console.log(teste);

function App() {
  return (
    <div>
      {produtos.map((item) => item.preco.replace("R$ ", ",").split(","))}

      <h1>Smartphone </h1>
      <p>Preço R$ 2000</p>
      <div
        style={{
          backgroundColor: "#29d8d5",
          width: "900px",
          height: "30px",
          color: "#fff",
          marginBottom: "10px",
        }}
      >
        #29d8d5
      </div>
      <div
        style={{
          backgroundColor: "#252a34",
          width: "900px",
          height: "30px",
          color: "#fff",
          marginBottom: "10px",
        }}
      >
        #252a34
      </div>
      <div
        style={{
          backgroundColor: "#fc3766",
          width: "900px",
          height: "30px",
          color: "#fff",
          marginBottom: "10px",
        }}
      >
        #fc3766
      </div>
    </div>
  );
}

export default App;
