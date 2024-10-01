/* eslint-disable @typescript-eslint/no-explicit-any */

import BannerCompra from "@/components/produto/BannerCompra"
import InformacoesProduto from "@/components/produto/InformacoesProdutos"
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado"
import TituloProduto from "@/components/produto/TituloProduto"
import { produtos } from "@/core"

export default function PaginaProduto(props: any) {
    const id = +props.params.id
    const produto = produtos.find((produto: any) => produto.id === id)
    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
            </div>


        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}