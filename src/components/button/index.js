import s from "./styles.module.css";

export default function Button({ children, ...rest }) {
  return (
    <button className={s.container} {...rest}>
      {children}
    </button>
  );
}
