import styles from './RelatorioList.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const registros = [
    {data: "04/11/2025|terça-feira", dia: "terça-feira", HorasExtras: "00:00", HorasFaltantes: "00:00",Saldo: "00:00"},
    {data: "03/11/2025|segunda-feira", dia: "segunda-feira", HorasExtras: "00:00", HorasFaltantes: "00:00",Saldo: "00:00"},
    {data: "02/11/2025|sabado", dia: "sabado", HorasExtras: "00:00", HorasFaltantes: "00:00",Saldo: "00:00"},
    {data: "03/11/2025|sexta-feira", dia: "sexta-feira", HorasExtras: "00:00", HorasFaltantes: "00:00",Saldo: "00:00"},
    {data: "02/11/2025|quinta-feira", dia: "quinta-feira", HorasExtras: "00:00", HorasFaltantes: "00:00",Saldo: "00:00"},
];
export default function RelatorioList() {
    return(
        <div className={styles.cardlist}>
            {registros.map((item, i) => (
                <div key={i} className={styles.row}>
                    <span>{item.data}</span>
                    <span>HorasExtras: {item.HorasExtras} </span>
                    <span>HorasFaltantes: {item.HorasFaltantes} </span>
                    <span>Saldo: {item.Saldo} <button className={styles.button}><KeyboardArrowDownIcon /></button></span>
                </div>  
            ))}
        </div>
    );
}   
