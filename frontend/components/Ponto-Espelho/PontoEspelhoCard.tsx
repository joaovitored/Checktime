"use client";

import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "@/styles/Home.module.css";
import ponto from "@/components/Ponto-Espelho/PontoEspelho.module.css";

export default function RelatorioPage() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.main}>

        <div style={{ position: "relative", marginBottom: "30px" }}>
        <h1 className={styles.title}>PONTO ESPELHO</h1>
        <hr className={ponto.tituloLinha} />

        <div className={ponto.mesBotao}>Outubro de 2025</div>
        </div>
        
        <div className={ponto.containerResumo}>
          <div className={ponto.resumoLinha}>
            <span>Dias trabalhados:</span>
            <span>22</span>
          </div>
          <div className={ponto.resumoLinha}>
            <span>Horas totais:</span>
            <span>176h</span>
          </div>
          <div className={ponto.resumoLinha}>
            <span>Horas extras:</span>
            <span>4h</span>
          </div>
          <div className={ponto.resumoLinha}>
            <span>Banco de horas:</span>
            <span>+1h40</span>
          </div>
        </div>

        
        <div className={ponto.tableWrapper}>
          <table className={ponto.table} style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Data</th>
                <th>Entrada</th>
                <th>Saída</th>
                <th>Total</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, i) => (
               <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td className={ponto.tableText}>XX/10</td>
                <td className={ponto.tableText}>08:00</td>
                <td className={ponto.tableText}>17:00</td>
                <td className={ponto.tableText}>08:00</td>
                <td className={`${ponto.ok} ${ponto.tableText}`}>OK</td>
              </tr>

              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
