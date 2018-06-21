import React, { Fragment } from 'react';

export default ({name, born, description, image, deceased}) => 
  <Fragment >
        <img style={{maxWidth: 260}} src={image} alt={name}/>
        <h1>{name}</h1>
        <h2>{born} &mdash; {deceased}</h2>
        <h2>{description}</h2>
  </Fragment>
