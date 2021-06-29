import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import './Popover.css'

export default function PopoverPopupState({mobile, linkedIn, mail, name}) {
  return (
    <PopupState className="popover" variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div> 
          <div className="popoverPhones" color="transparent" {...bindTrigger(popupState)}>
            
          </div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <Box p={2}>

              <div className="contact-details">
                <h3>{name}</h3>
                <p>Phone: +91 {mobile}</p>
                <p>email: {mail}</p>
                <a href={linkedIn}>LinkedIn Profile</a>
              </div>
              


              {/* <Typography>{mobile}</Typography>
              <Typography>{linkedIn}</Typography>
              <Typography>{mail}</Typography> */}
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
