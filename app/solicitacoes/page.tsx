import Sidebar from "../../components/Sidebar/Sidebar"
import SolicitacaoLista from "../../components/Solicitacoes/solicitacoes"
import styles from "@/styles/Home.module.css"

export default function PaginaSolicitacoes() {
  return (
    <div className={styles.container}>
     <Sidebar/>
      <main className={styles.main}>
        <h1 className={styles.title}>SOLICITAÇÕES</h1>
        <hr className={styles.linha}></hr>  
        <SolicitacaoLista />
        </main>
      </div>
  )
}