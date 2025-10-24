import React, { useState } from "react";

function Registrar({ produtos, setProdutos }) {
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    imagem: "",
  });

  const handleAdd = () => {
    if (!novoProduto.nome || !novoProduto.preco) {
      alert("Preencha todos os campos!");
      return;
    }

    const novo = {
      id: produtos.length + 1,
      nome: novoProduto.nome,
      preco: parseFloat(novoProduto.preco),
      imagem: novoProduto.imagem || "https://via.placeholder.com/150",
    };

    setProdutos([...produtos, novo]);
    setNovoProduto({ nome: "", preco: "", imagem: "" });
    alert("Produto adicionado com sucesso!");
  };

  return (
    <div className="carrinho">
      <h3>Registrar Novo Produto</h3>
      <input
        type="text"
        placeholder="Nome do produto"
        value={novoProduto.nome}
        onChange={(e) =>
          setNovoProduto({ ...novoProduto, nome: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Preço"
        value={novoProduto.preco}
        onChange={(e) =>
          setNovoProduto({ ...novoProduto, preco: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="URL da imagem (opcional)"
        value={novoProduto.imagem}
        onChange={(e) =>
          setNovoProduto({ ...novoProduto, imagem: e.target.value })
        }
      />
      <button onClick={handleAdd}>Salvar Produto</button>
    </div>
  );
}

export default Registrar;
