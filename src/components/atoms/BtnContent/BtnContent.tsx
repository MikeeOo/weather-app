import {BtnContentStyled} from "./BtnContent.styled";
import {IBtnContent} from "./BtnContent.types";

const BtnContent = ({text, icon, content}: IBtnContent): JSX.Element => {

  return (

      <BtnContentStyled>

          {content === "iconText" ?
                  <>
                      <span style={{
                          display: `flex`,
                          alignItems: `center`,
                          paddingRight: `.5em` }}>

                          {icon}
                      </span>
                      <span>{text}</span>
                  </>
              : <>{icon}</>}
      </BtnContentStyled>
  );
};

export default BtnContent;