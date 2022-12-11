import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Twitter } from "../../../../assets/images";

const SOCIAL_MEDIA = [
  {
    imgSrc: Linkedin.src,
    link: "#linkedin",
    alt: "Visite no Linkedin.",
  },
  {
    imgSrc: Facebook.src,
    link: "#facebook",
    alt: "Visite no Facebook.",
  },
  {
    imgSrc: Twitter.src,
    link: "#twitter",
    alt: "Visite no Twitter.",
  },
];

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="copyrightText">Copyright 2022 - Julius Team</div>
      <div className="iconsContainer">
        {SOCIAL_MEDIA.map((sm: any, index: number) => (
          <Link key={index} href={sm.link}>
            <div className="icon">
              <Image width={40} height={40} src={sm.imgSrc} alt={sm.alt}></Image>
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
