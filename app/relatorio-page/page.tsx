"use client";

import Sidebar from "../../components/relatorio/Sidebar";
import RelatorioCard from "../../components/relatorio/RelatorioCard";
import RelatorioList from "../../components/relatorio/RelatorioList";
import styles from "@/styles/Home.module.css";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import TimerIcon from '@mui/icons-material/Timer';
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function RelatorioPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>Relatório de Ponto</h1>
        <hr className={styles.linha}></hr>

       <div className={styles.cards}>
      <RelatorioCard
        title="Horas Trabalhadas"
        value="40h"
        subValue="Semana Atual"
        icon={<WorkHistoryIcon fontSize="large" />}
      />
      <RelatorioCard
        title="Atrasos"
        value="3"
        subValue="Este mês"
        icon={<AccessAlarmIcon fontSize="large" />}
      />
      <RelatorioCard
        title="Horas Extras"
        value="5h"
        subValue="Semana Atual"
        icon={<TimerIcon fontSize="large" />}
      />
      <RelatorioCard
        title="Faltas"
        value="1"
        subValue="Total"
        icon={<WorkOffIcon fontSize="large" />}
      />
      
    </div>  
        <RelatorioList />
      </main>
    </div>
    
  );
}
