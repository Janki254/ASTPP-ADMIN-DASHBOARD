import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
    className?: string;
    message?: string;
}

const Loader = (props: Props) => {
    return (
        <Grid container justifyContent="center" className={`progress-loader ${props.className}`} m={1}>
            <CircularProgress disableShrink />
            <span>{props.message}</span>
        </Grid>
    );
};

export default Loader;
