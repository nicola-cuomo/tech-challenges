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

export function convertDate(date: string): string {
  let result = new Date();

  try {
    result = new Date(date);
  } catch (error) {}

  return dateIntl(result);
}

export function dateIntl(date: Date): string {
  let result = "";
  try {
    result = new Intl.DateTimeFormat("default").format(date);
  } catch (error) {}
  return result;
}

export function calcAverage(data: number[]): number {
  let result = 0;

  try {
    result = Math.round(
      data.reduce((sum, current) => {
        const currentNumber = current;
        if (Number.isNaN(currentNumber)) {
          return sum;
        }

        return (sum += Number(currentNumber));
      }, 0) / data.length
    );
  } catch (error) {}

  return result;
}
