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
import { useQuery } from "react-query";

interface SurveyList {
  surveys: Survey[];
}

interface Survey {
  name: string;
  code: string;
  type: "QCM" | "Date" | "Numeric";
}

export const TableSurvey: React.FC = () => {
  const { isLoading, isError, data, error } = useQuery<SurveyList, Error>(
    "allSurveys",
    async () => {
      const response = await fetch("/api/list.json");
      if (!response.ok) {
        throw new Error("Error getting data");
      }
      return response.json();
    }
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
          {data?.surveys.map((row) => (
            <TableRow
              key={row.code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
