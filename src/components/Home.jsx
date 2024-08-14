import React from 'react'

const Home = () => {

    let arr = [1,2,3,4,5,6,7,8]

  return (
    <div className='w-full'>
    <div className="advertisment flex mt-1 m-auto">
  <div className="flex m-auto items-center gap-2 w-full sm:w-full md:w-auto">
    <div className="marquee">
      <h2 className="marquee-content text-center sm:text-sm md:text-base lg:text-lg">
        <span className="font-semibold">Data Analytics Mentorship Program - Cohort 2</span>
        | Learn from Top Data Analysts | Cohort Starting from 
        <span className="font-semibold">21st Sept 2024</span>
      </h2>
    </div>
    <button className="bg-[#fc9c03] text-white rounded-[40px] px-3 py-1 sm:ml-2 md:ml-4 lg:ml-6">
      Apply Now
    </button>
  </div>
</div>


        {/* first section */}
        <section>
  <div className="flex flex-col md:flex-row justify-between items-center mt-2 bg-[#f9f9f9]">
    <div className="w-full md:w-[55%] p-3 md:px-[60px] border">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Data Analytics Mentorship Program
      </h1>
      <p className="mt-5 text-sm sm:text-base md:text-lg">
        Learn from Top Data Analysts | Cohort Starting from 21st Sept 2024
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus, perspiciatis excepturi autem exercitationem ex fuga itaque asperiores voluptate laboriosam aliquam libero ratione beatae. Illo nesciunt accusantium optio repellendus placeat.
      </p>
      <button className="bg-[#fc9c03] text-white rounded-[40px] px-3 py-1 mt-5">
        Apply Now
      </button>
    </div>
    <div className="w-full md:w-[45%] h-[50vh] md:h-[80vh] mt-4 md:mt-0">
      <img
        className="w-full h-full object-cover"
        src="https://media.istockphoto.com/id/2153650639/photo/full-length-body-size-photo-of-young-girl-reading-book-sitting-on-floor-wearing-jeans-denim.webp?b=1&s=612x612&w=0&k=20&c=nKPNLA8SM1ROWzKjibx7QoVaISQWW2KdPqIxbm2dxwM="
        alt=""
      />
    </div>
  </div>
</section>


        {/* second section */}
        <section>
  <h3 className="text-center text-2xl font-bold mt-5 mb-5">
    Why Join Our Program
  </h3>
  <div className="w-full flex flex-wrap p-4">
  {arr.map((item, index) => (
  <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0 shadow-lg p-4">
    <img
      className="w-full h-48 object-cover"
      src="https://media.istockphoto.com/id/1716849028/photo/cyber-security-and-cybercrime-system-hacked-with-master-key-lock-on-laptop-notebook-cyber.webp?b=1&s=612x612&w=0&k=20&c=taUHTEkH3CCCWTVTq1Q0lKR5QwakY2bEZmiwg0Fxia4="
      alt="Cyber Security"
    />
    <h1 className="text-xl font-bold mt-4">Join Now</h1>
    <p className="text-gray-600 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quidem!
    </p>
    <button className="bg-[#fc9c03] text-white rounded-[40px] px-3 py-1 mt-5">
      Explore
    </button>
  </div>
))}

    
  </div>
</section>


    </div>
  )
}

export default Home