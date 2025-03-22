import s from "./style.module.css";

export default function Menu() {
  return (
    <div className={s.container}>
      <div className={s.column}>
        <span>Sobre</span>
        <a href="#">Institucional</a>
        <a href="#">Estatuto Social / Regulamento</a>
        <a href="#">Resuloções</a>
        <a href="#">IDSS</a>
        <a href="#">Notícias</a>
        <a href="#">Galeria de Mídias</a>
        <a href="#">Política de Privacidade - LGPD CAURN</a>
        <a href="#">Termos e Condições</a>
      </div>
      <div className={s.column}>
        <span>Planos</span>
        <a href="#">CAURN Flex</a>
        <a href="#">CAURN Essencial</a>
        <a href="#">Classe A</a>
      </div>
      <div className={s.column}>
        <span>Associados</span>
        <a href="#">Serviços Online</a>
        <a href="#">Orientações sobre atendimento</a>
        <a href="#">Convênios - Reciprocidade e Uniodonto</a>
        <a href="#">Atenção Primária à Saúde - APS CAURN</a>
        <a href="#">Casa CAURN</a>
        <a href="#">Programa de Bem com a Vida</a>
        <a href="#">Atualização Cadastral</a>
        <a href="#">Formulários</a>
        <a href="#">Dúvidas Frequentes</a>
      </div>
      <div className={s.column}>
        <span>Prestadores</span>
        <a href="#">Serviços Online</a>
        <a href="#">Formulários TISS/TUSS</a>
        <a href="#">Atualização Cadastral</a>
      </div>
      <div className={s.column}>
        <span>Contato</span>
        <a href="#">Fale Conosco / Endereços</a>
        <a href="#">Ouvidoria</a>
        <a href="#">Canal de licitude</a>
      </div>
      <div className={s.column}>
        <span>Associe-se a CAURN</span>
        <a href="#">Seja CAURN</a>
        <a href="#">Associe-se Agora</a>
      </div>
    </div>
  );
}
