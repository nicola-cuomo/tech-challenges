import { SurveyType } from "../../api/Survey";
import { convertType } from "../../utils/surveyUtils";
import { SurveyContainer } from "../common/SurveyContainer";
import { SurveyTableDataGrid } from "./SurveyTableDataGrid";

type Props = {
  type?: SurveyType;
};

export function SurveysTable({ type }: Props) {
  return (
    <SurveyContainer
      title={type != null ? convertType[type] : "All Surveys"}
      content={[<SurveyTableDataGrid type={type} />]}
    />
  );
}
