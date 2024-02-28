import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SecondaryButton } from "./custom-button";

const Header = () => {
  return (
    <div className="px-10 md:px-24 hidden md:flex justify-between items-center py-4">
      <div>
        <Image src={"/logo.svg"} width={100} height={100} alt="logo" />
      </div>
      <div>
        <SecondaryButton variant="secondary" className="">
          View Store
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Header;
