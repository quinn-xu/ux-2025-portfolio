import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function TopBar({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div"]}>
        <div className={styles["container"]}>
          <div className={styles["div-2"]}>
            <div className={styles["div-3"]}>
              <div className={styles["div-4"]}>
                <a className={styles["variant-1"]} href="./">
                  <div className={styles["image-26"]}>
                    <div className={styles["div-5"]}>
                      <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/xlIRd6e7BdowiCdsvRCB5cJ48I.png?scale-down-to=512"} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles["div-6"]}>
                <nav className={styles["desktop"]}>
                  <div className={styles["div-7"]}>
                    <a className={styles["work"]} href="./#works">
                      <div className={styles["title"]}>
                        <p className={styles["p"]}>{slots[1] ?? "Work"}</p>
                      </div>
                      <div className={styles["wave"]}>
                        <div className={styles["div-8"]} />
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-7"]}>
                    <a className={styles["about"]} href="./about">
                      <div className={styles["title-2"]}>
                        <p className={styles["p-2"]}>{slots[2] ?? "About"}</p>
                      </div>
                      <div className={styles["wave"]}>
                        <div className={styles["div-8"]} />
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-9"]}>
                    <a className={styles["variant-1-2"]} href="https://drive.google.com/file/d/17eouJ23lEHKL8tlH80-4wjtcp8nlloaL/view?usp=sharing">
                      <div className={styles["div-10"]}>
                        <p className={styles["p-3"]}>{slots[3] ?? "Resume"}</p>
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
              </div>
            </div>
            <div className={styles["div-13"]}>
              <a className={styles["lignt"]}>
                <div className={styles["div-14"]}>
                  <div className={styles["icon-1"]}>
                    <div className={styles["div-15"]}>
                      <SvgGraphic className={styles["svg-2"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5)); color: var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5)); flex-shrink: 0;\" data-f2c-idx=\"42\"><g color=\"var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5))\" weight=\"fill\" data-f2c-idx=\"43\"><path d=\"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z\" data-f2c-idx=\"44\"></path></g></svg>"} />
                    </div>
                  </div>
                  <div className={styles["icon-2"]}>
                    <div className={styles["div-15"]}>
                      <SvgGraphic className={styles["svg-2"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5)); color: var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5)); flex-shrink: 0;\" data-f2c-idx=\"47\"><g color=\"var(--token-cecefbc2-3137-4c31-97a2-c273c08d7ba5, rgba(0, 0, 0, 0.5))\" weight=\"fill\" data-f2c-idx=\"48\"><path d=\"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z\" data-f2c-idx=\"49\"></path></g></svg>"} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={styles["div-16"]} />
        </div>
      </div>
  )
}
