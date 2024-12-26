import React, {useState} from "react";
import {
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
    Button,
    IconButton
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AttachFileIcon from "@mui/icons-material/AttachFile";

interface TranslationControlsProps {
    onSendMessage: (
        content: string,
        inputLanguage: string,
        outputLanguage: string,
        inputType: string,
        outputType: string
    ) => void;
}

const TranslationControls: React.FC<TranslationControlsProps> = ({onSendMessage}) => {
    const [inputText, setInputText] = useState<string>("");
    const [inputLanguage, setInputLanguage] = useState("English");
    const [outputLanguage, setOutputLanguage] = useState("French");
    const [inputType, setInputType] = useState("Text");
    const [outputType, setOutputType] = useState("Text");
    const [isFileSelected, setIsFileSelected] = useState(false);

    const handleSwapLanguages = () => {
        const temp = inputLanguage;
        setInputLanguage(outputLanguage);
        setOutputLanguage(temp);
    };

    const handleSend = () => {
        if (inputText.trim() === "") return;
        onSendMessage(inputText, inputLanguage, outputLanguage, inputType, outputType);
        setInputText("");
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setInputType("Speech");
            setIsFileSelected(true);
        } else {
            setInputType("Text");
            setIsFileSelected(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <Box display="flex" flexDirection="column" gap={2} paddingTop={2} width="100%">
            {/* Text Input and Send Button */}
            <Box
                display="flex"
                flexDirection="row"
                gap={2}
                width="60%"
                margin="0 auto" // Center align the container
            >
                <input
                    accept="audio/*"
                    style={{display: "none"}}
                    id="audio-file-input"
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="audio-file-input">
                    <IconButton color="primary" component="span">
                        <AttachFileIcon />
                    </IconButton>
                </label>
                <TextField
                    fullWidth
                    label="Type your message"
                    variant="outlined"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    multiline
                    disabled={isFileSelected}
                    slotProps={{
                        input: {style: {color: "#FFFFFF"}},
                        inputLabel: {style: {color: "#FFFFFF"}}
                    }}
                    sx={{
                        marginRight: "10px",
                        color: "#FFFFFF",
                        borderRadius: "5px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FFFFFF"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FFFFFF"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FFFFFF"
                        }
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSend}
                    endIcon={<SendIcon />}
                    sx={{
                        minWidth: "100px",
                        height: "56px",
                        alignSelf: "flex-start"
                    }}
                >
                    Send
                </Button>
            </Box>

            {/* Language Selector Controls */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                paddingTop={2}
                gap={2}
                width="100%"
                maxWidth="500px" // Match the width of the above controls
                margin="0 auto" // Add spacing and center align the container
            >
                {/* Input Language */}
                <FormControl variant="outlined" sx={{flex: 1}}>
                    <InputLabel style={{color: "#FFFFFF"}}>Input Language</InputLabel>
                    <Select
                        value={inputLanguage}
                        onChange={(e) => setInputLanguage(e.target.value)}
                        label="Input Language"
                        IconComponent={(props) => (
                            <ArrowDropDownIcon {...props} style={{color: "#FFFFFF"}} />
                        )}
                        sx={{
                            color: "#FFFFFF",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#90CAF9"
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#FFFFFF"
                            }
                        }}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="French">French</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                    </Select>
                </FormControl>

                {/* Swap Button */}
                <Button
                    onClick={handleSwapLanguages}
                    variant="contained"
                    sx={{
                        bgcolor: "#00BCD4",
                        "&:hover": {bgcolor: "#00ACC1"},
                        color: "#FFFFFF",
                        minWidth: "40px", // Ensure consistent button size
                        padding: "8px"
                    }}
                >
                    <SwapHorizIcon />
                </Button>

                {/* Output Language */}
                <FormControl variant="outlined" sx={{flex: 1}}>
                    <InputLabel style={{color: "#FFFFFF"}}>Output Language</InputLabel>
                    <Select
                        value={outputLanguage}
                        onChange={(e) => setOutputLanguage(e.target.value)}
                        label="Output Language"
                        IconComponent={(props) => (
                            <ArrowDropDownIcon {...props} style={{color: "#FFFFFF"}} />
                        )}
                        sx={{
                            color: "#FFFFFF",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#90CAF9"
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#FFFFFF"
                            }
                        }}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="French">French</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                    </Select>
                </FormControl>

                {/* Output Type */}
                <FormControl variant="outlined" sx={{flex: 1}}>
                    <InputLabel style={{color: "#FFFFFF"}}>Output Type</InputLabel>
                    <Select
                        value={outputType}
                        onChange={(e) => setOutputType(e.target.value)}
                        label="Output Type"
                        IconComponent={(props) => (
                            <ArrowDropDownIcon {...props} style={{color: "#FFFFFF"}} />
                        )}
                        sx={{
                            color: "#FFFFFF",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#90CAF9"
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#FFFFFF"
                            }
                        }}
                    >
                        <MenuItem value="Text">Text</MenuItem>
                        <MenuItem value="Speech">Speech</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};

export default TranslationControls;
