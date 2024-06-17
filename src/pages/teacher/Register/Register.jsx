import * as React from "react";


import Attendence from "./Components/Attendence";
import { styled } from "@mui/material/styles";
import ReactScheduler from "./Components/ReactScheduler";
import Table from "./Components/Table";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const Register = ({ open }) => {
    const [tagName, setTagName] = React.useState({
        course: "",
        branch: "",
        drop: ""
    });
    // console.log(tagName)

    const course = ["None", "BTech", "Bca", "BPharma", "Mca", "MTech"];
    const branch = ["None", "CSE", "IT", "Civil", "Chemical", "Bca"];
    const year = ["None", "First", "Second", "Third", "Forth"];
    return (
        <>
            <Main open={open}>
                <DrawerHeader />
                <div style={{ display: "flex", justifyContent: "space-between" }} >
                    <Attendence drop={course} name="course" setTagName={setTagName} />
                    <Attendence drop={branch} name="branch" setTagName={setTagName} />
                    <Attendence drop={year} name="year" setTagName={setTagName} />
                </div>
                {/* <ReactScheduler /> */}
                <Table />
            </Main>
        </>
    )
}

export default Register