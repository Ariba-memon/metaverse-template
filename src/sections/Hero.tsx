'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../../styles'
import { slideIn, textVariant } from '../../utils'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={{
        hidden: {},
        show: {},
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroheading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroheading}>Ma</h1>
          <div className={styles.heroDtext} />
          <h1 className={styles.heroheading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          width={1400}
          height={400}
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              width={490}
              height={490}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
