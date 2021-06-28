import { DialogContent } from '@material-ui/core';
import React from 'react'

import {Dialog, DialogTitle} from '@material-ui/core'

function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props;

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>title goes </div>
            </DialogTitle>
            
            <DialogContent>
                <div>Content goes</div>
            </DialogContent>

        </Dialog>
    )
}

export default Popup
