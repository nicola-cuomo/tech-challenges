import React from "react";
import { useService } from "../../hooks/useService";
import { TableSurveyProps } from "../surveyList/SurveyTable";

export function withService(
  TableSurvey: React.FC<TableSurveyProps>,
  surveyId = "list"
) {
  // return ({ ...props }) => {
  //   const { isLoading, isError, data, error } = useService(surveyId);
  //   return (
  //     <TableSurvey
  //       isLoading={isLoading}
  //       isError={isError}
  //       data={data}
  //       error={error}
  //       {...props}
  //     />
  //   );
  // };
}
