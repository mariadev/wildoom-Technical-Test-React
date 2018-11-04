import React from 'react';

const PlayLink = ({logoGridPlay, hiddePlay}) => ( 
<img className={`wrapper-text-grid__logo ${hiddePlay}`} src={logoGridPlay} alt="link play"/>
);

export default PlayLink;