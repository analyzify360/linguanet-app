import React from "react";
import {Box, Typography} from "@mui/material";

interface TranslationOutputProps {
    outputText: string;
}

const TranslationOutput: React.FC<TranslationOutputProps> = ({outputText}) => {
    return (
        <Box
            sx={{
                marginTop: "20px",
                padding: "10px",
                border: "1px solid gray",
                borderRadius: "8px",
                backgroundColor: "#202020",
                color: "white"
            }}
        >
            <Typography>{outputText}</Typography>
        </Box>
    );
};

export default TranslationOutput;
