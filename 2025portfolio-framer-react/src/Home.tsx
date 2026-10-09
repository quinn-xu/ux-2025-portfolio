import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"
import TopBar from "./TopBar"
import Logo from "./Logo"
import Navigation from "./Navigation"
import NavigationItem from "./NavigationItem"
import ThemeToggle from "./ThemeToggle"
import Phosphor from "./Phosphor"
import ColorCycle from "./ColorCycle"
import Home2 from "./Home2"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-71"]}>
        <div className={styles["div-72"]}>
          <div className={styles["div-73"]}>
            <div className={styles["div-74"]}>
              <div className={styles["div-73"]}>
                <TopBar slots={["https://framerusercontent.com/images/xlIRd6e7BdowiCdsvRCB5cJ48I.png?scale-down-to=512","Work","About","Resume"]} />
              </div>
            </div>
          </div>
          <div className={styles["sections-2"]}>
            <div className={styles["header-3"]}>
              <div className={styles["tagline-2"]}>
                <div className={styles["container-10"]}>
                  <div className={styles["headline-3"]}>
                    <div className={styles["hello"]}>
                      <div className={styles["div-75"]}>
                        <div className={styles["div-73"]}>
                          <div className={styles["div-65"]}>
                            <div className={styles["variant-1-4"]}>
                              <div className={styles["div-66"]}>
                                <div className={styles["div-67"]}>
                                  <h1 className={styles["h1-2"]}>{slots[0] ?? "Hello there, I am Quinn Xu"}</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-76"]}>
                      <div className={styles["div-73"]}>
                        <div className={styles["div-77"]}>
                          <h2 className={styles["h2-2"]}>
                            {"a product designer "}
                            <br className={styles["br-2"]} />
                            {"passionate about designs that"}
                            <br className={styles["br-2"]} />
                            <span className={styles["span-4"]}>{slots[1] ?? "drive business success"}</span>
                            <span className={styles["br-2"]}>{slots[2] ?? "and"}</span>
                            <div className={styles["span-5"]}>
                              <br className={styles["span-5"]} />
                            </div>
                            <span className={styles["span-6"]}>{slots[3] ?? "make people's life easier"}</span>
                          </h2>
                        </div>
                      </div>
                      <div className={styles["smiley"]}>
                        <div className={styles["div-78"]}>
                          <img className={styles["img-8"]} src={slots[4] ?? "https://framerusercontent.com/images/jFox9bBbzlCGvD7fgHazYedU7yQ.png"} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["dots-n-selected-project-2"]}>
                <div className={styles["div-79"]}>
                  <div className={styles["div-28"]}>
                    <ColorCycle slots={[]} />
                  </div>
                  <div className={styles["div-28"]}>
                    <ColorCycle slots={[]} />
                  </div>
                  <div className={styles["div-28"]}>
                    <ColorCycle slots={[]} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["projects-2"]}>
              <div className={styles["div-73"]}>
                <div className={styles["div-80"]}>
                  <a className={styles["cinematic-left"]} href="./rice">
                    <div className={styles["div-81"]}>
                      <div className={styles["container-11"]}>
                        <div className={styles["image-2"]}>
                          <div className={styles["container-12"]}>
                            <div className={styles["image-1-4"]}>
                              <div className={styles["div-82"]}>
                                <img className={styles["img-9"]} src={slots[5] ?? "https://framerusercontent.com/images/UympF4hijPBQTZPbNUba5u1YCk.png?scale-down-to=512"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info-4"]}>
                          <div className={styles["div-83"]}>
                            <div className={styles["title-6"]}>
                              <div className={styles["rice-app-3"]}>
                                <p className={styles["p-19"]}>{slots[6] ?? "Rice App"}</p>
                              </div>
                              <div className={styles["div-84"]}>
                                <Phosphor slots={[]} />
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california-2"]}>
                              <p className={styles["p-20"]}>{slots[7] ?? "From 0 to 1, orchestrated a restaurant deal & coupon app partnered with over 100 small business owners in California"}</p>
                            </div>
                          </div>
                          <div className={styles["div-85"]}>
                            <div className={styles["3-tags"]}>
                              <div className={styles["div-86"]}>
                                <div className={styles["div-87"]}>
                                  <div className={styles["line"]}>
                                    <div className={styles["div-88"]}>
                                      <div className={styles["0-to-1-9"]}>
                                        <p className={styles["p-21"]}>{slots[8] ?? "0 TO 1"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-89"]} />
                                <div className={styles["div-90"]}>
                                  <div className={styles["line-2"]}>
                                    <div className={styles["div-91"]}>
                                      <div className={styles["0-to-1-10"]}>
                                        <p className={styles["p-22"]}>{slots[9] ?? "LAUNCHED"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-92"]} />
                                <div className={styles["div-93"]}>
                                  <div className={styles["blank-9"]}>
                                    <div className={styles["div-94"]}>
                                      <div className={styles["0-to-1-11"]}>
                                        <p className={styles["p-23"]}>{slots[10] ?? "PRODUCT DESIGN"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles["div-73"]}>
                <div className={styles["div-80"]}>
                  <a className={styles["cinematic-right"]} href="./lafitness">
                    <div className={styles["div-81"]}>
                      <div className={styles["container-11"]}>
                        <div className={styles["image-3"]}>
                          <div className={styles["container-12"]}>
                            <div className={styles["image-1-4"]}>
                              <div className={styles["div-82"]}>
                                <img className={styles["img-9"]} src={slots[11] ?? "https://framerusercontent.com/images/glieqsBo0IlSlv6js5JSS9w220.png?scale-down-to=512"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info-5"]}>
                          <div className={styles["div-95"]}>
                            <div className={styles["title-6"]}>
                              <div className={styles["rice-app-4"]}>
                                <p className={styles["p-24"]}>{slots[12] ?? "LA Fitness"}</p>
                              </div>
                              <div className={styles["div-84"]}>
                                <Phosphor slots={[]} />
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california-3"]}>
                              <p className={styles["p-25"]}>{slots[13] ?? "Redefined user journey to ensure key features are one tap away"}</p>
                            </div>
                          </div>
                          <div className={styles["div-96"]}>
                            <div className={styles["3-tags"]}>
                              <div className={styles["div-86"]}>
                                <div className={styles["div-97"]}>
                                  <div className={styles["line-3"]}>
                                    <div className={styles["div-98"]}>
                                      <div className={styles["0-to-1-12"]}>
                                        <p className={styles["p-26"]}>{slots[14] ?? "PROTOTYPE"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-89"]} />
                                <div className={styles["div-99"]}>
                                  <div className={styles["blank-10"]}>
                                    <div className={styles["div-100"]}>
                                      <div className={styles["0-to-1-13"]}>
                                        <p className={styles["p-27"]}>{slots[15] ?? "INFORMATION ARCHITECTURE"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles["div-73"]}>
                <div className={styles["div-80"]}>
                  <a className={styles["cinematic-left"]} href="./web-revamp">
                    <div className={styles["div-81"]}>
                      <div className={styles["container-13"]}>
                        <div className={styles["image-4"]}>
                          <div className={styles["container-14"]}>
                            <div className={styles["image-1-5"]}>
                              <div className={styles["div-101"]}>
                                <img className={styles["img-10"]} src={slots[16] ?? "https://framerusercontent.com/images/CwW9ctGIwdR3I0SumkrPEGvcAE.png?scale-down-to=512"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info-4"]}>
                          <div className={styles["div-83"]}>
                            <div className={styles["title-6"]}>
                              <div className={styles["rice-app-5"]}>
                                <p className={styles["p-28"]}>{slots[17] ?? "Web Revamp"}</p>
                              </div>
                              <div className={styles["div-84"]}>
                                <Phosphor slots={[]} />
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california-2"]}>
                              <p className={styles["p-20"]}>{slots[18] ?? "Streamlined lead screening process for a realtor's website while Improving the online presence"}</p>
                            </div>
                          </div>
                          <div className={styles["div-85"]}>
                            <div className={styles["3-tags"]}>
                              <div className={styles["div-86"]}>
                                <div className={styles["div-102"]}>
                                  <div className={styles["line-4"]}>
                                    <div className={styles["div-103"]}>
                                      <div className={styles["0-to-1-14"]}>
                                        <p className={styles["p-29"]}>{slots[19] ?? "RESPONSIVE"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-89"]} />
                                <div className={styles["div-104"]}>
                                  <div className={styles["blank-11"]}>
                                    <div className={styles["div-105"]}>
                                      <div className={styles["0-to-1-15"]}>
                                        <p className={styles["p-30"]}>{slots[20] ?? "CLIENT HAND OFF"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["div-106"]}>
            <div className={styles["div-51"]} />
          </div>
          <div className={styles["div-73"]}>
            <div className={styles["div-107"]}>
              <div className={styles["footer-clean"]}>
                <div className={styles["container-7"]}>
                  <div className={styles["div-53"]} />
                  <div className={styles["div-54"]}>
                    <div className={styles["div-55"]}>
                      <div className={styles["div-56"]}>
                        <div className={styles["p-17"]}>
                          {"Let's connect, collab and create "}
                          <span className={styles["span-2"]}>{slots[21] ?? "𖠚"}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-57"]}>
                      <div className={styles["div-58"]}>
                        <div className={styles["icon"]}>
                          <div className={styles["div-59"]}>
                            <div className={styles["div-60"]}>
                              <a className={styles["desktop-2"]} href="https://www.linkedin.com/in/quinnxxu/">
                                <div className={styles["div-61"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </a>
                            </div>
                            <div className={styles["div-60"]}>
                              <a className={styles["desktop-2"]} href="mailto:quinn.qinxu@gmail.com">
                                <div className={styles["div-61"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </a>
                            </div>
                            <div className={styles["div-60"]}>
                              <a className={styles["desktop-2"]} href="https://www.instagram.com/quinnxtonic">
                                <div className={styles["div-61"]}>
                                  <Phosphor slots={[]} />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-62"]}>
                      <div className={styles["div-63"]}>
                        <div className={styles["p-18"]}>
                          {"© Quinn Xu 2025"}
                          <br className={styles["br"]} />
                          {"Built with emotional support water bottle"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Home2 slots={[]} />
      </div>
      <div className={styles["div-69"]}>
        <SvgGraphic className={styles["svg-3"]} html={"<svg viewBox=\"0 0 14 14\" id=\"svg11934025868\" data-f2c-idx=\"267\"><path d=\"M 4.564 4.505 L 5.383 3.622 L 9.824 4.466 L 10.663 8.994 L 9.824 9.857 L 8.909 5.406 Z M 3.744 9.799 L 8.719 4.812 L 9.5 5.675 L 4.545 10.663 Z\" fill=\"var(--token-73eb122e-396c-4af7-805a-012bb8cc6b3a, rgb(147, 151, 163))\" data-f2c-idx=\"268\"></path></svg>"} />
      </div>
      <div className={styles["div-70"]}>
        <span className={styles["span-3"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"272\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"273\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
