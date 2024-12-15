import team1 from '../../src/assets/happy-team.jpg'
import team2 from '../../src/assets/progrmmer.jpg'
import { motion } from "motion/react"



const Bannar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
    {/* Left Side */}
    <div className="md:flex-1 p-4">
      <h1 className="text-4xl font-bold text-secondary mb-4">
        Welcome to <span className='text-primary'>Career</span>Connect
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Your journey to a successful career starts here. Find the best
        opportunities and make your next big move.
      </p>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for jobs, skills, companies..."
          
          className="p-3 text-lg border border-gray-300 rounded-l-md w-96"
        />
        <button className="p-3 bg-primary text-white rounded-r-md hover:bg-blue-700 transition duration-300">
          Search
        </button>
      </div>
    </div>
  
    {/* Right Side */}
    <div className="md:flex-1 w-full flex justify-center items-center mt-6 lg:mt-0">
      {/* Responsive image container */}
      <div className="flex flex-wrap justify-center gap-4">
        <motion.img
          src={team1}
          animate={{ y: [50, 100, 50] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-t-[40px] border-l-4 border-b-4 border-primary rounded-br-[40px] shadow-2xl"
        />
        <motion.img
          src={team2}
          animate={{ x: [50, 100, 50] }}
          transition={{ duration: 10, delay: 5, repeat: Infinity }}
          className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-t-[40px] border-l-4 border-b-4 border-primary rounded-br-[40px] shadow-2xl"
        />
      </div>
    </div>
  </div>
  

  );
};

export default Bannar;