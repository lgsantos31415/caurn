import Image from "next/image";

import Button from "@/components/button";

import s from "./styles.module.css";

export default function Vida() {
  return (
    <div className={s.container}>
      <div className={s.column}>
        <Image
          src="/assets/vida-logo.png"
          width={136}
          height={64}
          alt="Logo APS"
        />
        <p>
          Criado em 2003, o Programa De Bem com a Vida nasceu com o foco em
          melhorar a qualidade de vida dos associados acima de 60 (sessenta)
          anos da CAURN e ainda controlar a diabetes e hipertensão, com o
          intuito de proporcionar um acompanhamento integral da saúde, com uma
          equipe multiprofissional.
        </p>
        <Button>SABER MAIS</Button>
      </div>
      <div className={s.image}>
        <Image src="/assets/vida.jpg" fill alt="Casal" />
      </div>
    </div>
  );
}
