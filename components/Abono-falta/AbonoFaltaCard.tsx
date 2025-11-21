"use client";

import { useState } from "react";
import styles from "./AbonoFaltaCard.module.css";

export default function AbonoFaltaCard() {
  const [arquivoNome, setArquivoNome] = useState("Nenhum arquivo selecionado");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setArquivoNome(file.name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>ABONO DE FALTA</h1>

        <div className={styles.linha}></div>

        {/* DATA */}
        <label className={styles.label}>Data:</label>
        <div className={styles.dataContainer}>
          <input className={styles.inputPequeno} type="text" placeholder="Dia" />
          <input className={styles.inputPequeno} type="text" placeholder="Mês" />
          <input className={styles.inputPequeno} type="text" placeholder="Ano" />
        </div>


        {/* JUSTIFICATIVA */}
        <label className={styles.label}>Justificativa:</label>

        <textarea
          className={styles.textarea}
          placeholder="Digite aqui a justificativa de abono de falta..."
        />

        {/* ANEXO */}
        <label className={styles.label}>Anexo:</label>
        
        <div className={styles.anexoContainer}>
          <label className={styles.botaoArquivo}>
            ESCOLHER ARQUIVO
            <input type="file" onChange={handleFile} />
          </label>
          <span className={styles.arquivoTexto}>{arquivoNome}</span>
        </div>


        {/* BOTÕES */}
        <button className={styles.botaoSolicitar}>SOLICITAR</button>
        <button className={styles.botaoVoltar}>VOLTAR</button>
      </div>
    </div>
  );
}
