import styled from 'styled-components';

export const BoardWrapper = styled.div`
   max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
background-color: rgba(255, 0, 0, 0.3);
  border: 2px solid red;
`;

export const BoardBox = styled.div`
    max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
   background-color: rgba(0, 0, 255, 0.3);
  border: 2px solid blue;
`;

export const BoardTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

export const EventList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;


