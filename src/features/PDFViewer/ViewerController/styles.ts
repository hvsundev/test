import styled from "@emotion/styled";

export const ViewerController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FileName = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const ScaleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > span {
    font-size: 14px;
  }
`;
