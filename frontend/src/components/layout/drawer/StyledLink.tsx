import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};

const useStyles = makeStyles({
  surveyLink: { textDecoration: "none" },
});

export function StyledLink({ to, children }: Props) {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.surveyLink}>
      {children}
    </Link>
  );
}
