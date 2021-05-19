import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Projects",
    paragraph: "Excellence in Execution",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Siren</h3>
                <p className="m-0">
                  Unlocking the text content of the internet.
                </p>
                <p className="m-0">
                  {" "}
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.siren.business"
                    >
                      Siren
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/AdobeStock_118793641-1320x740-1.jpeg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Citizen Saturday</h3>
                <p className="m-0">
                  Eliminating the pains points of going out.
                </p>
                <p className="m-0">
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://main.da1pi863uofsj.amplifyapp.com"
                    >
                      Citizen Saturday
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Hero-Solutions-Media-Entertainment.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Agora</h3>
                <p className="m-0">A Virtual Festival Platform.</p>
                <p className="m-0">
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.experienceagora.com"
                    >
                      Agora
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/affiliated-companies-1024x614.webp")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Amor</h3>
                <p className="m-0">
                  Dating using Data Science to optimize pairing.
                </p>
                <p className="m-0">
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.syb-media.com/"
                    >
                      SYB Media
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://www.experienceagora.com/"
                    >
                      Agora
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Hero-Solutions-Media-Entertainment.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Colosseum</h3>
                <p className="m-0">
                  A software booking platform for matching artists and promoters
                  globally.
                </p>
                <p className="m-0">
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://jamescoholan.medium.com/campanile-holdings-investor-letter-971bda5d2a23"
                    >
                      Articles
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://main.d214lfjw3d1gst.amplifyapp.com"
                    >
                      Renaissance Labs
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/AdobeStock_118793641-1320x740-1.jpeg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Sahara</h3>
                <p className="m-0">
                  Auto Mixing your favorite music for elevated listening
                  sessions.
                </p>
                <p className="m-0">
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.syb-media.com/"
                    >
                      SYB Media
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://www.experienceagora.com/"
                    >
                      Agora
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/Hero-Solutions-Media-Entertainment.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Campanile Holdings</h3>
                <p className="m-0">High Growth Investing</p>
                <p className="m-0">
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.campanileholdings.com/"
                    >
                      Campanile Holdings
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://jamescoholan.medium.com/campanile-holdings-investor-letter-971bda5d2a23"
                    >
                      Investment Thesis
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/affiliated-companies-1024x614.webp")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Citizen Saturday</h3>
                <p className="m-0">
                  A decade of experience in Digital Media and Entertainment
                  across Film & Television Acting, Music Production, and
                  experience at a Major Record Label & Talent Agency.
                </p>
                <p className="m-0">
                  <h1></h1>
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.syb-media.com/"
                    >
                      SYB Media
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://www.experienceagora.com/"
                    >
                      Agora
                    </Button>
                  </ButtonGroup>
                </div> */}
                {/* </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              > */}
                {/* <Image
                  src={require("./../../assets/images/Hero-Solutions-Media-Entertainment.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
