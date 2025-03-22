import Image from "next/image";

import Button from "@/components/button";

import s from "./styles.module.css";

export default function Casa() {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <Image src="/casa.jpg" alt="Pessoas" fill />
      </div>
      <div className={s.column}>
        <Image src="/casa-logo.png" width={136} height={64} alt="Logo APS" />
        <p>
          Como forma de dar mais comodidade ao nosso associado, a CAURN
          disponibiliza um espaço exclusivo para atendimento e para as
          atividades do Programa De Bem com a Vida.
        </p>
        <Button>SABER MAIS</Button>
      </div>
    </div>
  );
}
