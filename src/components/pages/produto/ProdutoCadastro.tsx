import React, { useState } from 'react';
import { Produto } from "../../../models/Produto";

function CadastroProduto() {
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [preco, setPreco] = useState<number>(0);
    const [quantidade, setQuantidade] = useState<number>(0);

    function handleSubmit (e: any) {
        e.preventDefault();

        const produto : Produto = {
            nome : nome,
            descricao : descricao,
            quantidade : Number(quantidade),
            preco : Number(preco)
        };


        fetch('http://localhost:5020/api/produto/cadastrar', 
        {
            method : "POST",
            headers : {
                'Content-Type': "application/json"
            },
            body : JSON.stringify(produto)
        })
            .then(resposta => {
                return resposta.json();
            })
            .then(produto => {
                console.log("Produto Cadastrado", produto)
            })
    };

    return (
        <div>
            <h2>Cadastrar Novo Produto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                </label>
                <label>
                    Preço:
                    <input type="number" value={preco} onChange={e => setPreco(Number(e.target.value))} required />
                </label>
                <label>
                    Quantidade:
                    <input type="number" value={quantidade} onChange={e => setQuantidade(Number(e.target.value))} required />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroProduto;