import styled from 'styled-components';

export const FormWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

export const FormTitle = styled.h2`
    text-align: center;
    color: #009688;
    margin-bottom: 20px;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    background-color: #009688;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    display: block;
    width: 100%;
    text-align: center;

    &:hover {
        background-color: #00796b;
    }
`;

