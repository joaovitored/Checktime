"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RelatorioCard from "../../components/relatorio/RelatorioCard";
import RelatorioList from "../../components/relatorio/RelatorioList";
import styles from "@/styles/Home.module.css";

export default function RelatorioPage() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} />

      <main
        className={styles.main}
        style={{
          marginLeft: isMinimized ? "80px" : "280px",
          transition: "margin-left 0.3s ease",
        }}
      >
        <h1 className={styles.title}>RELATÓRIO</h1>
        <hr className={styles.linha} />

        <div className={styles.cards}>
          <RelatorioCard
            title="Horas Trabalhadas"
            value="40h"
            subValue="Semana Atual"
          />
          <RelatorioCard title="Atrasos" value="3" subValue="Este mês" />
          <RelatorioCard
            title="Horas Extras"
            value="5h"
            subValue="Semana Atual"
          />
          <RelatorioCard title="Faltas" value="1" subValue="Total" />
        </div>

        <RelatorioList />
      </main>
    </div>
  );
}
