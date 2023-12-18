import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-scroll";

const DotGroup = () => {
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        href="home"
        to="home"
        title="home"
        activeClass="relative bg-text-secondary-color before:absolute before:w-6 before:h-6 before:rounded-full
      before:border-2 before:border-text-secondary-color before:left-[-50%] before:top-[-50%]"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        href="newmusic"
        to="newmusic"
        title="newmusic"
        activeClass="relative bg-text-secondary-color before:absolute before:w-6 before:h-6 before:rounded-full
      before:border-2 before:border-text-secondary-color before:left-[-50%] before:top-[-50%]"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        href="releases"
        to="releases"
        title="releases"
        activeClass="relative bg-text-secondary-color before:absolute before:w-6 before:h-6 before:rounded-full
      before:border-2 before:border-text-secondary-color before:left-[-50%] before:top-[-50%]"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />
      <Link
        className="bg-dark-grey w-3 h-3 rounded-full"
        href="contact"
        to="contact"
        title="contact"
        activeClass="relative bg-text-secondary-color before:absolute before:w-6 before:h-6 before:rounded-full
      before:border-2 before:border-text-secondary-color before:left-[-50%] before:top-[-50%]"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />
    </div>
  );
};

export default DotGroup;
