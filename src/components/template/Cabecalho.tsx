import IconeCarrinho from "../shared/IconeCarrinho";
import Logo from "../shared/Logo";

export default function Cabecalho(){
    return (
        <div className="bg-[#222222]  w-full  flex justify-between items-center container">
           <Logo/>
           <IconeCarrinho qtdeItens={0}/>
        </div>
    )
}