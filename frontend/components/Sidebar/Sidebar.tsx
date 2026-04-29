"use client";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/navigation";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FeedIcon from '@mui/icons-material/Feed';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar() {
  const router = useRouter();
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <aside 
      className={`${styles.sidebar} ${isMinimized ? styles.minimized : ''}}`}
      style={{ width: isMinimized ? '80px' : '280px' }}
      onClick={() => setIsMinimized(!isMinimized)}
    >
      
      {!isMinimized && (
        <div onClick={(e)=>{e.stopPropagation();
          router.push("/editar-perfil")}} className={styles.profileimg}>
          
          <div className={styles.profile}>
          <img
          src="/follow.png"
          alt="User"
          width={100}
          height={100}
          className="rounded-full border-2"
        />
        </div>
          <div>
            <p className="font-semibold text-lg">Samuel Batista</p>
            <p className="text-sm text-gray-200">Analista TI</p>
          </div>
        </div>
      )}
      
      <nav className={styles.nav}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/bater-ponto");
          }}
          className={styles.button}
          style={{ justifyContent: isMinimized ? 'center' : 'flex-start' }}
          title="Bater Ponto"
        >
          <TimerOutlinedIcon className="mr-3" />
          {!isMinimized && "Bater Ponto"}
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            router.push("relatorio-page");
          }}
          className={styles.button}
          style={{ justifyContent: isMinimized ? 'center' : 'flex-start' }}
          title="Relatórios"
        >
          <FeedIcon className="mr-3" />
          {!isMinimized && "Relatórios"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/solicitacoes");
          }}
          className={styles.button}
          style={{ justifyContent: isMinimized ? 'center' : 'flex-start' }}
          title="Solicitações"
        >
          <WavingHandIcon className="mr-3" />
          {!isMinimized && "Solicitações"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push("/ponto-espelho");
          }}
          className={styles.button}
          style={{ justifyContent: isMinimized ? 'center' : 'flex-start' }}
          title="Ponto Espelho"
        >
          <CalendarMonthIcon className="mr-3" />
          {!isMinimized && "Ponto Espelho"}
        </button>
       
      </nav>
    
      <nav className={styles.nav2}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push("/");
        }}
        className={styles.logout}
        style={{ justifyContent: isMinimized ? 'center' : 'flex-start' }}
        title="Sair"
      >
        <LogoutIcon className="mr-3" />
        {!isMinimized && "Sair"}
      </button>
     </nav>
    </aside>
  );
}