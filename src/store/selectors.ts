import { RootState } from "src/store";

//* Client State
export const getShowNavbar = (state: RootState) => state.client.showNavbar;
export const getColorTheme = (state: RootState) => state.client.colorTheme;
