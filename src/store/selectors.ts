import { RootState } from "@store";

//* Client State
export const getColorTheme = (state: RootState) => state.client.colorTheme;
