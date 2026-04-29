import { useState, useEffect } from "react";
import styles from "./BaterPontoCard.module.css";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Relogio from "../../app/bater-ponto/Relogio";

export default function BaterPontoCard() {
  const [jaBateuPonto, setJaBateuPonto] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");
  const [somSucesso, setSomSucesso] = useState<HTMLAudioElement | null>(null);
  const [somErro, setSomErro] = useState<HTMLAudioElement | null>(null);

  // Cria os sons apenas no cliente
  useEffect(() => {
    setSomSucesso(new Audio("https://www.myinstants.com/media/sounds/deltarune-ominous-cancel.mp3"));
    setSomErro(new Audio("https://www.myinstants.com/media/sounds/deltarune-ominous-sound.mp3"));
  }, []);

  const handleClick = () => {
    if (!jaBateuPonto) {
      somSucesso?.play();
      setJaBateuPonto(true);
      setMensagem("Ponto registrado com sucesso!");
      setTipoMensagem("sucesso");
    } else {
      somErro?.play();
      setMensagem("Você já registrou o ponto.");
      setTipoMensagem("erro");
    }
    setTimeout(() => {
      setMensagem("");
      setTipoMensagem("");
    }, 3000);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBackground}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.389088930866!2d-34.8732622249921!3d-8.061735291965936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18a48f26183d%3A0x6a9ebfb27ba8f98d!2sPra%C3%A7a%20Rio%20Branco%20-%20Recife%2C%20PE%2C%2050030-230!5e0!3m2!1spt-BR!2sbr!4v1763494571286!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className={styles.overlayContent}>
            <div className={styles.button2}>
              <Relogio />
            </div>
            <button className={styles.button} onClick={handleClick}>
              <TimerOutlinedIcon className="mr-0" />
              Registrar
            </button>
          </div>
        </div>
      </div>

      {mensagem && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "12px",
            fontWeight: "600",
            fontSize: "1.1rem",
            color: tipoMensagem === "sucesso" ? "#16a34a" : "#dc2626",
          }}
        >
          {mensagem}
        </div>
      )}
    </>
  );
}
