import Contact from '@/components/Contact'
import Image from 'next/image'
import Link from 'next/link'
import { BsPlusCircleFill } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'

const page = () => {

  const classroommanagement = [
    { name: "Helps Set Up the Classroom", content: "Teachmint's Comprehensive School Structure is essential for establishing a smooth-running educational institution, enabling independent classroom setup for effective academic operations." },
    { name: "Helps Admins Configure Classrooms", content: "Admins can configure classrooms, assign teachers, control class sizes, monitor student progress, and create elective classes, ensuring versatile classroom management." },
    { name: "Gives Teachers a Better Understanding of Students", content: "Empowering teachers with LMS and Digital Content facilitates highly personalized instruction, tailoring support to maximize each student's unique potential." },
    { name: "Enables Classroom Performance Analytics", content: "Teachmint's Integrated School Platform helps teachers assess students academically, track attendance, and monitor Digital Content engagement within the classroom." },
    { name: "Advanced Attendance Management", content: "Teachmint's Attendance Management Software automates tracking, enhancing school efficiency and notifying parents of absences for proactive attendance management." },
  ];

  return (

    <>

      <div id='home' className={`md:h-screen md:bg-classroom_management bg-classroom_management backgroundPosition md:w-full h-[280px] bg-cover bg-center bg-no-repeat`} >
        <div className='md:max-w-[1240px] w-full mx-auto md:p-16 p-4 flex justify-start items-center'>
          <div className='md:mt-20 mt-6'>

            <div className='md:ml-10'>
              <div className='md:mb-10 mb-5'>
                <h1 className='font-semibold md:text-6xl text-xl md:mb-2 mt-10 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#152C4E] to-[#75EAE4]'>
                  {"Classroom Management"}<br />{"Software"}
                </h1>
                <p className='md:block hidden md:max-w-[620px] text-[#202124] mx-auto mt-2 font-inter md:font-semibold md:text-[14px] text-[12px]'>
                  {"Management of the classroom has never been easier - use Teachmint’s Classroom Management System to fundamentally transform the classroom!"}
                </p>
                <p className='md:hidden block md:max-w-[620px] text-[#202124] mx-auto mt-2 font-inter md:font-semibold md:text-[14px] text-[12px]'>
                  {"Management of the classroom has"} <br /> {"never been easier - use Teachmint’s"} <br /> {"Classroom Management System to"} <br /> {"fundamentally transform the classroom!"}
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
                  Define Classroom Structure </h4>
                <p className="text-body-color text-xs">
                  Create & define a digital school structure, set subjectwise classroom activity objectives, move students from one classroom to another, and so on.</p>
                <div className="md:w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">
                  Manage Classroom Attendance</h4>
                <p className="text-body-color text-xs">
                  Take complete control of your classroom attendance with Teachmint </p>
                <div className="md:w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

            <div className="w-full px-4">
              <div className="mb-8 rounded-[20px] bg-white">
                <h4 className="text-dark mb-3 text-sm font-semibold">View Classroom Activity Status</h4>
                <p className="text-body-color text-xs">
                  Keep track of every student’s performance, test scores, study materials, homework, and more
                </p>
                <div className="md:w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <div id='about' className='md:p-4 w-full bg-gradient-to-r from-[#FFFFFF] from-15% via-[#FCFFFE80] via-20% to-[#75EAE440] to-100% text-center py-8' >

        <div className='container mx-auto md:max-w-[1000px] md:mb-10'>

          <div className="mx-auto mb-12 max-w-[100%] text-center lg:mb-10 mt-8">
            <h2 className="font-bold text-center md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 md:mb-[60px] lg:mb-[20px]">Benefits of classroom Management Software</h2>
            <p className='md:max-w-[1000px] px-4 md:text-center text-justify py-2 text-gray-600 text-sm md:mt-2'>
              Teachmint is the best fee management software solution out there in the market today and has several features that make it convenient for use among all the different stakeholders of the institution. Some of these are mentioned below -</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 px-4">

            {classroommanagement && classroommanagement.map((feeList, index) => (
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