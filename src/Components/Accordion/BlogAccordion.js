import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import { IoMdArrowDropdown } from "react-icons/io";

import React from "react";

export default function BlogAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      className="container Accordion-wrapper"
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        className="AccordionSummary"
        expandIcon={
          <IoMdArrowDropdown
            className="arrow-icon icon-mobile"
            fill="#000"
            size={40}
          />
        }
      >
        <div className="d-flex justify-content-between w-100 accordion-text">
          <h2 className="fs-45">{props.text}</h2>
        </div>
      </AccordionSummary>
      <AccordionDetails className="AccordionDetails">
        {props.card}
      </AccordionDetails>
    </Accordion>
  );
}
