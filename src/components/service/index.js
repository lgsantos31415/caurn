import { FaMagnifyingGlass } from "react-icons/fa6";

import s from "./styles.module.css";

export default function Service() {
  return (
    <div className={s.container}>
      <div className={s.column}>
        <h1>REDE DE ATENDIMENTO</h1>
        <p>
          Encontre aqui seu Médico, Clínica ou Hospital, por nome, local ou
          especialidade
        </p>
      </div>
      <div className={s.row}>
        <div className={s.input}>
          <FaMagnifyingGlass />
          <input type="text" placeholder="Digite o que você procura" />
          <select name="select" id="select">
            <option>REDE CAURN</option>
            <option>MÉDICOS</option>
            <option>CLÍNICAS</option>
            <option>ESPECIALIDADES</option>
            <option>LOCAIS</option>
          </select>
        </div>
        <button>BUSCAR</button>
      </div>
    </div>
  );
}
