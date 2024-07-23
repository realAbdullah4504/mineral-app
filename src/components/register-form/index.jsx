import RegisterOrganization from 'pages/register-organization';
import RegisterProfessional from 'pages/register-professional';
import React from 'react'

const RegisterForm = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const paramValue = urlParams.get("orgtype");
  return (
    <>
      {paramValue == "mp" ? (
        <RegisterProfessional />
      ) : (
        <RegisterOrganization />
      )}
    </>
  )
}

export default RegisterForm