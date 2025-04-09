import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is Poetry House Party?',
    answer: 'Poetry House Party or PHP is an intimate community gathering where like-minded people come together to share ideas, recite poetries, enjoy games, and have fun.'
  },
  {
    question: 'Can only poets join this house party?',
    answer: 'Details about this question...'
  },
  {
    question: 'Why is the location a secret?',
    answer: 'Details about this question...'
  },
  {
    question: 'When will the location be revealed?',
    answer: 'Details about this question...'
  },
  {
    question: 'How long does the PHP last?',
    answer: 'Details about this question...'
  },
  {
    question: 'Are there specific slots open?',
    answer: 'Details about this question...'
  },
  {
    question: 'Is there any dress code?',
    answer: 'Details about this question...'
  }
];

const FAQs = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQs;
