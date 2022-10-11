import React from 'react';

function LinkBlock({ link, label, className }) {
  return (
    <div className={`${className} linkBlock`}>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        {label}
      </a>
    </div>
  );
}

LinkBlock.defaultProps = {
  link: 'https://google.com',
  label: 'Google',
};

export default LinkBlock;
