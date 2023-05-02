import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 200px auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  align-items: center;
  padding: 20px 0;
  form {
    width: 70%;
    display: flex;
    gap: 20px;
    flex-direction: column;

    input,
    button {
      height: 30px;
    }
    button {
      background: #00cc66;
      color: #fff;
      border: none;
      border-radius: 4px;
      :hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
`;
