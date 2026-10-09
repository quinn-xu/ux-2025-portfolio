import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Navigation({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop"]}>
        <div className={styles["div-7"]}>
          <a className={styles["work"]} href="./#works">
            <div className={styles["title"]}>
              <p className={styles["p"]}>{slots[0] ?? "Work"}</p>
            </div>
            <div className={styles["wave"]}>
              <div className={styles["div-8"]} />
            </div>
          </a>
        </div>
        <div className={styles["div-7"]}>
          <a className={styles["about"]} href="./about">
            <div className={styles["title-2"]}>
              <p className={styles["p-2"]}>{slots[1] ?? "About"}</p>
            </div>
            <div className={styles["wave"]}>
              <div className={styles["div-8"]} />
            </div>
          </a>
        </div>
        <div className={styles["div-9"]}>
          <a className={styles["variant-1-2"]} href="https://drive.google.com/file/d/17eouJ23lEHKL8tlH80-4wjtcp8nlloaL/view?usp=sharing">
            <div className={styles["div-10"]}>
              <p className={styles["p-3"]}>{slots[2] ?? "Resume"}</p>
            </div>
            <div className={styles["arrow"]}>
              <div className={styles["div-11"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" data-f2c-idx=\"34\"><use href=\"#svg11934025868\" data-f2c-idx=\"35\"></use></svg>"} />
              </div>
            </div>
            <div className={styles["div-12"]} />
          </a>
        </div>
      </nav>
  )
}
