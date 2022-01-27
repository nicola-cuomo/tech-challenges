export interface SurveyList {
  surveys: Survey[];
}

export interface Survey {
  name: string;
  code: string;
  type: SurveyType;
}

export type SurveyType = "QCM" | "DATE" | "NUMERIC";
