import { Typography } from "@mui/material";
import { Title } from "../title/Title";

type Props = {
  average: number;
};

export const AverageValue: React.FC<Props> = ({ average }) => {
  return (
    <>
      <Title>{"The average value is"}</Title>
      <Typography variant="h3">{average}</Typography>
    </>
  );
};
