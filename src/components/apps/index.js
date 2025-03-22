import Image from "next/image";

import s from "./styles.module.css";

export default function Apps() {
  return (
    <div className={s.container}>
      <div className={s.column}>
        <h1>BAIXE O APLICATIVO CAURN DIGITAL</h1>
        <p>
          Tenha acesso à 2ª via de boleto, carteirinha virtual, extratos de
          utilização, guia médico, dados pessoais, e muito mais.
        </p>
        <div className={s.row}>
          <Image
            width={142}
            height={46}
            src="/assets/appstore.png"
            alt="App Store"
          />
          <Image
            width={142}
            height={46}
            src="/assets/googleplay.png"
            alt="Google Play Store"
          />
        </div>
      </div>
      <div className={s.image}>
        <Image
          fill
          src="/assets/mobile.png"
          style={{ objectFit: "contain" }}
          alt="Smartphone"
        />
      </div>
    </div>
  );
}
