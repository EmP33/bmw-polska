import React from "react";
import { PrimaryButton } from "../../Components.styles";
import { Container } from "./Greetings.styles";

interface Props {
  handleGreetings: () => void;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Greetings: React.FC<Props> = ({ handleGreetings }) => {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="wrapper">
        <h3>DZIĘKUJEMY</h3>
        <p>Skontaktujemy się z Tobą w najbliższym możliwym terminie.</p>
        <PrimaryButton onClick={handleGreetings}>OK</PrimaryButton>
      </div>
    </Container>
  );
};

export default Greetings;
