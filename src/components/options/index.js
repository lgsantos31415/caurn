import s from "./styles.module.css";

import {
  FaHospital,
  FaHouseMedical,
  FaLocationDot,
  FaStethoscope,
  FaSuitcaseMedical,
} from "react-icons/fa6";

export default function Options() {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <FaHospital />
        <span>REDE CAURN</span>
      </div>
      <div className={s.item}>
        <FaStethoscope />
        <span>MÉDICOS</span>
      </div>
      <div className={s.item}>
        <FaHouseMedical />
        <span>CLÍNICAS</span>
      </div>
      <div className={s.item}>
        <FaSuitcaseMedical />
        <span>ESPECIALIDADES</span>
      </div>
      <div className={s.item}>
        <FaLocationDot />
        <span>LOCAIS</span>
      </div>
    </div>
  );
}
