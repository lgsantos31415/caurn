import s from "./styles.module.css";

import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Options from "@/components/options";
import Service from "@/components/service";
import Institucional from "@/components/institucional";
import Join from "@/components/join";
import News from "@/components/news";
import Aps from "@/components/aps";
import Vida from "@/components/vida";
import Casa from "@/components/casa";
import Apps from "@/components/apps";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <div className={s.container}>
      <Header />
      <Carousel />
      <Options />
      <Service />
      <Institucional />
      <Join />
      <News />
      <Aps />
      <Vida />
      <Casa />
      <Apps />
      <Menu />
    </div>
  );
}
