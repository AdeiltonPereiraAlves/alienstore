import { Produto, produtos } from "@/core";
import ProdutoItem from "./ProdutoItem";
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado";


export default function ListaProdutos() {
    return produtos.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-5 mt-36">
            {produtos.map((produto: Produto) => (
                <ProdutoItem produto={produto} key={produto.id} />
            ))}
        </div>
    ) : (
        <ProdutoNaoEncontrado semBotaoVoltar />
    )
}