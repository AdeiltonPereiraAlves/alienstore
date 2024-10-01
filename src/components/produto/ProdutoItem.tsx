'use client'


import { Moeda, Produto } from "@/core"
import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props;
    return (
        <Link href={`/produto/${produto.id}`} className="flex flex-col bg-zinc-100 border border-white/10 rounded-sm">

            <div className="w-full h-48 relative">
                <Image src={produto.imagem} fill className="object-contain" alt="Imagem do Produto" />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
                <span className=" text-zinc-600 text-lg font-semibold">{produto.nome}</span>
                <div className="self-start text-sm border-b border-dashed">
                    {produto.especificacoes.destaque}
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold line-through ">
                        De {Moeda.formatar(produto.precoBase)}
                    </span>
                    <span className=" text-xl font-semibold text-emerald-400">
                        Por   {Moeda.formatar(produto.precoPromocional)}
                    </span>
                    {/* <span>
                        {parcelamento}
                    </span> */}
                    <button className=" flex justify-center gap-2 h-8 bg-green-600 items-center rounded-sm hover:bg-green-500"
                        onClick={(e) => {
                            e.preventDefault()
                            console.log("Add carrinho")
                        }}>
                        <IconShoppingCartPlus size={20} className="text-white" />
                        <span className="text-white">Adiconar</span>
                    </button>
                </div>
            </div>

        </Link>
    )
}