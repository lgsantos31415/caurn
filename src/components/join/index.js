import Button from "@/components/button";

import s from "./styles.module.css";

export default function Join() {
  return (
    <div className={s.container}>
      <h1>ASSOCIE-SE À CAURN</h1>
      <p>
        Para fazer parte da CAURN, basta ser servidor ativo ou inativo da UFRN,
        IFRN e da UFERSA, bem como <br /> das entidades vinculadas (FUNPEC,
        SINTEST, ADURN, CREDSUPER, SINASEFE, ASCEFETRN, AFURN).
      </p>
      <Button>ENVIAR MENSAGEM</Button>
    </div>
  );
}
