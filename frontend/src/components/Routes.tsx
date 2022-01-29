import { Route, Routes } from "react-router-dom";
import { SurveyDetails } from "./surveyDetails/SurveyDetails";
import { SurveysTable } from "./surveyList/SurveyList";

export const SurveyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SurveysTable />} />
      <Route path="qcm" element={<SurveysTable type="QCM" />} />
      <Route path="numeric" element={<SurveysTable type="NUMERIC" />} />
      <Route path="date" element={<SurveysTable type="DATE" />} />
      <Route path="surveyDetail">
        <Route path=":code" element={<SurveyDetails />} />
      </Route>
    </Routes>
  );
};
