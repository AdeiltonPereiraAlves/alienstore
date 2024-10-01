import ProdutoItem from "@/components/produto/ProdutoItem";
import Pagina from "@/components/template/Pagina";
import { Produto, produtos } from "@/core";

export default function Home() {
  return (
    <Pagina>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-5 mt-36">

        {produtos.map((produto: Produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>

    </Pagina>
  );
}
