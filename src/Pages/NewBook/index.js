import React from "react";
import "./style.css";

export default function NewBook() {
    return (
        <body>
            <header className="header">
                <h3>Sistema de avaliação de livros</h3>
            </header>
            <main>
                <div className="container">
                    <h1>Novo Livro</h1>
                    <div className="secao-form">
                        <form className="form">
                           <input type="text" placeholder="Título" />
                           <input type="text" placeholder="Autor" />
                           <input type="text" placeholder="Descrição" />
                           <input placeholder="Genero" />
                           <input type="text" placeholder="ISBN" />
                           <input type="text" placeholder="Editora" />
                           <input type="text" placeholder="Ano da pulicação" />
                           <input type="number" placeholder="Numero de paginas" />
                        </form>
                    </div>

                </div>
            </main>
            <footer className="footer">
                <h3>Desenvolvido por: Fabio dos Santos</h3>
            </footer>
        </body>

    );
}