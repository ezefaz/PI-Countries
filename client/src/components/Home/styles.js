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
    width: 90%;
    padding: 1rem 4rem;
`;

export const CardsBox = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 2rem;
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