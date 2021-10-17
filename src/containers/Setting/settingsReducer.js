import indigo from "@material-ui/core/colors/indigo";
import green from "@material-ui/core/colors/green";
import gray from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blueGrey } from "@material-ui/core/colors";
import { wconfig } from "../../services/config.service";

const primaryColor = blueGrey;
const secondaryColor = green;

// First, create the thunk
export const saveConfig = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    ret = wconfig(userId);
  }
);

const themeConfig = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
};

// All the following keys are optional.
// We try our best to provide a great default value.
const defaultTheme = themeConfig;

export const settings = createSlice({
  name: "settings",
  initialState: {
    theme: defaultTheme,
    darkMode: false,
    colorsSwaped: false,
    apiURL: "http://localhost",
    apiPort: "4000",
  },
  reducers: {
    toggleThemeMode: (state, action) => {
      if (action.payload) {
        //darknode set
        state.darkMode = true;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
            type: "dark",
          },
        };
      } else {
        state.darkMode = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...themeConfig.palette,
            primary: state.theme.palette.primary,
            secondary: state.theme.palette.secondary,
          },
        };
      }

      state.value = action.payload;
    },
    swapThemeColors: (state, action) => {
      if (action.payload) {
        // colorsSwaped
        state.colorsSwaped = true;
        state.theme = {
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: secondaryColor,
            secondary: primaryColor,
          },
        };
      } else {
        state.colorsSwaped = false;
        state.theme = {
          ...themeConfig,
          palette: {
            ...state.theme.palette,
            primary: primaryColor,
            secondary: secondaryColor,
          },
        };
      }
    },
    setUrl: (state, action) => {
      const a = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveConfig.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

export const { toggleThemeMode, swapThemeColors } = settings.actions;

export const isDarkMode = (state) => state.settings.darkMode;

export const isColorSwaped = (state) => state.settings.colorsSwaped;

export const getTheme = (state) => state.settings.theme;
export const getURL = (state) => state.settings.apiURL;
export const getPort = (state) => state.settings.apiPort;

export default settings.reducer;
