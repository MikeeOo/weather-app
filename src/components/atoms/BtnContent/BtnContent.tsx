import {IBtnContent} from "./BtnContent.types";
import {BtnContentStyled} from "./BtnContent.styled";

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