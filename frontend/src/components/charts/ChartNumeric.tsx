import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { SurveyData } from "../../api/Survey";
import { Title } from "../common/title/Title";

type Props = {
  data: SurveyData;
};

export const ChartNumeric: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Title>{data.title}</Title>
      <LineChart
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
        <Line
          type={"monotone"}
          dataKey={"value"}
          stroke="#8884d8"
          strokeWidth={2}
        ></Line>
      </LineChart>
    </>
  );
};
