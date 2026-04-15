
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import persona from "../../../public/persona.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY] = useState(0);
  const controls = useAnimation();



  useEffect(() => {
    const progress = Math.min(scrollY / 300, 1);
    controls.start({
      x: `${350 * progress}%`,
      rotate: 50,
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);

  return (
    <header className="relative flex flex-col xl:flex-row items-center justify-center xl:gap-60 px-5 xl:px-10 pt-10 mx-auto overflow-hidden z-[130]">
      <div className="fixed bottom-6 right-6 z-[150] flex flex-col items-end">
  {/* Redes Sociais */}
  {isOpen && (
    <div className="mb-3 flex flex-col items-end space-y-3">
      
      <motion.a
        href="/"
        target="_blank"
        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/80 hover:text-black transition-all duration-300"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        
        @instagram_account
      </motion.a>

      <motion.a
        href="/"
        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/80 hover:text-black transition-all duration-300"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        
        @email_account
      </motion.a>

      <motion.a
        href="/"
        className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/80 hover:text-black transition-all duration-300"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        
        55 (xx) xxxxxx
      </motion.a>
    </div>
  )}

  {/* Botão principal */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg hover:bg-white/80 hover:text-black hover:scale-105 transition-all duration-300"
  >
    {isOpen ? <X size={18} /> : <Menu size={18} />}
  </button>
</div>
      

      {/* Shapes animados com o scroll */}
      <motion.div className="absolute w-full h-full top-0 left-0 hidden xl:block"
        initial={{ opacity: 1, x: "10%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}>

        <motion.div
          className="absolute top-[-20%] right-[-12%] h-[140%] w-[42%] bg-red-700 anim_shape_01  anim_shape opacity-0 "
          style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.6)" }}
          animate={controls}
          initial={{ rotate: 50 }} // Inicialmente com rotação
          transition={{ delay: 0.1, duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute top-[-20%] right-[-14%] h-[140%] w-[42%] bg-cinza anim_shape_02 anim_shape opacity-0 rounded-lg"
          animate={controls}
          initial={{ rotate: 50 }} // Inicialmente com rotação
          transition={{ delay: 0.2, duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute top-[-20%] right-[-16%] h-[140%] w-[42%] bg-red-700 anim_shape_03 anim_shape opacity-0 rounded-lg"
          style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.6)" }}
          animate={controls}
          initial={{ rotate: 50 }} // Inicialmente com rotação
          transition={{ delay: 0.3, duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute top-[-20%] right-[-18%] h-[140%] w-[42%] bg-cinza anim_shape_04 anim_shape opacity-0 rounded-lg"
          animate={controls}
          initial={{ rotate: 50 }} // Inicialmente com rotação
          transition={{ delay: 0.4, duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute top-[-20%] right-[-20%] h-[140%] w-[42%] bg-red-700  anim_shape_05 anim_shape opacity-0 rounded-lg"
          style={{ boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.6)" }}
          animate={controls}
          initial={{ rotate: 50 }} // Inicialmente com rotação
          transition={{ delay: 0.5, duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute top-[-20%] right-[-22%] h-[140%] w-[42%] bg-cinza  anim_shape_06  anim_shape opacity-0 rounded-lg"
          animate={controls}
          initial={{ rotate: 50 }} // Inicialmente com rotação
          transition={{ delay: 0.6, duration: 0.6 }}
        ></motion.div>

        <motion.div
          className="absolute top-[-20%] right-[-24%] h-[140%] w-[42%] bg-red-700 anim_shape_07 anim_shape opacity-0 rounded-lg"
          style={{ 
            boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.6)", 
            backgroundImage: "url('/bg_header.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          
          animate={controls}
          initial={{ rotate: 50 }} // Inicialmente com rotação
          transition={{ delay: 0.7, duration: 0.6 }}
        ></motion.div>

      </motion.div>

      {/* Texto do personal */}
      <div className="w-full xl:w-4/5 flex flex-col xl:flex-row items-center justify-center">
      <div className=" z-10 flex flex-col  w-full xl:w-5/6">
        <motion.h1
          className=" text-4xl font-title  xl:text-7xl text-center xl:text-left font-bold  text-white pb-10 xl:w-5/6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut" }}
        >
          {"Thiago Berghahn".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, ease: "easeOut" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-2xl font-title xl:text-3xl text-center xl:text-left text-red-700 pb-2 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, ease: "easeOut" }}
        >
          Treinador CREF 042105-G/RS
        </motion.h2>

        <motion.h2
          className="xl:text-1xl text-center xl:text-left text-gray-300 pb-4 xl:pb-2 xl:w-4/6 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, ease: "easeOut" }}
        >
Bacharel em Educação Física pela Universidade Feevale, com mais de 5 anos de experiência em musculação e reabilitação de lesões. <br></br>Especialista em metodologia do treinamento com foco em hipertrofia e emagrecimento.        </motion.h2>

        <motion.button
          className="xl:w-2/6 px-6 py-2  border-2 xl:mb-0 mb-10 border-red-700 text-white font-medium mt-4 transition-colors duration-300 hover:bg-red-700 hover:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: "easeOut" }}
        >
          Entrar em contato
        </motion.button>
      </div>

      {/* Imagem do personal */}
    
        <motion.div
          initial={{ opacity: 0, y: 250, zIndex: 10 }}
          animate={{ opacity: 1, y: 0, zIndex: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={persona}
            alt="Personal Trainer"
            width={500}
            height={400}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
