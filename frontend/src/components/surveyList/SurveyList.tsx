import { SurveyType } from "../../api/Survey";
import { convertType } from "../../utils/surveyUtils";
import { SurveyTable } from "./SurveyTable";
import { SurveyContainer } from "../common/SurveyContainer";

type Props = {
  type?: SurveyType;
};

export function SurveysTable({ type }: Props) {
  return (
    <SurveyContainer
      title={type != null ? convertType[type] : "All Surveys"}
      content={[<SurveyTable type={type} />]}
    />
  );
}
