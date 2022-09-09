import React from "react";

interface Props {
  title: string;
  elements: string[];
}

const FooterLinksBlock: React.FC<Props> = ({ title, elements }) => {
  return (
    <div className="footer-links__block">
      <span>{title}</span>
      <ul>
        {elements.map((element) => (
          <li>
            <a href="#">{element}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksBlock;
