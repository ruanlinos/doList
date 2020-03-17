import styled from 'styled-components';

type TVisible = {
  visible: boolean;
};

export const Wrapper = styled.div<TVisible>`
  display: ${props => (props.visible ? 'flex' : 'none')};
  padding: 14px;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 158px;
  height: 142px;
  right: 74px;
  top: 29px;
  background: #fbfcff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

export const KeyContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  &:nth-of-type(4) {
    margin-bottom: 0;
  }
`;
export const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #331cbf;
  border-radius: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  margin-bottom: 0;
  color: #fff;
  padding: 5px;
  min-width: 27.23px;
`;
export const KeyFunction = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
  font-size: 11px;
  line-height: 13px;
  color: #a9aab6;
  justify-content: flex-start;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  position: fixed;
  right: 50px;
  top: 25px;
`;
