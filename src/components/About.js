import hnu from '../assets/images/jpg/hnu.jpg'

export default function About() {
    return (
        <section id='about' className="pb-8">
            <h2 className='xl:text-3xl lg:text-2xl text-xl font-semibold pl-10' >About Me</h2>
            <div className='lg:flex gap-5 '>
                <div className='lg:w-1/2 shadow-2xl p-5 rounded-lg md:w-[600px] mx-auto'>
                    <img className=" hover:scale-125 duration-500 shadow-2xl mx-auto w-[400px] h-[400px] rounded-lg" alt="hnu" src={hnu} />
                </div>
                <div className=' lg:w-1/2 mx-auto shadow-2xl p-5 rounded-lg'>
                    <p className="lg:text-xl md:text-lg text-md py-8 leading-8 lg:px-16 px-1 text-center">
                        I earned a Bachelor of Science in Information Technology from Holy Name University. I learned much about programming languages like HTML, CSS, JavaScript, and PHP at Holy Name University. I also improved my design abilities by learning how to create visually appealing and user-friendly user interfaces. I finished several projects that required me to collaborate with other students to develop websites and applications that met specific requirements and produced measurable results.
                    </p>
                </div>
            </div>
        </section>
    );
};