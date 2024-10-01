/* eslint-disable @typescript-eslint/no-explicit-any */

import { produtos } from "@/core"

export default function PaginaProduto(props: any){
    const id = +props.params.id
    const produto = produtos.find((produto: any) => produto.id === id)
    return(
        <div>
            <h1>{produto.nome}</h1>
        </div>
    )
}