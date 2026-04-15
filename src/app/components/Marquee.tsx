
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MarqueeSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveText = (scrollY: number) => {
    const slowSpeed = 0.01;
    return (scrollY * slowSpeed) % 100;
  };

  return (
    <div className="relative w-full overflow-hidden shadow-inner">
      <div className="h-16 bg-white w-full  flex justify-center items-center shadow-inner" style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.6)" }}>
        <motion.div
          className="text-black text-2xl font-bold whitespace-nowrap"
          style={{
            transform: `translateX(-${moveText(scrollY)}%)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          TREINE COM O MELHOR{" "}
          <span className="mx-2 text-black">•</span> PERFORMANCE{" "}
        <span className="mx-2 text-black">•</span> SAÚDE{" "}
        <span className="mx-2 text-black">•</span> REABILITAÇÃO DE LESÕES{" "}
        <span className="mx-2 text-black">•</span> PERFORMANCE{" "}
        <span className="mx-2 text-black">•</span> SAÚDE{" "}
        <span className="mx-2 text-black">•</span> REABILITAÇÃO DE LESÕES{" "}
        <span className="mx-2 text-black">•</span> PERFORMANCE{" "}
        <span className="mx-2 text-black">•</span> SAÚDE{" "}
        <span className="mx-2 text-black">•</span> REABILITAÇÃO DE LESÕES{" "}
        <span className="mx-2 text-black">•</span> PERFORMANCE{" "}
        <span className="mx-2 text-black">•</span> SAÚDE{" "}
        <span className="mx-2 text-black">•</span> REABILITAÇÃO DE LESÕES{" "}
        <span className="mx-2 text-black">•</span> PERFORMANCE{" "}
        <span className="mx-2 text-black">•</span> SAÚDE{" "}
        <span className="mx-2 text-black">•</span> REABILITAÇÃO DE LESÕES{" "}
        <span className="mx-2 text-black">•</span> PERFORMANCE{" "}
        <span className="mx-2 text-black">•</span> SAÚDE{" "}
        <span className="mx-2 text-black">•</span> REABILITAÇÃO DE LESÕES{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
