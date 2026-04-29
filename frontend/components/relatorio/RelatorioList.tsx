"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./RelatorioList.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const registros = [
  { data: "04/11/2025 | Terça-feira", dia: "terça-feira", HorasExtras: "00:00", HorasFaltantes: "00:00", Saldo: "00:00" },
  { data: "03/11/2025 | Segunda-feira", dia: "segunda-feira", HorasExtras: "00:00", HorasFaltantes: "00:00", Saldo: "00:00" },
  { data: "02/11/2025 | Sábado", dia: "sabado", HorasExtras: "00:00", HorasFaltantes: "00:00", Saldo: "00:00" },
  { data: "03/11/2025 | Sexta-feira", dia: "sexta-feira", HorasExtras: "00:00", HorasFaltantes: "00:00", Saldo: "00:00" },
  { data: "02/11/2025 | Quinta-feira", dia: "quinta-feira", HorasExtras: "00:00", HorasFaltantes: "00:00", Saldo: "00:00" },
];

export default function RelatorioList() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={styles.cardlist}>
      {registros.map((item, i) => (
        <div key={i}>
          
          {/* Linha principal */}
          <div className={styles.row}>
            <span>{item.data}</span>
            <span>Horas Extras: {item.HorasExtras}</span>
            <span>Horas Faltantes: {item.HorasFaltantes}</span>
            <span>Saldo: {item.Saldo}</span>

            <button
              className={styles.button}
              onClick={() => toggle(i)}
            >
              <KeyboardArrowDownIcon
                className={`${styles.icon} ${openIndex === i ? styles.rotate : ""}`}
              />
            </button>
          </div>

          {/* SlideDown */}
          <div className={`${styles.slide} ${openIndex === i ? styles.open : ""}`}>
            

            <div className={styles.bannerGestor}>
              <span>Deseja realizar alguma solicitação para seu gestor?</span>
              <button
                className={styles.botaoAjuste}
                onClick={() => router.push("/ajustar-ponto")} // ← botão ajustável
              >
                Ajuste
              </button>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
}