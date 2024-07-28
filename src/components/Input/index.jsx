import React from 'react';
import {Stack,Typography,TextField,FormControl,FormControl,InputAdornment,IconButton, useTheme} from "@mui/material";

const Input = (props) => {
    const { field, label, type, props, touched, errors } = props
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const theme = useTheme();
    const { mode } = theme.palette;
    return (
        <Stack variant="input">
            <Typography variant="label">{label}</Typography>
            {type !== "password" ? (
                <TextField
                    {...field}
                    {...props}
                    type={type}
                    error={touched[field.name] && Boolean(errors[field.name])}
                    sx={{
                        "& :-webkit-autofill": {
                            WebkitBoxShadow: `0 0 0px 40rem ${mode === "light" ? "#f5f5f7" : "#3d3e43"} inset !important`,
                        },
                    }}
                />
            ) : (
                <FormControl variant="outlined">
                    <OutlinedInput
                        {...field}
                        {...props}
                        error={touched[field.name] && Boolean(errors[field.name])}
                        type={showPassword ? "text" : "password"}
                        sx={{
                            "& :-webkit-autofill": {
                                // WebkitTextFillColor: mode === "light" ? "" : "#3d3e43",
                                WebkitBoxShadow: `0 0 0px 40rem ${mode === "light" ? "#f5f5f7" : "#3d3e43"} inset !important`,
                                borderRadius: "0 !important",
                            },
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            )}
            <ErrorMessage name={field.name} component={Typography} variant="error" />
        </Stack>
    );
};

export default Input;