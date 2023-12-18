import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();
  const landing = t("landing", { returnObjects: true });
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {
          isAboveLarge ? (
            <div>
              <img
                alt="profile"
                className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
                src="/assets/MVLLERprofpic.jpg"
              />
              {/*<img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
              src="/assets/MVLLERprofpic.jpg"
        />*/}
            </div>
          ) : (
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
              src="/assets/MVLLERprofpic.jpg"
            />
          )
          /*(
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
            src="/assets/MVLLERprofpic.jpg"
          />
        )*/
        }
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
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
          <p className="text-6xl font-semibold font-rubik z-10 text-center ">
            <span className="text-text-secondary-color"> {landing[0]}</span>{" "}
            {landing[1]}{" "}
            <span className="text-text-secondary-color"> {landing[2]}</span>
          </p>

          <p className="mt-10 sm:text-md md:text-md lg:text-lg text-center md:text-start">
            {landing[3]}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mx-auto text-center grid grid-cols-6 pt-10">
            <a
              className="text-[32px] hover:text-text-secondary-color"
              href="https://open.spotify.com/artist/1HBQr6diLEqcT1yod4Ulim"
              target="_blank"
              aria-label="Spotify"
            >
              <i className="fa-brands fa-spotify"></i>
            </a>
            <a
              className="text-[32px] hover:text-text-secondary-color"
              href="https://music.apple.com/hu/artist/mvller/1524822004"
              target="_blank"
              aria-label="AppleMusic"
            >
              <i className="fa-brands fa-itunes"></i>
            </a>
            <a
              className="text-[32px] hover:text-text-secondary-color"
              href="https://www.youtube.com/@mvller4553"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              className="text-[32px] hover:text-text-secondary-color"
              href="https://soundcloud.com/user-640103799"
              target="_blank"
              aria-label="Soundcloud"
            >
              <i className="fa-brands fa-soundcloud"></i>
            </a>
            <a
              className="text-[32px] hover:text-text-secondary-color"
              href="https://www.facebook.com/profile.php?id=100093399248802"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="text-[32px] hover:text-text-secondary-color"
              href="https://www.instagram.com/mvllermusic/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Link
            className="p-5 border-2 border-border-color rounded-full font-semibold mt-5 hover:bg-text-secondary-color hover:text-btn-text-hover transition duration-500"
            href="contact"
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
          >
            {landing[4]}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
