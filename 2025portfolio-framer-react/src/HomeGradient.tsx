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

export default function HomeGradient({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-108"]}>
        <div className={styles["div-109"]}>
          <div className={styles["div-21"]}>
            <TopBar slots={["https://framerusercontent.com/images/xlIRd6e7BdowiCdsvRCB5cJ48I.png?scale-down-to=512","Work","About","Resume"]} />
          </div>
          <div className={styles["sections-3"]}>
            <div className={styles["header-4"]}>
              <div className={styles["tagline-3"]}>
                <div className={styles["container-15"]}>
                  <div className={styles["headline-4"]}>
                    <div className={styles["hello"]}>
                      <div className={styles["div-75"]}>
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
                    <div className={styles["div-110"]}>
                      <div className={styles["div-111"]}>
                        <h2 className={styles["h2-3"]}>
                          {"a product designer passionate about designs that "}
                          <span className={styles["span-7"]}>{slots[1] ?? "drive business success"}</span>
                          {"and "}
                          <span className={styles["span-8"]}>{slots[2] ?? "make people's life easier"}</span>
                        </h2>
                      </div>
                      <div className={styles["smiley-2"]}>
                        <div className={styles["div-78"]}>
                          <img className={styles["img-8"]} src={slots[3] ?? "https://framerusercontent.com/images/jFox9bBbzlCGvD7fgHazYedU7yQ.png"} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["projects-3"]}>
              <div className={styles["div-112"]}>
                <a className={styles["cinematic-left-2"]} href="./rice">
                  <div className={styles["div-113"]}>
                    <div className={styles["container-16"]}>
                      <div className={styles["image-5"]}>
                        <div className={styles["container-17"]}>
                          <div className={styles["image-1-6"]}>
                            <div className={styles["div-114"]}>
                              <img className={styles["img-11"]} src={slots[4] ?? "https://framerusercontent.com/images/UympF4hijPBQTZPbNUba5u1YCk.png?scale-down-to=1024"} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["card-info-6"]}>
                        <div className={styles["div-115"]}>
                          <div className={styles["title-7"]}>
                            <div className={styles["rice-app-6"]}>
                              <p className={styles["p-31"]}>{slots[5] ?? "Rice App"}</p>
                            </div>
                            <div className={styles["div-84"]}>
                              <Phosphor slots={[]} />
                            </div>
                          </div>
                          <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california-4"]}>
                            <p className={styles["p-32"]}>{slots[6] ?? "From 0 to 1, orchestrated a restaurant deal & coupon app partnered with over 100 small business owners in California"}</p>
                          </div>
                        </div>
                        <div className={styles["div-116"]}>
                          <div className={styles["3-tags-2"]}>
                            <div className={styles["div-117"]}>
                              <div className={styles["div-87"]}>
                                <div className={styles["line"]}>
                                  <div className={styles["div-88"]}>
                                    <div className={styles["0-to-1-9"]}>
                                      <p className={styles["p-21"]}>{slots[7] ?? "0 TO 1"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-89"]} />
                              <div className={styles["div-118"]}>
                                <div className={styles["line-5"]}>
                                  <div className={styles["div-119"]}>
                                    <div className={styles["0-to-1-16"]}>
                                      <p className={styles["p-33"]}>{slots[8] ?? "USER RESEARCH"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-92"]} />
                              <div className={styles["div-93"]}>
                                <div className={styles["blank-9"]}>
                                  <div className={styles["div-94"]}>
                                    <div className={styles["0-to-1-11"]}>
                                      <p className={styles["p-23"]}>{slots[9] ?? "PRODUCT DESIGN"}</p>
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
              <div className={styles["div-112"]}>
                <a className={styles["cinematic-right-2"]} href="./lafitness">
                  <div className={styles["div-113"]}>
                    <div className={styles["container-16"]}>
                      <div className={styles["image-6"]}>
                        <div className={styles["container-17"]}>
                          <div className={styles["image-1-6"]}>
                            <div className={styles["div-114"]}>
                              <img className={styles["img-11"]} src={slots[10] ?? "https://framerusercontent.com/images/glieqsBo0IlSlv6js5JSS9w220.png?scale-down-to=1024"} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["card-info-7"]}>
                        <div className={styles["div-120"]}>
                          <div className={styles["title-7"]}>
                            <div className={styles["rice-app-7"]}>
                              <p className={styles["p-34"]}>{slots[11] ?? "LA Fitness"}</p>
                            </div>
                            <div className={styles["div-84"]}>
                              <Phosphor slots={[]} />
                            </div>
                          </div>
                          <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california-4"]}>
                            <p className={styles["p-32"]}>{slots[12] ?? "Consolidated 29 menu items into 4 tiers, redefined user journey to ensure key features are one tap away"}</p>
                          </div>
                        </div>
                        <div className={styles["div-121"]}>
                          <div className={styles["3-tags-2"]}>
                            <div className={styles["div-117"]}>
                              <div className={styles["div-97"]}>
                                <div className={styles["line-3"]}>
                                  <div className={styles["div-98"]}>
                                    <div className={styles["0-to-1-12"]}>
                                      <p className={styles["p-26"]}>{slots[13] ?? "PROTOTYPE"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-89"]} />
                              <div className={styles["div-99"]}>
                                <div className={styles["blank-10"]}>
                                  <div className={styles["div-100"]}>
                                    <div className={styles["0-to-1-13"]}>
                                      <p className={styles["p-27"]}>{slots[14] ?? "INFORMATION ARCHITECTURE"}</p>
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
              <div className={styles["div-112"]}>
                <a className={styles["cinematic-left-2"]} href="./web-revamp">
                  <div className={styles["div-113"]}>
                    <div className={styles["container-16"]}>
                      <div className={styles["image-7"]}>
                        <div className={styles["container-17"]}>
                          <div className={styles["image-1-6"]}>
                            <div className={styles["div-114"]}>
                              <img className={styles["img-11"]} src={slots[15] ?? "https://framerusercontent.com/images/CwW9ctGIwdR3I0SumkrPEGvcAE.png?scale-down-to=1024"} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["card-info-8"]}>
                        <div className={styles["div-122"]}>
                          <div className={styles["title-7"]}>
                            <div className={styles["rice-app-8"]}>
                              <p className={styles["p-35"]}>{slots[16] ?? "Web Revamp"}</p>
                            </div>
                            <div className={styles["div-84"]}>
                              <Phosphor slots={[]} />
                            </div>
                          </div>
                          <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california-5"]}>
                            <p className={styles["p-36"]}>{slots[17] ?? "Improve the professional online presence of a realtor and streamline the lead screening process"}</p>
                          </div>
                        </div>
                        <div className={styles["div-116"]}>
                          <div className={styles["3-tags-2"]}>
                            <div className={styles["div-117"]}>
                              <div className={styles["div-123"]}>
                                <div className={styles["line-6"]}>
                                  <div className={styles["div-124"]}>
                                    <div className={styles["0-to-1-17"]}>
                                      <p className={styles["p-37"]}>{slots[18] ?? "RESPONSIVE DESIGN"}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles["div-89"]} />
                              <div className={styles["div-125"]}>
                                <div className={styles["blank-12"]}>
                                  <div className={styles["div-126"]}>
                                    <div className={styles["0-to-1-18"]}>
                                      <p className={styles["p-38"]}>{slots[19] ?? "HAND OFF"}</p>
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
          <div className={styles["div-127"]}>
            <div className={styles["footer-clean"]}>
              <div className={styles["container-7"]}>
                <div className={styles["div-53"]} />
                <div className={styles["div-54"]}>
                  <div className={styles["div-55"]}>
                    <div className={styles["div-56"]}>
                      <div className={styles["p-17"]}>
                        {"Let's connect, collab and create "}
                        <span className={styles["span-2"]}>{slots[20] ?? "𖠚"}</span>
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
          <div className={styles["gradient"]}>
            <div className={styles["div-128"]}>
              <div className={styles["div-129"]}>
                <img className={styles["img-12"]} src={slots[21] ?? "https://framerusercontent.com/images/VEXwSwtYfcYF0UDe54gbyVhqY0o.jpg"} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Home2 slots={[]} />
      </div>
      <div className={styles["div-69"]}>
        <SvgGraphic className={styles["svg-3"]} html={"<svg viewBox=\"0 0 14 14\" id=\"svg11934025868\" data-f2c-idx=\"236\"><path d=\"M 4.564 4.505 L 5.383 3.622 L 9.824 4.466 L 10.663 8.994 L 9.824 9.857 L 8.909 5.406 Z M 3.744 9.799 L 8.719 4.812 L 9.5 5.675 L 4.545 10.663 Z\" fill=\"var(--token-73eb122e-396c-4af7-805a-012bb8cc6b3a, rgb(147, 151, 163))\" data-f2c-idx=\"237\"></path></svg>"} />
      </div>
      <div className={styles["div-70"]}>
        <span className={styles["span-3"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"241\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"242\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
