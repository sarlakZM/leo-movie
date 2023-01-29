import StyledDiv from "./ErrorMessage.styles";

import { PropsType } from "types/App.types";

const ErrorMessage = ({ children }: PropsType) => {
  return (
    <StyledDiv>
      {children}
      <img src={`${process.env.PUBLIC_URL}/assets/no-results.gif?`} />
    </StyledDiv>
  );
};

export default ErrorMessage;
