/* eslint-disable @typescript-eslint/no-explicit-any */

import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"

export interface PaginaProps{
    children: any
    className?: string
    semCabecalho?: boolean
    semRodape?: boolean
     
}

export default function Pagina(props: PaginaProps){
    return(
        <div className="flex flex-col min-h-screen">
             <div className="flex-1 flex flex-col w-screen ">
                <div className="w-full bg-[#222222]">{!props.semCabecalho && <Cabecalho/>}</div>
                <main className={`flex-1 flex flex-col ${props.className ?? ''}`}>{props.children}</main>
                {!props.semRodape && <Rodape/>}
             </div>
              
        </div>
    )
}