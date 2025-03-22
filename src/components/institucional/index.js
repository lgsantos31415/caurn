import Image from "next/image";

import Button from "@/components/button";

import s from "./styles.module.css";

export default function Institucional() {
  return (
    <div className={s.container}>
      <div className={s.column}>
        <h1>Institucional</h1>
        <p>
          A CAURN – CAIXA ASSISTENCIAL UNIVERSITÁRIA DO RIO GRANDE DO NORTE –
          iniciou suas atividades em 1998, mas sua história começou a ser
          contada alguns anos antes. O plano nasceu a partir de uma iniciativa
          do então Reitor da UFRN, Prof. Ivonildo Rêgo. A ideia inicial era
          buscar uma alternativa para melhorar a assistência médica dos
          servidores e seus dependentes.
        </p>
        <Button>SABER MAIS</Button>
      </div>
      <div className={s.image}>
        <Image src={"/assets/institucional.jpeg"} fill />
      </div>
    </div>
  );
}
