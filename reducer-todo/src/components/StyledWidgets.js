import styled from 'styled-components';


//App
export const Header = styled.h1`
    text-align: center;
    font-size: 20px;
`;


//ToDo Form
export const Body = styled.body`
    background-color: #0A235C;
    width: 60%;
    margin: 0 auto;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    form {
        margin: 0 auto;
        margin-top: 20px;
    }

    .add-btn-container {
        text-align: center;
        margin-top: 20px;
    }

    .clear-btn-container {
        text-align: center;
    }
`;