import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Phosphor({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-15"]}>
        <SvgGraphic className={styles["svg-2"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5)); color: var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5)); flex-shrink: 0;\" data-f2c-idx=\"42\"><g color=\"var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5))\" weight=\"fill\" data-f2c-idx=\"43\"><path d=\"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z\" data-f2c-idx=\"44\"></path></g></svg>"} />
      </div>
  )
}
