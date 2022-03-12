import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import "./linksmenu.css"

export default function LinksMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            sx={{
              "&.MuiButton-root": {
                backgroundColor: "black",
                color: "#10DDE3",
              },
            }}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            Github Link
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <a href="https://github.com/IMGIITRoorkee/omniport-frontend-marketplace/tree/develop" target="_blank" className='menu-item'>
                Frontend
              </a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <a href="https://github.com/IMGIITRoorkee/omniport-app-marketplace/tree/views" target="_blank" className='menu-item'>
                Backend
              </a>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
