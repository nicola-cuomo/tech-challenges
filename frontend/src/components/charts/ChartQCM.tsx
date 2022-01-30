import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { SurveyData } from "../../api/Survey";
import { Title } from "../common/title/Title";

type Props = {
  data: SurveyData;
};

export const ChartQCM: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Title>{data.title}</Title>
      <BarChart
        width={500}
        height={300}
        data={data.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#FF8633" />
      </BarChart>
    </>
  );
};
