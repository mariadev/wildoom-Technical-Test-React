import React from 'react';

const PlayLink = ({ hiddePlay}) => ( 
<div className={`wrapper-text-grid__logo ${hiddePlay}`} >

<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>play webtv</title>
    <desc>Created with Sketch.</desc>
    <g id="play-webtv" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="Rectangle" stroke="#FFFFFF" stroke-width="3" fill-opacity="0.3" fill="#001E1C" x="1.5" y="1.5" width="97" height="97" rx="48.5"></rect>
        <polygon id="Triangle" fill="#00DB92" fill-rule="nonzero" points="69.129984 50 35.8085554 69.4375 35.8085554 30.5625"></polygon>
    </g>
</svg>
</div>
);

export default PlayLink;