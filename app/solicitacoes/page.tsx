import Sidebar from "../../components/relatorio/Sidebar"
import SolicitacaoLista from "../../components/Bater-ponto/solicitacoes"

export default function PaginaSolicitacoes() {
  return (
    <div className="flex min-h-screen bg-gray-100">
     <Sidebar/>
      {/* Conteúdo principal */}
      <main className="flex-1 p-8 space-y-8">
        <h1 className="text-3xl font-bold text-green-900">Solicitações</h1>
        <SolicitacaoLista />
      </main>
    </div>
  )
}