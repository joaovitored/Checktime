import styles from '../relatorio/RelatorioList.module.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

const registros = [
    {data: "02/10/2025|quinta-feira", dia: "quinta-feira", Ajuste_Aprovado: "Ajuste Aprovado"},
    {data: "11/09/2025|quinta-feira", dia: "quinta-feira", Pendente:"Pendente"},
    {data: "06/08/2025|quarta-feira", dia: "quarta-feira", Pendente:"Pendente"},
    {data: "17/06/2025|terça-feira", dia: "terça-feira",   Ajuste_Aprovado:"Ajuste Aprovado"},
    {data: "19/03/2025|quarta-feira", dia: "quarta-feira", Ajuste_Aprovado: "Ajuste Aprovado"},
    
];
export default function RelatorioList() {
    return(
        <div className={styles.cardlist}>
            {registros.map((item, i) => (
               <div key={i} className={styles.card}>
                    <div className={styles.row2}>
                       <span><ForumRoundedIcon/>{item.data}</span>

                        {item.Ajuste_Aprovado && (
                            <h3 className={styles.aprovado}>{item.Ajuste_Aprovado}</h3>
                        )}

                        {item.Pendente && (
                            <h3 className={styles.pendente}>
                                {item.Pendente}
                                <ArrowForwardIosOutlinedIcon/>
                            </h3>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}   