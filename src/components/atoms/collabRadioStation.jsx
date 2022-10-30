import React from "react";
import { motion } from "framer-motion";
import styled from 'styled-components'

const CollabRadioStations = ({
  OutOfFrame,
  CapSule,
  HaiiroToAo,
  Cinema,
  SAIKAI
}) => {
  return (
    <RadioList>
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={OutOfFrame}
        >
          <SP>Out Of Frame</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={CapSule}
        >
          <SP>CapSule</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={HaiiroToAo}
        >
          <SP>Haiiro To Ao</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Cinema}
        >
          <SP>Cinema</SP>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={SAIKAI}
        >
          <SP>SAIKAI</SP>
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
export default CollabRadioStations;