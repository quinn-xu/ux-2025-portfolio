import styles from "./styles.module.css"

export default function NavigationItem({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["work"]} href="./#works">
        <div className={styles["title-3"]}>
          <p className={styles["p-4"]}>{slots[0] ?? "Work"}</p>
        </div>
        <div className={styles["wave"]}>
          <div className={styles["div-8"]} />
        </div>
      </a>
  )
}
