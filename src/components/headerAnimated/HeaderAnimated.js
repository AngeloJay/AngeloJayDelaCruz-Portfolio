import React from 'react';
import TextSpan from './TextSpan';

const HeaderAnimated = ({ text, headingLevel = 'h1' }) => {
  const sentence = text.split('');
  const HeadingTag = headingLevel;

  return (
    <HeadingTag>
      {sentence.map((letter, index) => (
        <TextSpan key={index}>
          {letter === " " ? "\u00A0" : letter}
        </TextSpan>
      ))}
    </HeadingTag>
  );
};

export default HeaderAnimated;
