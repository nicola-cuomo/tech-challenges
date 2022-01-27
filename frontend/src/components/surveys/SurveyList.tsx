import { SurveyType } from "../../api/Survey";
import { SurveyTable } from "../common/SurveyTable";
import { SurveyContainer } from "./SurveyContainer";

type Props = {
  type?: SurveyType;
};

export function SurveyList({ type }: Props) {
  return (
    <SurveyContainer title={type ?? "All Surveys"}>
      <SurveyTable type={type} />
    </SurveyContainer>
  );
}
