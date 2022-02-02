import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { SurveyData } from "../../api/Survey";
import { useService } from "../../hooks/useService";
import { SurveyContainer } from "../common/SurveyContainer";
import { SurveyModal } from "../common/SurveyModal";
import { SurveyDate } from "./SurveyDate";
import { SurveyNumeric } from "./SurveyNumeric";
import { SurveyQCM } from "./SurveyQCM";

const SurveyDetails: React.FC = () => {
  const { code } = useParams();

  const { isError, isLoading, data, error } = useService<SurveyData>(code);

  if (isLoading) {
    return (
      <SurveyContainer title={"Loading..."} content={[<CircularProgress />]} />
    );
  }

  if (isError || data == null) {
    const title = `No survey found with code ${code}`;
    return (
      <SurveyContainer
        title={title}
        content={[<SurveyModal title="Error" content={title} />]}
      />
    );
  }

  switch (data.type) {
    case "QCM":
      return <SurveyQCM data={data} />;
    case "NUMERIC":
      return <SurveyNumeric data={data} />;
    case "DATE":
      return <SurveyDate data={data} />;
    default:
      return (
        <SurveyContainer title={`Type ${data.type} not found`} content={[]} />
      );
  }
};

export default SurveyDetails;
