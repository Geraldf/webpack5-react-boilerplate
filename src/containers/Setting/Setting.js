import React from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import PaletteIcon from "@material-ui/icons/Palette";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import HttpIcon from "@material-ui/icons/Http";
import { useSelector, useDispatch } from "react-redux";

import {
  toggleThemeMode,
  swapThemeColors,
  isDarkMode,
  isColorSwaped,
  getURL,
  getPort,
  saveConfig,
} from "./settingsReducer";

export default function Setting() {
  const darkMode = useSelector(isDarkMode);
  const colorSwaped = useSelector(isColorSwaped);
  const url = useSelector(getURL);

  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h5">Settings</Typography>
      <Card>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <PaletteIcon />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={(e, checked) => dispatch(toggleThemeMode(checked))}
                  checked={darkMode}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CompareArrowsIcon />
              </ListItemIcon>
              <ListItemText primary="Swap Colors" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={(e, checked) => dispatch(swapThemeColors(checked))}
                  checked={colorSwaped}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HttpIcon />
              </ListItemIcon>
              <ListItemText primary="Set API URL" />
              <ListItemSecondaryAction>
                <TextField
                  defaultValue={url}
                  onChange={(e, f) => dispatch(getURL(f.target.value))}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => dispatch(saveConfig({ darkMode, colorSwaped, url }))}
          >
            Save Configuration
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
