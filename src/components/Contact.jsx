import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as dotenv from "dotenv";
import { useTranslation } from "react-i18next";
//dotenv.config();

const Contact = () => {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="pt-48 pb-12">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-rubik font-semibold text-4xl">{contact[0]}</p>
          <div className="flex justify-center">
            <p className="mt-6">{contact[1]}</p>
          </div>
        </div>
      </motion.div>

      {/*FORM*/}
      <div className="md:flex md:justify-between gap-16 mt-12">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img className="rounded-3xl" src="/assets/daw.jpg" alt="contact" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/01fadc15137cada846cd000c321d918b"
            method="POST"
          >
            <input
              className="w-full rounded-full border-2 border-border-color text-black font-semibold placeholder-opaque-black p-3"
              type="text"
              autoComplete="on"
              placeholder={contact[2]}
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            <input
              className="w-full rounded-full border-2 border-border-color text-black font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              autoComplete="on"
              placeholder={contact[3]}
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            <textarea
              className="w-full rounded-3xl border-2 border-border-color resize-none text-black font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder={contact[4]}
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
              type="submit"
              className="p-5 border-2 border-border-color rounded-full font-semibold mt-5 hover:bg-text-secondary-color hover:text-btn-text-hover transition duration-500"
            >
              {contact[5]}
            </button>
          </form>
        </motion.div>
      </div>
      <div className="md:w-2/5 mx-auto text-center grid grid-cols-6 pt-20 pb-32">
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
    </section>
  );
};
export default Contact;
