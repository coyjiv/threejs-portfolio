import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
    text:  string
    style?: React.CSSProperties
    bold?: boolean
    small?: boolean
    isVisible: boolean
    textClassName?: string
    textWrapperClassName?: string
}

const TypedHeading = ({text, style, bold, small, isVisible, textClassName, textWrapperClassName}: Props) => {
    const words = text.split(" ");

    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
      }),
    };

    const containerOut = {
      hidden: { opacity: 1 },
      visible: (i = 1) => ({
        opacity: 0,
        transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
      }),
    };
    
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };

    const childOut = {
      visible: {
        opacity: 0,
        x: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };

  
    return (
      <motion.div
        style={style ? { overflow: "hidden", display: "flex", fontSize: "2rem", flexWrap: 'wrap', ...style } : { overflow: "hidden", display: "flex", fontSize: "2rem", flexWrap: 'wrap' }}
        variants={isVisible? container: containerOut}
        initial="hidden"
        animate="visible"
        className={textWrapperClassName ? textWrapperClassName : ""}
      >
        {words.map((word, index) => (
          <motion.span
            variants={isVisible? child: childOut}
            style={{ marginRight: "5px" }}
            key={index}
            className={textClassName ? textClassName : bold ? `font-bold ${small? 'text-lg' : ''}` : `${small? 'text-lg' : ''}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
}

export default TypedHeading