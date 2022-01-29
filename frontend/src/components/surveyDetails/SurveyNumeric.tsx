import { SurveyData } from "../../api/Survey";
import { AverageValue } from "../charts/AverageValue";
import { ChartNumeric } from "../charts/ChartNumeric";
import { SurveyContainer } from "../common/SurveyContainer";

type Props = {
  data: SurveyData;
};

export const SurveyNumeric: React.FC<Props> = ({ data }) => {
  const content = [];

  const average = Math.round(
    data.data.reduce((sum, current) => (sum += current.value), 0) /
      data.data.length
  );

  content.push(<ChartNumeric data={data} />);
  content.push(<AverageValue average={average} />);
  return (
    <SurveyContainer
      title={"Survey Numeric Detail"}
      content={content}
    ></SurveyContainer>
  );
};
