import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'

const RadioStations = ({
  Steller,
  kakero,
  GHOST,
  template,
  NextColorPlanet
}) => {
  return (
    <RadioList>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Steller}
        >
          <SP>StellerSteller</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={kakero}
        >
          <SP>kakero</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={GHOST}
        >
          <SP>GHOST</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={template}
        >
          <SP>template</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={NextColorPlanet}
        >
          <SP>NextColorPlanet</SP>
        </motion.div>
      </motion.div>
    </RadioList>
  );
};

const RadioList=styled.div`
  min-width: 75%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 3px;`

const SP=styled.p`
margin:5 auto;`
export default RadioStations;