'use client'


import { Moeda, Produto } from "@/core";
import useParcelamento from "@/data/hooks/useParcelamento";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
// import { useRouter } from "next/router";

export interface BannerCompraProps {
    produto: Produto
}

export default function BannerCompra(props: BannerCompraProps) {
    // const router = useRouter()
    const { produto } = props;
    const parcelamento = useParcelamento(produto.precoPromocional, 12)
    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500  ">
                <div className="line-through text-zinc-400 px-2"> de R$ {produto?.precoBase} </div>
                <div className="text-2xl font-semibold px-2">
                    <span className="text-base text-zinc-600 "> por </span>{' '}
                    <span className="text-emerald-500" > R$ {produto?.precoPromocional}</span>
                    <span className="text-base text-zinc-600"> à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-xl font-semibold text-zinc-600 pl-5 ">
                <span className="text-base text-zinc-600">{parcelamento.qtdeParcelas} x de </span>
                {Moeda.formatar(parcelamento.valorParcelado)}{''}
            </div>
            <div className="flex gap-2 items-center">
                <button className="flex-1 button bg-pink-600 hover:bg-pink-500"
                // onClick={()=> adicionarProduto(produto)}
                >
                    <IconShoppingCart />
                    <span>Adicionar</span>
                </button>
                <button className="flex-1 button bg-green-500 hover:bg-green-400"
                    onClick={() => {
                        // adicionarItem(produto)
                        // router.push('/checkout/pagamento')
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Comprar</span>
                </button>

            </div>
        </div>
    )
}