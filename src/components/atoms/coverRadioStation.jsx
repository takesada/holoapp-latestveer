import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'

const CoverRadioStations = ({
  Tricologe,
  GhostCityTokyo,
  Lower,
  Phony,
  CryBaby
}) => {
  return (
    <RadioList>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Tricologe}
        >
          <SP>Tricologe</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={GhostCityTokyo}
        >
          <SP>GhostCityTokyo</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Lower}
        >
          <SP>Lower</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Phony}
        >
          <SP>Phony</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={CryBaby}
        >
          <SP>CryBaby</SP>
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
export default CoverRadioStations;