import { useAuth } from '../context/AuthContext'

export const Leads = () => {
  const {leads} = useAuth();
  // const [amount, setAmount] = useState(0);
  
  const paymentHandler = async (e: any) => {
    // console.log("amount = ", amount);
    const amount = 100;
    const response = await fetch("http://localhost:5000/api/razorpay-createOrder", {
      method: "POST",
      body: JSON.stringify({
        amount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const apiResponse = await response.json();
    const order = apiResponse.data;

    console.log(order);

    var options = {
      key: "rzp_test_SrrurMUZ8xOO7f", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // handler: async function (response: any) {
      //   const body = {
      //     ...response,
      //   };

      //   const validateRes = await fetch(
      //     "http://localhost:5000/order/validate",
      //     {
      //       method: "POST",
      //       body: JSON.stringify(body),
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   );
      //   const jsonRes = await validateRes.json();
      //   console.log(jsonRes);
      // },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Small Big Growth Customer", //your customer's name
        email: "smallbiggrowth@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new (window as any).Razorpay(options);
    rzp1.on("payment.failed", function (response: any) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return (
    <>
    <section className='leads-section'>

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
              <img src={imgPath} alt="developer img"  width="100px" height="100px"/>
            </div>
    
        <div className='card-details'>
           <div className='grid  grid-two-cols'>
              <p>{firstName}</p>
            </div>
            <p>{company}</p>
            <p>{linkedinUrl}</p> 
            <p>{phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Pay to reveal email:</p><button onClick={paymentHandler}>Pay {price} INR</button>
          </div>
          </div>
        </>)

      })}
     

        </div>
    </section>
    </>
  )
}


