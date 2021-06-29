import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState({mobile, linkedIn, mail}) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div> 
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
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

              <div>
                <p>{mobile}</p>
                <p>{linkedIn}</p>
                <p>{mail}</p>
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
