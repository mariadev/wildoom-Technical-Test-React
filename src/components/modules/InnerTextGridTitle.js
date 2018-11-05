import React from 'react';

const InnerTextTitle = ({ titleSize, title }) => {
  return (
    <div className="text-grid-title">
      <a href="home" className={`text-grid-title__${titleSize}`}>
        {title}
      </a>
      </div>
  );
};

export default InnerTextTitle;
