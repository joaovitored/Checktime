import { ReactNode } from 'react';
import styles from './BaterPontoCard.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dividerClasses } from '@mui/material';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import Relogio from "../../app/bater-ponto/Relogio";

interface BaterPontoCardProps { 
  title: string;  
  value: string;
  subValue?: string;
  icon: ReactNode;
  
}

export default function BaterPontoCard() {
  return (
    
    <div className={styles.card}>
      <div
      className={styles.cardBackground}>
      <div className={styles.button2}>
          <Relogio/>
          </div>
          
        <button className={styles.button}>
            <TimerOutlinedIcon className="mr-0" />
            Registrar</button>
      </div>
    </div>
  )
}