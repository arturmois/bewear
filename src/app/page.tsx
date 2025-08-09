import Image from "next/image";

import { Header } from "@/components/common/header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="space-y-6 px-4">
        <Image
          src="/banner-01.png"
          alt="Leve uma vida com estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
        <Image
          src="/banner-02.png"
          alt="Seja autentico"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </>
  );
};

export default Home;
