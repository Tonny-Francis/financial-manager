import { Box } from "@mui/material";
import Home from "./Pages/Home";

function App() {
    return (
        <Box sx={{
            height: "100vh"
        }} className='w-full flex flex-col bg-primary'>
            <Home />
        </Box>
    );
}

export default App;
