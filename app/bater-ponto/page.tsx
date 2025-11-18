"use client";

import Sidebar from "../../components/relatorio/Sidebar";
import styles from "../../styles/Home.module.css";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import TimerIcon from '@mui/icons-material/Timer';
import Link from "next/link";   
import BaterPontoCard from "../../components/Bater-ponto/BaterPontoCard";
import PontoCardlist from "../../components/Bater-ponto/PontoCardlist"; 
import Relogio from "./Relogio";



export default function BaterPonto() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.cards}>


          <BaterPontoCard 
          />
          
        </div>
        
        <PontoCardlist
        />
       
      </main>
    </div>
  );
}
