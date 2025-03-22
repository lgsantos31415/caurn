import Image from "next/image";

import {
  PiFacebookLogoFill,
  PiInstagramLogo,
  PiYoutubeLogoFill,
  PiWhatsappLogo,
  PiPhoneFill,
  PiCaretDownBold,
} from "react-icons/pi";

import s from "./styles.module.css";

export default function Header() {
  return (
    <header className={s.container}>
      <Image src="/logo.png" width={190} height={50} alt="Logo" />

      <div className={s.right}>
        <div className={s.row}>
          <div className={s.wrapper}>
            <a href="#" className={s.a}>
              <PiFacebookLogoFill />
            </a>
            <a href="#" className={s.a}>
              <PiInstagramLogo />
            </a>
            <a href="#" className={s.a}>
              <PiYoutubeLogoFill />
            </a>
          </div>
          <a href="#" className={s.a}>
            Central de atendimento: <PiPhoneFill /> (84) 3311-3665
          </a>
          <a href="#" className={s.a}>
            Serviços: <PiWhatsappLogo /> (84) 3311-3650
          </a>
        </div>
        <div className={s.row}>
          <a href="#" className={s.list}>
            SOBRE A CAURN
            <PiCaretDownBold />
          </a>
          <a href="#" className={s.list}>
            PLANOS
            <PiCaretDownBold />
          </a>
          <a href="#" className={s.list}>
            ASSOCIADOS
            <PiCaretDownBold />
          </a>
          <a href="#" className={s.list}>
            PRESTADORES
            <PiCaretDownBold />
          </a>
          <a href="#" className={s.list}>
            CONTATO
            <PiCaretDownBold />
          </a>
          <a href="#" className={s.list}>
            ASSOCIE-SE À CAURN
            <PiCaretDownBold />
          </a>
        </div>
      </div>
    </header>
  );
}
