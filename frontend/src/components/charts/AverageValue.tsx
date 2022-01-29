import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Title } from "../common/title/Title";

type Props = {
  average: string;
};

export const AverageValue: React.FC<Props> = ({ average }) => {
  return (
    <>
      <Title>{"The average amount is"}</Title>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={average}
          label="Amount"
          readOnly={true}
        />
      </FormControl>
    </>
  );
};
