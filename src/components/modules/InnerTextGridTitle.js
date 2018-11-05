import React from 'react';

const InnerTextTitle = ({ titleSize, title }) => {
  return (
    <div className="text-grid-title">
      <h1 className={`text-grid-title__${titleSize}`}><a href="home">
        {title}
      </a></h1>
      </div>
  );
};

export default InnerTextTitle;
