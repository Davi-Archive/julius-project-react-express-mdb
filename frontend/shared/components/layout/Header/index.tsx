import Image from "next/image";
import { JuliusLogo } from "../../../../assets/images";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <Image
          width={500}
          height={500}
          src={JuliusLogo.src}
          alt="Se eu não comprar nada o desconto é maior."
          priority={true}
        />
      </div>
    </header>
  );
}

export default Header