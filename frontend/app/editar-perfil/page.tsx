"use client";

import Sidebar from "../../components/Sidebar/Sidebar";
import EditarPerfilCard from "../../components/Editar-perfil/EditarPerfilCard";
import styles from "../../styles/Home.module.css";

export default function EditarPerfilPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>EDITAR O PERFIL</h1>
        <hr className={styles.linha} />

        {/* Card separado apenas para o formulário */}
        <div className={styles.cards}>
          <EditarPerfilCard />
        </div>
      </main>
    </div>
  );
}
