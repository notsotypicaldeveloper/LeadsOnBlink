import React from 'react'

interface ILeadProps  {
    firstName: string, 
    lastName: string, 
    companyName: string,
    linkedinProfile: string,
    jobTitle: string,
    emailAddress: string,
    phoneNumber: string 
}
export const LeadCard = (props: ILeadProps) => {
  return (
    <>
    <div className='LeadCardContainer'>
        <div className='LeadCard' >
        <p>
            Name: {props.firstName} {props.lastName} 
            <br/>
            Company: {props.companyName}
            <br/>
            Linkedin Url: {props.linkedinProfile}
            <br/>
            
            Designationn: {props.jobTitle}
            <br/>
            Email: {props.emailAddress},
            <br/>
            phoneNumber: {props.phoneNumber}
        </p>
            <button>Pay</button>
        </div>
    </div>
    </>
  )
}
