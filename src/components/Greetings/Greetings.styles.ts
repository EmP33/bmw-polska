import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  z-index: 1000;
  display: grid;
  place-items: center;

  .wrapper {
    text-align: center;
    width: 250px;

    h3 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      font-family: var(--font-heading);
      font-weight: bold;
    }

    p {
      margin-bottom: 4rem;
      font-family: var(--font-secondary);
      font-size: 0.8125rem;
      line-height: 1.25rem;
    }
  }
`;
