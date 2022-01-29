import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SurveyList, SurveyType } from "../../api/Survey";
import { useService } from "../../hooks/useService";
import { convertTypeIcon } from "../../utils/surveyUtils";

export type TableSurveyProps = {
  type?: SurveyType;
};

export const SurveyTable: React.FC<TableSurveyProps> = ({ type }) => {
  const { isLoading, isError, data, error } = useService<SurveyList>();
  const navigate = useNavigate();

  const filteredData = data?.surveys.filter((survey) =>
    type == null ? true : survey.type === type
  );

  if (isLoading) {
    return <CircularProgress sx={{ left: "50%", top: "50%" }} />;
  }

  if (isError) {
    return <Typography variant="caption">{error?.message}</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData?.map((row) => {
            const IconType = convertTypeIcon[row.type];
            return (
              <TableRow
                key={row.code}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  ":hover": { backgroundColor: "#1976d259" },
                }}
                onClick={() => navigate(`/surveyDetail/${row.code}`)}
              >
                <TableCell component="th" scope="row">
                  <Typography>{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <IconType />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
