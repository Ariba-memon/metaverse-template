'use client'
import type { ReactNode } from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../../utils'

type Props = {
  title: string | ReactNode
  textStyles?: string
}

export const TypingText: NextPage<Props> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white/50 ${textStyles}`}
  >
    {Array.from(title as string).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText: NextPage<Props> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
)
