import styles from "./styles.module.css"

export default function Logo({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["variant-1"]} href="./">
        <div className={styles["image-26"]}>
          <div className={styles["div-5"]}>
            <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/xlIRd6e7BdowiCdsvRCB5cJ48I.png?scale-down-to=512"} alt="" />
          </div>
        </div>
      </a>
  )
}
