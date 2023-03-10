import { Button } from "@mui/material";


export default function ButtonSytled({ label, variant }: { label: string, variant: "outlined" | "contained" }) {
    return (
        <Button variant={variant} sx={variant == "contained" ? {
            backgroundColor: "#00606C",
            "&:hover": {
                backgroundColor: "#00606C"
            }
        } : {
            borderColor: "#00606C",
            color: "white",
            "&:hover": {
                borderColor: "#00606C"
            }
        }}>
            {label}
        </Button>
    );
}
