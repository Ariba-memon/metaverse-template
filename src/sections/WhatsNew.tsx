/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../../styles'
import { newFeatures } from '../constants'
import { NewFeatures, TitleText, TypingText } from '../components'
import { planetVariants, fadeIn } from '../../utils'

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={{
        hidden: {},
        show: {},
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          width={800}
          height={800}
        />
      </motion.div>
    </motion.div>
  </section>
)

export default WhatsNew
