import { RootState } from "@store";

//* Client State
export const getShowNavbar = (state: RootState) => state.client.showNavbar;
export const getColorTheme = (state: RootState) => state.client.colorTheme;
export const getCurrentYear = (state: RootState) => state.client.currentYear;
