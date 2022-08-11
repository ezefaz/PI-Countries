import styled from 'styled-components';

export const Container = styled.div` 
    width: 100%;
    height: 100vh;
    background: white;
`;

export const SubContainer = styled.div` 
    width: 100%;
    margin-left: auto;
`;

export const FilterContainer = styled.div` 
    display: inline-flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;
`;

export const CardsBox = styled.div` 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    

`;

export const Filtering = styled.select`
    display: flex;
    justify-items: center;
    align-items: center;
    width: fit-content;
    margin: 0 2rem;
    border-radius: 10px;
    border:none;
    border: solid black;
    font-size: large;
    cursor: pointer;
`;

export const Refresh = styled.button`
    display: flex;
    height: 3rem;
    justify-content: center;
    padding: 0.7rem;
    width: 80%;
    margin: 0 1rem;
    border-radius: 10px;
    border: solid black;
    font-size: large;
    cursor: pointer;
`
  