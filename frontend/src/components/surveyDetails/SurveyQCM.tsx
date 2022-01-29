import { SurveyData } from "../../api/Survey";
import { ChartQCM } from "../charts/ChartQCM";
import { SurveyContainer } from "../common/SurveyContainer";

type Props = {
  data: SurveyData;
};

export const SurveyQCM: React.FC<Props> = ({ data }) => {
  return (
    <SurveyContainer
      title={"Survey QCM Detail"}
      content={[<ChartQCM data={data} />]}
    />
  );
};
