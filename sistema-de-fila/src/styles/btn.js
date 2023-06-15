import { cor2, cor3 } from "./palletCollors";

export const btn01 = {
    width: "583px",
    height: "75px",
    background: cor3,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    "&:hover": {
        backgroundColor: cor2,
    },
};
