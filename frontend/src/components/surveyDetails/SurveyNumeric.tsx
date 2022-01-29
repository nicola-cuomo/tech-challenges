import { useMemo } from "react";
import { SurveyData } from "../../api/Survey";
import { calcAverage } from "../../utils/surveyUtils";
import { AverageValue } from "../charts/AverageValue";
import { ChartNumeric } from "../charts/ChartNumeric";
import { SurveyContainer } from "../common/SurveyContainer";

type Props = {
  data: SurveyData;
};

export const SurveyNumeric: React.FC<Props> = ({ data }) => {
  const content = [];

  const averageIntl = useMemo(() => {
    let average = 0;
    average = calcAverage(data.data.map((element) => Number(element.value)));
    return new Intl.NumberFormat("default", {
      style: "currency",
      currency: "EUR",
    }).format(average);
  }, [data]);

  content.push(<ChartNumeric data={data} />);
  content.push(<AverageValue average={`${averageIntl}`} />);
  return (
    <SurveyContainer
      title={"Survey Numeric Detail"}
      content={content}
    ></SurveyContainer>
  );
};
