import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { SurveyData } from "../../api/Survey";
import { Title } from "../title/Title";

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
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </>
  );
};
