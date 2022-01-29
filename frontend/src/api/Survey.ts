export interface SurveyList {
  surveys: Survey[];
}

export interface Survey {
  name: string;
  code: string;
  type: SurveyType;
}

export type SurveyData = {
  type: SurveyType;
  title: string;
  data: { name: string; value: number }[];
};

export type SurveyType = "QCM" | "DATE" | "NUMERIC";
