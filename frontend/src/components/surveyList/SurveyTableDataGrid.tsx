import { CircularProgress, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { SurveyList, SurveyType } from "../../api/Survey";
import { useService } from "../../hooks/useService";

export type TableSurveyProps = {
  type?: SurveyType;
};

export const SurveyTableDataGrid: React.FC<TableSurveyProps> = ({ type }) => {
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

  if (filteredData == null || filteredData.length === 0) {
    return <Typography variant="h4">NO DATA FOUND</Typography>;
  }

  const rows: GridRowsProp = filteredData?.map((element) => ({
    id: element.code,
    ...element,
  }));

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "code", headerName: "Code", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
  ];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            autoHeight
            rows={rows!}
            columns={columns}
            onRowClick={(params, event) =>
              navigate(`/surveyDetail/${params.id}`)
            }
          />
        </div>
      </div>
    </div>
  );
};
