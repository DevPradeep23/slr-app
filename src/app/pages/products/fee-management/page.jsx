import Contact from '@/components/Contact'
import Link from 'next/link';

const page = () => {

  const feeManagement = [
    { name: "Saves Time", content: "Automating processes through software replaces human involvement, drastically reducing time. Software automation simplifies fee management, enhancing efficiency for complex tasks." },
    { name: "Cost Effective", content: "Effort directly affects cost-effectiveness in processes like fee management. Advanced software drives efficiency, reducing staff involvement and enhancing cost-effectiveness." },
    { name: "Minimizes Errors", content: "Automation's diminishing human involvement minimizes errors, making fee management software vital for reducing mistakes and benefiting schools financially." },
    { name: "Helps with Easy Categorization", content: "Fee management software simplifies tracking and assigning diverse fee categories based on factors like gender, religion, and caste, streamlining record-keeping for each student." },
    { name: "Provides Timely Reminders", content: "Teachmint's Fee Management provides a simple solution for busy parents. Through timely reminders, it ensures on-time fee payments as per school preferences, helping parents stay organized." },
    { name: "Offers Installment Options", content: "Fee management software simplifies tracking diverse fee structures, categories, and installment options tailored to students' capacities, aiding efficient organization." },
    { name: "Creates Customized Fee Reports", content: "Fee reports signify successful payments and reimbursements. Teachmint allows schools to craft personalized, official receipts with logos for easy traceability." },
  ];

  return (

    <>

      <div id='home' className={`md:h-screen md:bg-fee_management bg-fee_management_mobile backgroundPosition md:w-full h-[250px] bg-cover bg-center bg-no-repeat`} >
        <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-2 flex justify-start items-center'>
          <div className='md:mt-24 mt-10'>

            <div className='md:ml-10'>
              <div className='md:mb-10 mb-2'>
                <h1 className='font-semibold md:text-6xl text-xl md:mb-2 mt-4 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                  {"Fee Management"}<br />{"Software"}
                </h1>
                <p className='md:block hidden md:max-w-[630px] text-[#202124] mx-auto mt-1 font-inter md:font-semibold md:text-[14px] text-[12px]'>
                  {"Make school fee management effective, efficient, and easy with Teachmint’s Fee Management Software. Automate and simplify the entire edifice of the fee management process."}
                </p>

                <p className='md:hidden block md:max-w-[630px] text-[#202124] mx-auto mt-1 font-inter md:font-semibold md:text-[14px] text-[12px]'>
                  {"Make school fee management"} <br/>
                  {"effective, efficient, and easy with"} <br/>
                  {"Teachmint’s Fee Management"} <br/>
                  {"Software. Automate and simplify the entire"} <br/>
                  {"edifice of the fee management process."}
                </p>

              </div>

              <Link href="/pages/get-in-touch" className="md:ml-1 rounded-full hover:scale-105 ease-in duration-100 text-white items-start bg-[#152C4E] focus:ring-4 font-medium mb-2 capitalize dark:focus:ring-[#152C4E] md:px-6 md:py-2 px-4 py-2 md:text-[14px] text-[10px]">{"GET STARTED ->"} </Link>

            </div>

          </div>

        </div>
      </div>

      <section className="md:pb-12 lg:pt-[5px] lg:pb-[20px]">
        <div className="container mx-auto md:max-w-5xl">

          <div className="w-full px-4 flex flex-wrap justify-center items-center">

            <div className="mx-auto md:mb-12 mb-8 md:max-w-[100%] text-center lg:mb-10 mt-8">
              <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:ml-8 md:mb-[60px] lg:mb-[20px]">Overview</h2>
              <p className='md:max-w-[1000px] md:text-center text-justify py-2 text-gray-600 text-sm md:mt-2'>
                Make school fee management effective, efficient, and easy with Teachmint’s Fee Management Software. Automate and simplify the entire edifice of the fee management process.
              </p>
            </div>

          </div>

          <div className="md:-mx-4 grid md:grid-cols-3 grid-cols-1 px-4">

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  Easy Categorization
                </h4>
                <p className="text-body-color text-xs">
                  Strong partnership with SAP to ensure alignment with the needs of the business and access to the latest innovations.
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  Customized Fee Reports
                </h4>
                <p className="text-body-color text-xs">
                  End-to-end provider for all HR solution-related needs, from reseller to comprehensive service-based models.
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">Timely Reminders</h4>
                <p className="text-body-color text-xs">
                  Scalable and flexible solutions to accommodate changing business needs.
                </p>
                <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <div id='about' className='md:p-4 w-full bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% text-center py-8' >

        <div className='container mx-auto md:max-w-[1000px] md:mb-10'>

          <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-2">
            <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mb-[60px] lg:mb-[20px]">Benefits of Fee Management Software</h2>
            <p className='md:max-w-[1000px] px-4 md:text-center text-justify py-2 text-gray-600 text-sm md:mt-2'>
              Teachmint is the best fee management software solution out there in the market today and has several features that make it convenient for use among all the different stakeholders of the institution. Some of these are mentioned below -
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

            {feeManagement && feeManagement.map((feeList, index) => (
              <div key={feeList.name} className=" bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                <div className="p-4">
                  <h4 className="text-dark mb-3 text-sm font-semibold text-left">
                    {feeList.name}
                  </h4>
                  <p className="text-body-color text-xs text-left">
                    {feeList.content}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

      <Contact />
    </>

  )
}
export default page;