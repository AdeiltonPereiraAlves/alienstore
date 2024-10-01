import { IconDevicesPcOff } from "@tabler/icons-react";
import Link from "next/link";

export interface ProdutoNaoEncontradoProps {
    semBotaoVoltar?: boolean
}

export default function ProdutoNaoEncontrado(props: ProdutoNaoEncontradoProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center ">
            <IconDevicesPcOff size={180} stroke={0.5}  />
            <span>Produtos não encontrados</span>
            {!props.semBotaoVoltar && (
                <Link href="/" className="button bg-green-400">
                    Voltar
                </Link>
            )}
        </div>
    )
}