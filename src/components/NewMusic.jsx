import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./Timeline.css";

const NewMusic = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const { t } = useTranslation();
  const newmusic = t("newmusic", { returnObjects: true });

  return (
    <section id="newmusic" className="pt-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="text-center">
          <p className="font-rubik font-semibold text-4xl">{newmusic[0]}</p>
        </div>
        <div className="pt-6 box-border text-center sm:text-white">
          <div className="relative">
            <img
              alt="paradise"
              className="w-[100%] rounded-3xl"
              src="/assets/myhopeBanner2.png"
            />
            <div className="sm:absolute pt-5 mx-[25%] sm:mx-[3%] sm:pt-0 sm:top-[40%] sm:left-[50%]">
              <h1 className="font-rubik font-semibold sm:text-lg md:text-xl lg:text-4xl">
                {newmusic[1]}
              </h1>
              <a href="https://ffm.to/lypk9e5" target="_blank">
                <button className="p-5 border-2 border-border-color rounded-full font-semibold mt-5 hover:bg-text-secondary-color hover:text-btn-text-hover transition duration-500 sm:border-white">
                  {newmusic[2]}
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default NewMusic;
