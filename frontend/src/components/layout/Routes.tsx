import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";

export const SurveyRoutes: React.FC = () => {
  const SurveysTable = lazy(() => import("../surveyList/SurveyList"));
  const SurveyDetails = lazy(() => import("../surveyDetails/SurveyDetails"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SurveysTable />} />
        <Route path="qcm" element={<SurveysTable type="QCM" />} />
        <Route path="numeric" element={<SurveysTable type="NUMERIC" />} />
        <Route path="date" element={<SurveysTable type="DATE" />} />
        <Route path="surveyDetail">
          <Route path=":code" element={<SurveyDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
