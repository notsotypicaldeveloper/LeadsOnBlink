import React from 'react'
import { useAuth } from '../context/AuthContext'

export const Leads = () => {
  const {leads} = useAuth();

  return (
    <>
    <section className='section-leads'>

      <div className='container'>
        <h1 className='main-heading'>Leads Info</h1>
      </div>


      <div className='container grid grid-three-cols'> 

      {leads.map((curElem: any, index: any)=>{
        const {firstName, price, company, email, linkedinUrl, phoneNumber} = curElem;
        const imgPath = `/images/developer-`+ (index%5) + ".jpg";
        console.log("imgPath = ", imgPath);

        return(<>          
          <div className='card' key={index} >
            <div className='card-img'>
              <img src={imgPath}alt="developer img"  width="300px" height="300px"/>
            </div>
          </div> 
    
        <div className='card-details'>
           <div className='grid  grid-two-cols'>
              <p>{firstName}</p>
              <p>Price: {price}</p>
            </div>

            <p>{company}</p>
            <h2>{email}</h2>
            <p>{linkedinUrl}</p>
            <p>{phoneNumber}</p>
        </div>
        </>)

      })}
     

        </div>
    </section>
    </>
  )
}


// import React from 'react'

// // interface ILeadProps  {
// //     firstName: string, 
// //     lastName: string, 
// //     companyName: string,
// //     linkedinProfile: string,
// //     jobTitle: string,
// //     emailAddress: string,
// //     phoneNumber: string 
// // }
// export const LeadCard = (props: ILeadProps) => {


  
//   return (
//     <>
//     <div className='LeadCardContainer'>
//         <div className='LeadCard' >
//         <p>
//             Name: {props.firstName} {props.lastName} 
//             <br/>
//             Company: {props.companyName}
//             <br/>
//             Linkedin Url: {props.linkedinProfile}
//             <br/>
            
//             Designationn: {props.jobTitle}
//             <br/>
//             Email: {props.emailAddress},
//             <br/>
//             phoneNumber: {props.phoneNumber}
//         </p>
//             <button>Pay</button>
//         </div>
//     </div>
//     </>
//   )
// }
