import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #DADADA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 40%;
    height: 70vh
`

export const Grid = styled.div`
    display: grid;
    height: 100%;
    grid-gap: 0.15rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    -webkit-box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`