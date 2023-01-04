export const flexBox = ({jc = false, ai = false}: {jc?: string | boolean, ai?: string | boolean}): string => `
  display: flex;
  ${jc ? `justify-content: ${jc};` : ""}
  ${ai ? `align-items: ${ai};` : ""}
`;