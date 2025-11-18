"use client";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/navigation";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FeedIcon from '@mui/icons-material/Feed';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className={`${styles.sidebar}`}>
      
        <div className={styles.profileimg}>
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
      
      <nav className={styles.nav}>
        <button
          onClick={() => router.push("/bater-ponto")}
          className={styles.button}
        >
          <TimerOutlinedIcon className="mr-3" />
          Bater Ponto
        </button>
        <button 
        onClick={() => router.push("relatorio-page")}
        className={styles.button}
          >
          <FeedIcon className="mr-3" />
          Relatórios
        </button>
        <button
          onClick={() => router.push("/solicitacoes")}
          className={styles.button}
        >
          <WavingHandIcon className="mr-3" />
          Solicitações
        </button>
        <button
          onClick={() => router.push("/ponto-espelho")}
          className={styles.button}
        >
          <CalendarMonthIcon className="mr-3" />
          Ponto Espelho
        </button>
        <button
          onClick={() => router.push("/ponto-espelho")}
          className={styles.button}
        >
          <RequestPageIcon className="mr-3" />
          Solicitar Abono
        </button>
      </nav>
    
      <nav className={styles.nav2}>
      <button
      onClick={() => router.push("/")}
      className={styles.logout}>
        
        <LogoutIcon className="mr-3" />
        Sair
      </button>
     </nav>
    </aside>
  );
}
