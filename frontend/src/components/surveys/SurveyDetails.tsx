import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { SurveyContainer } from "./SurveyContainer";

export const SurveyDetails: React.FC = () => {
  const { code } = useParams();

  const { isError, isLoading, data, error } = useService(code);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError || data == null) {
    return (
      <SurveyContainer
        title={`No survey found with code ${code}`}
      ></SurveyContainer>
    );
  }

  return (
    <SurveyContainer title={`Survey Detail '${code}'`}>
      {JSON.stringify(data)}
    </SurveyContainer>
  );
};
