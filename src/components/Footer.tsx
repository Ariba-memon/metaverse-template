'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { socials } from '../constants'
import styles from '../../styles'
import { footerVariants } from '../../utils/index'
import headSet from 'public/headset.svg'

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <Image
            src={headSet}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
            width={24}
            height={24}
          />
          <span className="font-normal text-[16px] text-white">
            Enter Metaverse
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">METAVERUS</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - 2024 Metaversus. All rights reserved. Made by
            Ariba Memon
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
)

export default Footer
