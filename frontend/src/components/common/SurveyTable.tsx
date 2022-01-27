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
import { useService } from "../../hooks/useService";

export type TableSurveyProps = {
  type?: string;
};

export const SurveyTable: React.FC<TableSurveyProps> = ({ type }) => {
  const { isLoading, isError, data, error } = useService();
  const navigate = useNavigate();

  const filteredData = data?.surveys.filter((survey) =>
    type == null ? true : survey.type === type
  );

  if (isLoading) {
    return <CircularProgress />;
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
          {filteredData?.map((row) => (
            <TableRow
              key={row.code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => navigate(`/surveyDetail/${row.code}`)}
            >
              <TableCell component="th" scope="row">
                <Typography>{row.name}</Typography>
              </TableCell>
              <TableCell>{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
