import ListaProdutos from "@/components/produto/ListaProdutos";

import Pagina from "@/components/template/Pagina";


export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-col container gap-5 py-10 flex-1">
        <ListaProdutos />
      </div>
    </Pagina>
  );
}
