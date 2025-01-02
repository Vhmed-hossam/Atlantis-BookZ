import React from 'react';

const Text = ({ locationTitle, addressLine1, addressLine2, webTitle, copyright , Aboutfreelancer , Freelancer }) => (
  <>
    {locationTitle ? <div >{locationTitle}</div> : null}
    {addressLine1 ? <div >{addressLine1}</div> : null}
    {addressLine2 ? <div >{addressLine2}</div> : null}
    {webTitle ? <div >{webTitle}</div> : null}
    {copyright ? <div >{copyright}</div> : null}
    {Aboutfreelancer ? <div >{Aboutfreelancer}</div> : null}
    {Freelancer ? <div >{Freelancer}</div> : null}
  </>
);

export default Text;
