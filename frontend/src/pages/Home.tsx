export const Home = () => {
  return (
    <>
        <main>
            <section className='home-section'>
                <div className='container grid grid-two-cols'>
                  <div className='home-section-content'>
                    <p>Small Changes. Big Impact. Lightning Growth.</p>
                    <h2>Small Big Growth Contact Service</h2>
                    <p>Our data-driven marketing solutions, including AI-powered automation and predictive analytics, can help you streamline your workflows, make smarter decisions, and deliver personalized experiences that drive conversions. Let us help you optimize your marketing strategy and take your business to the next level.</p>
                  <br />
                  <a href="/signup">
                    <button>SignUp Now</button>
                  </a>
                  </div>

                  <div className='home-section-image'>
                    <img src="/images/home.jpg" alt="homepage image" height="500" width="500" /> 
                  </div>
                </div>
            </section>
        </main>
    </>
  )
}
