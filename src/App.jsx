import fullfillLogo from '@/assets/first_vector.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <title>FullFill - AI Sales Automation - </title>
        <meta name="description" content="Automatic RFP Filling using AI" />
        <meta name="keywords" content="RFP automation, RFP AI, Sales Automation, AI Tender, AI For Sales, AI RFP" />
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen p-4 md:flex-row">
        <img src={fullfillLogo} alt="Logo" className="md:w-1/5 h-2/3 object-cover md:mb-0 md:mr-5 md:mt-10 max-sm:fixed max-sm:-top-20" />
        <div className="text-center max-w-lg w-full md:w-4/5">
          <h1 className="text-2xl font-bold md:text-4xl">FullFill is Coming Soon</h1>
          <p className="mt-4 text-base md:text-lg">
            We’re building AI to give you back your time <br />
            Focus on what truly matters - let us take care of the rest <br /> <br />

            Sales guy/girl? Join the waitlist and be the first to free yourself from RFP overload.</p>
          <form action="https://formsubmit.co/matandobr@gmail.com" method="POST" className='mt-4 flex'>
            <Input type="email" name="email" placeholder="Email" required className='mr-5 ml' />
            <Button type="submit">Join the waitlist</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
