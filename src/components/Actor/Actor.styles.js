import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 2rem;
    padding: .5rem;
    text-align: center;

    h3{
        margin: 1rem 0 0 0;
    }

    p{
        margin: .5rem;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 20rem;
    display: block;
    object-fit: cover;
    border-radius: 2rem;
`;