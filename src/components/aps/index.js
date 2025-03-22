import Image from "next/image";

import Button from "@/components/button";

import s from "./styles.module.css";

export default function Aps() {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <Image src="/assets/aps.jpg" fill alt="Pessoas" />
      </div>
      <div className={s.column}>
        <Image
          src="/assets/aps-logo.png"
          width={136}
          height={64}
          alt="Logo APS"
        />
        <p>O que é a Atenção Primária à Saúde (APS)?</p>
        <p>
          É o primeiro nível de atenção em saúde e caracteriza-se por um
          conjunto de ações de saúde abrangentes e acessíveis que realiza um
          acompanhamento do associado ao longo da sua vida. Na sua essência, a
          APS cuida das pessoas e não apenas trata doenças ou condições
          específicas.
        </p>
        <Button>SABER MAIS</Button>
      </div>
    </div>
  );
}
