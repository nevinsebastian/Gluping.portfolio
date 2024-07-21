import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
      >
        I'm a software engineer with a passion for creating innovative and user-friendly experiences. I have a deep understanding of web development, design, and user experience design. My goal is to help clients create beautiful, engaging, and accessible experiences for their users.

      </motion.p>
    </>
  )
}

export default About