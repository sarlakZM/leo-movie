import styled from "@emotion/styled";

const StyledDiv = styled("div")`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;

  & > img {
    margin: 0 0 0 auto;
    display: block;
    position: relative;
  }

  & > div {
    position: absolute;
    left: 40px;
  }
`;

export default StyledDiv;
