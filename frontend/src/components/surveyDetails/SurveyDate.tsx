import { SurveyData } from "../../api/Survey";
import { SurveyContainer } from "../common/SurveyContainer";

type Props = {
  data: SurveyData;
};

export const SurveyDate: React.FC<Props> = ({ data }) => {
  return <SurveyContainer title={"Survey Date Details"} content={[]} />;
};
