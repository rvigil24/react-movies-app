import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 20rem;
    height: 6rem;
    border-radius: 3rem;
    color: var(--white);
    font-size: var(--fontBig);
    margin: 2rem auto;
    transition: all .5s;
    cursor: pointer;

    :hover{
        opacity: .7;
    }
`;