import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" width={28} height={28} alt="Logo" />
      </div>
    </Link>
  );
};

export default HeaderLogo;
