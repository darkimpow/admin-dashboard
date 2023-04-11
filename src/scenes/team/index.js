import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam} from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.colors.palette.mode);

    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name" , headerName: "Name",
        flex: 1,
        cellCLassName: "name-column--cell",
        },
        {field: "age" , headerName: "Age",
            type: "number",
            headerAlign:"left",
            align: "left",
        },
        {field: "phone" , headerName: "Phone Number",
        flex: 1,

        },
    ];

    return(
        <Box>
            <Header title="TEAM" subtitle="Managing the team Members" />
            <Box>
                <DataGrid columns={columns} rows={mockDataTeam} />

            </Box>
        </Box>
    )
}

export default Team;
