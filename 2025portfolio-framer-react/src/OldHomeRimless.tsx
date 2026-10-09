import styles from "./styles.module.css"
import States from "./States"
import { SvgGraphic } from "./RichText"
import TopBar from "./TopBar"
import Logo from "./Logo"
import Navigation from "./Navigation"
import NavigationItem from "./NavigationItem"
import ThemeToggle from "./ThemeToggle"
import Phosphor from "./Phosphor"
import ColorCycle from "./ColorCycle"
import Home2 from "./Home2"

export default function OldHomeRimless({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-19"]}>
        <States
          a={<>
            <div className={styles["div-20"]}>
              <div className={styles["div-21"]}>
                <TopBar slots={["https://framerusercontent.com/images/xlIRd6e7BdowiCdsvRCB5cJ48I.png?scale-down-to=512","Work","About","Resume"]} />
              </div>
              <div className={styles["sections"]}>
                <div className={styles["header"]}>
                  <div className={styles["tagline"]}>
                    <div className={styles["container-2"]}>
                      <div className={styles["headline"]}>
                        <div className={styles["hello"]}>
                          <div className={styles["div-22"]}>
                            <div className={styles["div-23"]}>
                              <div className={styles["variant-5"]}>
                                <div className={styles["div-24"]}>
                                  <div className={styles["div-25"]}>
                                    <h1 className={styles["h1"]}>{"Hola, soy Quinn Xu"}</h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-26"]}>
                          <h2 className={styles["h2"]}>
                            {"a product designer passionate about designs that "}
                            <span className={styles["span"]}>{"drive"}</span>
                            {" business success and "}
                            <span className={styles["span"]}>{"make"}</span>
                            {" people's life easier"}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["dots-n-selected-project"]}>
                    <div className={styles["div-27"]}>
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
                    <a className={styles["a"]} href="./old-home-rimless#projects">
                      <div className={styles["div-29"]}>
                        <p className={styles["p-5"]}>{"selected works"}</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className={styles["projects"]}>
                  <div className={styles["div-30"]}>
                    <a className={styles["work-1"]} href="./rice">
                      <div className={styles["container-3"]}>
                        <div className={styles["image"]}>
                          <div className={styles["container-4"]}>
                            <div className={styles["image-1"]}>
                              <div className={styles["div-31"]}>
                                <img className={styles["img-2"]} src="https://framerusercontent.com/images/UympF4hijPBQTZPbNUba5u1YCk.png?scale-down-to=512" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info"]}>
                          <div className={styles["title-n-content"]}>
                            <div className={styles["title-4"]}>
                              <div className={styles["rice-app"]}>
                                <p className={styles["p-6"]}>{"Rice App"}</p>
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california"]}>
                              <p className={styles["p-7"]}>{"From 0 to 1, designed a digital coupon app partnered with over 100 resuaurant owners in California"}</p>
                            </div>
                          </div>
                          <div className={styles["tags"]}>
                            <div className={styles["div-32"]}>
                              <div className={styles["blank"]}>
                                <div className={styles["div-33"]}>
                                  <div className={styles["0-to-1"]}>
                                    <p className={styles["p-8"]}>{"0 to 1"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-34"]}>
                              <div className={styles["blank-2"]}>
                                <div className={styles["div-35"]}>
                                  <div className={styles["0-to-1-2"]}>
                                    <p className={styles["p-9"]}>{"user research"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-36"]}>
                              <div className={styles["blank-3"]}>
                                <div className={styles["div-37"]}>
                                  <div className={styles["0-to-1-3"]}>
                                    <p className={styles["p-10"]}>{"product design"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-30"]}>
                    <a className={styles["work-2"]} href="./lafitness">
                      <div className={styles["container-5"]}>
                        <div className={styles["image"]}>
                          <div className={styles["container-6"]}>
                            <div className={styles["image-1-2"]}>
                              <div className={styles["div-38"]}>
                                <img className={styles["img-3"]} src="https://framerusercontent.com/images/J9SOzlgk5VtzAab0clviQW19A.png?scale-down-to=512" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info-2"]}>
                          <div className={styles["title-n-content-2"]}>
                            <div className={styles["title-5"]}>
                              <div className={styles["rice-app-2"]}>
                                <p className={styles["p-11"]}>{"LA Fitness"}</p>
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california"]}>
                              <p className={styles["p-7"]}>{"Turned 29 menu items into 5, rethink user journey to make most important functions 1-tap away"}</p>
                            </div>
                          </div>
                          <div className={styles["tags"]}>
                            <div className={styles["div-39"]}>
                              <div className={styles["blank-4"]}>
                                <div className={styles["div-40"]}>
                                  <div className={styles["0-to-1-4"]}>
                                    <p className={styles["p-12"]}>{"information architecture"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-41"]}>
                              <div className={styles["blank-5"]}>
                                <div className={styles["div-42"]}>
                                  <div className={styles["0-to-1-5"]}>
                                    <p className={styles["p-13"]}>{"prototype"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-43"]}>
                              <div className={styles["blank-6"]}>
                                <div className={styles["div-44"]}>
                                  <div className={styles["0-to-1-6"]}>
                                    <div className={styles["p-14"]} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-30"]}>
                    <a className={styles["work-3"]} href="./web-revamp">
                      <div className={styles["container-3"]}>
                        <div className={styles["image"]}>
                          <div className={styles["container-6"]}>
                            <div className={styles["image-1-3"]}>
                              <div className={styles["div-45"]}>
                                <img className={styles["img-4"]} src="https://framerusercontent.com/images/Wc517fA6LZ28VWIXH3ST8jiu0.png?scale-down-to=512" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info-3"]}>
                          <div className={styles["title-n-content-2"]}>
                            <div className={styles["title-5"]}>
                              <div className={styles["rice-app-2"]}>
                                <p className={styles["p-11"]}>{"Web Revamp"}</p>
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california"]}>
                              <p className={styles["p-7"]}>{"Redesigned a San Francisco realtor's website to enhance its professional presentation and optimize lead screening process"}</p>
                            </div>
                          </div>
                          <div className={styles["tags"]}>
                            <div className={styles["div-46"]}>
                              <div className={styles["blank-7"]}>
                                <div className={styles["div-47"]}>
                                  <div className={styles["0-to-1-7"]}>
                                    <p className={styles["p-15"]}>{"responsive design"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-48"]}>
                              <div className={styles["blank-8"]}>
                                <div className={styles["div-49"]}>
                                  <div className={styles["0-to-1-8"]}>
                                    <p className={styles["p-16"]}>{"hand off"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-43"]}>
                              <div className={styles["blank-6"]}>
                                <div className={styles["div-44"]}>
                                  <div className={styles["0-to-1-6"]}>
                                    <div className={styles["p-14"]} />
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
              <div className={styles["div-50"]}>
                <div className={styles["div-51"]} />
              </div>
              <div className={styles["div-52"]}>
                <div className={styles["footer-clean"]}>
                  <div className={styles["container-7"]}>
                    <div className={styles["div-53"]} />
                    <div className={styles["div-54"]}>
                      <div className={styles["div-55"]}>
                        <div className={styles["div-56"]}>
                          <div className={styles["p-17"]}>
                            {"Let's connect, collab and create "}
                            <span className={styles["span-2"]}>{"𖠚"}</span>
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
          </>}
          b={<>
            <div className={styles["div-20"]}>
              <div className={styles["div-21"]}>
                <TopBar slots={["https://framerusercontent.com/images/xlIRd6e7BdowiCdsvRCB5cJ48I.png?scale-down-to=512","Work","About","Resume"]} />
              </div>
              <div className={styles["sections"]}>
                <div className={styles["header-2"]}>
                  <div className={styles["tagline"]}>
                    <div className={styles["container-8"]}>
                      <div className={styles["headline-2"]}>
                        <div className={styles["hello-2"]}>
                          <div className={styles["div-64"]}>
                            <div className={styles["div-65"]}>
                              <div className={styles["variant-1-3"]}>
                                <div className={styles["div-66"]}>
                                  <div className={styles["div-67"]}>
                                    <h1 className={styles["h1-2"]}>{"Hello there, I am Quinn Xu"}</h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-26"]}>
                          <h2 className={styles["h2"]}>
                            {"a product designer passionate about designs that "}
                            <span className={styles["span"]}>{"drive"}</span>
                            {" business success and "}
                            <span className={styles["span"]}>{"make"}</span>
                            {" people's life easier"}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["dots-n-selected-project"]}>
                    <div className={styles["div-68"]}>
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
                    <a className={styles["a-2"]} href="./old-home-rimless#projects">
                      <div className={styles["div-29"]}>
                        <p className={styles["p-5"]}>{"selected works"}</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className={styles["projects"]}>
                  <div className={styles["div-30"]}>
                    <a className={styles["work-1-2"]} href="./rice">
                      <div className={styles["container-3"]}>
                        <div className={styles["image"]}>
                          <div className={styles["container-9"]}>
                            <div className={styles["image-1"]}>
                              <div className={styles["div-31"]}>
                                <img className={styles["img-5"]} src="https://framerusercontent.com/images/UympF4hijPBQTZPbNUba5u1YCk.png?scale-down-to=512" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info"]}>
                          <div className={styles["title-n-content"]}>
                            <div className={styles["title-4"]}>
                              <div className={styles["rice-app"]}>
                                <p className={styles["p-6"]}>{"Rice App"}</p>
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california"]}>
                              <p className={styles["p-7"]}>{"From 0 to 1, designed a digital coupon app partnered with over 100 resuaurant owners in California"}</p>
                            </div>
                          </div>
                          <div className={styles["tags"]}>
                            <div className={styles["div-32"]}>
                              <div className={styles["blank"]}>
                                <div className={styles["div-33"]}>
                                  <div className={styles["0-to-1"]}>
                                    <p className={styles["p-8"]}>{"0 to 1"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-34"]}>
                              <div className={styles["blank-2"]}>
                                <div className={styles["div-35"]}>
                                  <div className={styles["0-to-1-2"]}>
                                    <p className={styles["p-9"]}>{"user research"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-36"]}>
                              <div className={styles["blank-3"]}>
                                <div className={styles["div-37"]}>
                                  <div className={styles["0-to-1-3"]}>
                                    <p className={styles["p-10"]}>{"product design"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-30"]}>
                    <a className={styles["work-2"]} href="./lafitness">
                      <div className={styles["container-5"]}>
                        <div className={styles["image"]}>
                          <div className={styles["container-6"]}>
                            <div className={styles["image-1-2"]}>
                              <div className={styles["div-38"]}>
                                <img className={styles["img-6"]} src="https://framerusercontent.com/images/J9SOzlgk5VtzAab0clviQW19A.png?scale-down-to=512" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info-2"]}>
                          <div className={styles["title-n-content-2"]}>
                            <div className={styles["title-5"]}>
                              <div className={styles["rice-app-2"]}>
                                <p className={styles["p-11"]}>{"LA Fitness"}</p>
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california"]}>
                              <p className={styles["p-7"]}>{"Turned 29 menu items into 5, rethink user journey to make most important functions 1-tap away"}</p>
                            </div>
                          </div>
                          <div className={styles["tags"]}>
                            <div className={styles["div-39"]}>
                              <div className={styles["blank-4"]}>
                                <div className={styles["div-40"]}>
                                  <div className={styles["0-to-1-4"]}>
                                    <p className={styles["p-12"]}>{"information architecture"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-41"]}>
                              <div className={styles["blank-5"]}>
                                <div className={styles["div-42"]}>
                                  <div className={styles["0-to-1-5"]}>
                                    <p className={styles["p-13"]}>{"prototype"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-43"]}>
                              <div className={styles["blank-6"]}>
                                <div className={styles["div-44"]}>
                                  <div className={styles["0-to-1-6"]}>
                                    <div className={styles["p-14"]} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles["div-30"]}>
                    <a className={styles["work-3"]} href="./web-revamp">
                      <div className={styles["container-3"]}>
                        <div className={styles["image"]}>
                          <div className={styles["container-6"]}>
                            <div className={styles["image-1-3"]}>
                              <div className={styles["div-45"]}>
                                <img className={styles["img-7"]} src="https://framerusercontent.com/images/Wc517fA6LZ28VWIXH3ST8jiu0.png?scale-down-to=512" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["card-info-3"]}>
                          <div className={styles["title-n-content-2"]}>
                            <div className={styles["title-5"]}>
                              <div className={styles["rice-app-2"]}>
                                <p className={styles["p-11"]}>{"Web Revamp"}</p>
                              </div>
                            </div>
                            <div className={styles["from-0-to-1-designed-a-digital-coupon-app-partnered-with-over-100-small-business-owners-in-california"]}>
                              <p className={styles["p-7"]}>{"Redesigned a San Francisco realtor's website to enhance its professional presentation and optimize lead screening process"}</p>
                            </div>
                          </div>
                          <div className={styles["tags"]}>
                            <div className={styles["div-46"]}>
                              <div className={styles["blank-7"]}>
                                <div className={styles["div-47"]}>
                                  <div className={styles["0-to-1-7"]}>
                                    <p className={styles["p-15"]}>{"responsive design"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-48"]}>
                              <div className={styles["blank-8"]}>
                                <div className={styles["div-49"]}>
                                  <div className={styles["0-to-1-8"]}>
                                    <p className={styles["p-16"]}>{"hand off"}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-43"]}>
                              <div className={styles["blank-6"]}>
                                <div className={styles["div-44"]}>
                                  <div className={styles["0-to-1-6"]}>
                                    <div className={styles["p-14"]} />
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
              <div className={styles["div-50"]}>
                <div className={styles["div-51"]} />
              </div>
              <div className={styles["div-52"]}>
                <div className={styles["footer-clean-2"]}>
                  <div className={styles["container-7"]}>
                    <div className={styles["div-53"]} />
                    <div className={styles["div-54"]}>
                      <div className={styles["div-55"]}>
                        <div className={styles["div-56"]}>
                          <div className={styles["p-17"]}>
                            {"Let's connect, collab and create "}
                            <span className={styles["span-2"]}>{"𖠚"}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-57"]}>
                        <div className={styles["div-58"]}>
                          <div className={styles["icon-2"]}>
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
          </>}
        />
        <Home2 slots={[]} />
      </div>
      <div className={styles["div-69"]}>
        <SvgGraphic className={styles["svg-3"]} html={"<svg viewBox=\"0 0 14 14\" id=\"svg11934025868\" data-f2c-idx=\"223\"><path d=\"M 4.564 4.505 L 5.383 3.622 L 9.824 4.466 L 10.663 8.994 L 9.824 9.857 L 8.909 5.406 Z M 3.744 9.799 L 8.719 4.812 L 9.5 5.675 L 4.545 10.663 Z\" fill=\"var(--token-73eb122e-396c-4af7-805a-012bb8cc6b3a, rgb(147, 151, 163))\" data-f2c-idx=\"224\"></path></svg>"} />
      </div>
      <div className={styles["div-70"]}>
        <span className={styles["span-3"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button"]}>
          <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"228\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"229\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
