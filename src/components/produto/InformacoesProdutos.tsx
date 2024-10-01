import { Produto } from "@/core";
import Image from "next/image";
import Especificacoes from "./Especificacoes";
export interface InformacoesProdutoProps{
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps){
    const{produto} = props
    return produto? (
        <div className="flex items-center  rounded-xl p-5 bg-[#222222]">
            <div className="flex-1 relative flex justify-center h-96 ">
                <Image
                  src={produto.imagem!}
                  fill
                  className="object-contain p-7 "
                  alt="Imagem do Produto"
                  
                />
            </div>
                <Especificacoes produto={produto!}/>
        </div>
    ): null
}