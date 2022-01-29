import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
} from "@mui/material";
import { SurveyData } from "../../api/Survey";
import { convertDate } from "../../utils/surveyUtils";
import { SurveyContainer } from "../common/SurveyContainer";

type Props = {
  data: SurveyData;
};

export const SurveyDate: React.FC<Props> = ({ data }) => {
  const DateTable = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{data.title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data?.map((row) => {
            const dateConverted = convertDate(String(row.value));
            return (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  ":hover": { backgroundColor: "#1976d259" },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography>{dateConverted}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
  return (
    <SurveyContainer title={"Survey Date Details"} content={[DateTable]} />
  );
};
