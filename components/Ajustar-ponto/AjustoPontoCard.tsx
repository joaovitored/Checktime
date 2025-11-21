"use client";
import { useState } from "react";
import styles from "./AjustoPontoCard.module.css";

export default function AjustoPontoCard() {
    
    
  const [arquivoNome, setArquivoNome] = useState("Nenhum arquivo selecionado");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setArquivoNome(file.name);
  };

  return (
    <div className={styles.container}>
     

      <div className={styles.card}>
        <h1 className={styles.titulo}>AJUSTE DE PONTO</h1>

        <div className={styles.linha}></div>

        <label className={styles.label}>
          Data:
          <input type="date" className={styles.input} />
          
        </label>

        
        <label className={styles.label}>
          Horário:
          <input type="time" className={styles.input} />
        </label>

        
        <label className={styles.label}>
          Tipo:
        </label>

        <div className={styles.tipoContainer}>
          <label className={styles.radioLabel}>
            <input type="radio" name="tipo" />
            Entrada
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="tipo" />
            Saída
          </label>
        </div>

        
        <label className={styles.label}>
          Justificativa:
        </label>

        <textarea
          className={styles.textarea}
          placeholder="Digite aqui a justificativa..."
        />

        
        <label className={styles.label}>Anexo:</label>

        <div className={styles.anexoContainer}>
          <label className={styles.botaoArquivo}>
            ESCOLHER ARQUIVO
            <input type="file" onChange={handleFile} />
          </label>

          <span className={styles.arquivoTexto}>
            {arquivoNome}
          </span>
        </div>

        {/* BOTÃO SOLICITAR */}
        <button className={styles.botaoSolicitar}>SOLICITAR</button>

        {/* VOLTAR */}
        <button className={styles.botaoVoltar}>VOLTAR</button>
      </div>
    </div>
  );
}
