import styled from "styled-components";
import { TextField } from "@mui/material";
import { Button } from "../Button/Button.tsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export const FormPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: "onChange",
    });
    const [submitted, setSubmitted] = useState(false);
    const [serverMessage, setServerMessage] = useState("");

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("http://localhost:3001/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const responseData = await response.json();

            setServerMessage(responseData.message);
            setSubmitted(true);
            reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            setServerMessage("Error submitting form. Please try again.");
        }
    };

    return (
        <FormContainer>
            {submitted ? (
                <Title>{serverMessage || "Message generated on the server"}</Title>
            ) : (
                <Title>Only CTA on the page</Title>
            )}
            {!submitted && (
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <p>Name</p>
                    <TextField
                        placeholder={"Value"}
                        {...register("name", { required: true })}
                        error={!!errors.name}
                        helperText={errors.name && "This field is required"}
                    />
                    <p>Email</p>
                    <TextField
                        placeholder={"Value"}
                        {...register("email", { required: true })}
                        error={!!errors.email}
                        helperText={errors.email && "This field is required"}
                    />
                    <p>Message</p>
                    <TextField
                        placeholder={"Value"}
                        sx={{ marginBottom: "20px" }}
                        {...register("message", { required: true })}
                        error={!!errors.message}
                        helperText={errors.message && "This field is required"}
                    />
                    <Button type="submit" disabled={!isValid}>
                        Submit
                    </Button>
                </StyledForm>
            )}
        </FormContainer>
    );
};

const FormContainer = styled.div`
  height: 90vh;
  background-color: #f5f5f5;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 72px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid gray;
`