import styles from './BaterPontoCardlist.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const registros = [
  {
    periodos: [
      { data: "04/11/2025", Entrada: "08:00", Saida: "11:30" },
      { data: "04/11/2025", Entrada: "11:31", Saida: "13:00" },
      { data: "04/11/2025", Entrada: "13:01", Saida: "17:00" },
      {Termino: "00:00"},
      {Horas: "-10:00"}
    ],
  },
];

export default function PontoCardlist() {
  return (
    <div className={styles.cardscontainer}>
      

      <div className={styles.cardlist}>
        <h2 className={styles.titulo}>Batidas do dia</h2>
        <div className={styles.headercontainer}>
          <div className={styles.header}>
            <span>Data</span>
            <span>Entrada</span>
            <span>Saída</span>
          </div>
        </div>

        <div className={styles.linha}></div>

        {registros.map((item, i) => (
          <div key={i} className={styles.tabela}>
            {item.periodos.map((p, j) => (
              <div key={j} className={styles.linhaPeriodo}>
                <span>{p.data}</span>
                <span>{p.Entrada}</span>
                <span>{p.Saida}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

     
      <div className={styles.cardlist2}>
        <div className={styles.header2}>
          <span className={styles.texto3}>
            Sua Jornada Diária Termina Em: 00:00
          </span>
          <div className={styles.linha}></div>
          <span className={styles.texto3}>Seu Banco De Horas: -10:00</span>
          <div className={styles.linha}></div>
        </div>
      </div>
    </div>
  );
}

