import { SvgIcon } from "@mui/material";
import { SurveyType } from "../api/Survey";
import ListIcon from "@mui/icons-material/List";
import EventIcon from "@mui/icons-material/Event";
import Filter1Icon from "@mui/icons-material/Filter1";

export const convertType: Record<SurveyType, string> = {
  QCM: "Multiple choice question",
  DATE: "Date choice question",
  NUMERIC: "Numeric choice question",
};

export const convertTypeIcon: Record<SurveyType, typeof SvgIcon> = {
  QCM: ListIcon,
  DATE: EventIcon,
  NUMERIC: Filter1Icon,
};
