import React, { Fragment } from 'react';
import styled from 'styled-components';

import FileUpload from './FileUpload';

const Container = styled.section`
  background-color: #ffffff;
  width: 50%;
`;

const Field = `
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  min-height: 3rem;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  border-color: #dbdbdb;
  box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
  max-width: 100%;
  width: 100%;
  align-items: center;
`;

const FormField = styled.div`
  margin: 1.5rem 0;

  label {
    margin: 0.5rem 0;
    display: block;
  }
`;

const Input = styled.input`
  ${Field}
`;

const TextArea = styled.textarea`
  ${Field}
`;

const SubmitButton = styled.a`
  background-color: #001dfb;
  color: #ffffff;
  padding: 1.2rem;
  cursor: pointer;
  width: 20rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  border: 0;
  box-shadow: none;
  margin: 4rem auto;
  display: block;
  text-decoration: none;
  text-align: center;
`;

const Form = () => (
  <Container>
    {/* <SubmitButton
      href="https://careers.penneo.com/jobs/155348-frontend-developer-senior"
      target="_blank"
      style={{ marginLeft: '6em' }}
    >
      Apply Now
    </SubmitButton> */}
    {/* <h2
      css={`
        font-weight: 600;
        letter-spacing: 1.2;
        text-align: center;
      `}
    >
      APPLY NOW
    </h2> */}
    {/* <form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/succes"
      css={`
        padding-left: 6em;
        margin-right: 3rem;
        width: 100%;
      `}
    >
      <FormField>
        <label htmlFor="name">Navn</label>
        <Input name="name" id="name" autoComplete="name" />
      </FormField>
      <FormField>
        <label htmlFor="email">Email</label>
        <Input name="email" id="email" type="email" autoComplete="email" />
      </FormField>
      <FileUpload />
      <FormField>
        <label htmlFor="cover-letter">Cover Letter</label>
        <TextArea name="cover-letter" rows="8" />
      </FormField>
      <SubmitButton type="submit">Ansøg</SubmitButton>
    </form> */}

    {/* <form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      style={{ paddingLeft: '5em', marginLeft: '3rem', width: '100%' }}
      enctype="multipart/form-data"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <FormField>
        <label
          htmlFor="company"
          style={{ margin: '0.5rem 0', display: 'block' }}
        >
          Name of company you are applying to
        </label>
        <Input
          type="text"
          name="company"
          id="company"
          style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            boxSizing: 'border-box',
          }}
        />
      </FormField>
      <FormField>
        <label htmlFor="name" style={{ margin: '0.5rem 0', display: 'block' }}>
          Name
        </label>
        <Input
          type="text"
          name="name"
          id="name"
          style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            boxSizing: 'border-box',
          }}
        />
      </FormField>
      <FormField>
        <label htmlFor="telefon">telefon</label>
        <Input
          type="tel"
          name="telefon"
          id="telefon"
          style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            boxSizing: 'border-box',
          }}
        />
      </FormField>
      <FormField>
        <label htmlFor="Email">Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          style={{
            width: '100%',
            padding: '12px 20px',
            margin: '8px 0',
            boxSizing: 'border-box',
          }}
        />
      </FormField>
      <FormField>
        <label htmlFor="file">Upload Resume</label>
        <input type="file" name="file" id="file" />
      </FormField>
      <FormField>
        <label htmlFor="Cover Letter">Cover Letter</label>
        <TextArea name="cover-letter" rows="8" />
      </FormField>
      <SubmitButton type="submit">Apply</SubmitButton>
    </form> */}
  </Container>
);

export default Form;
