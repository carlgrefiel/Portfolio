import figma from '../assets/images/figma.png'
import adobe from '../assets/images/adobe.png'
import react from '../assets/images/react.png'
import next from '../assets/images/next.png'
import laravel from '../assets/images/laravel.jpg'
import vscode from '../assets/images/vscode.jpg'

export default function Tools() {
    return (
        <section id='tools'>
           <h2 className='xl:text-3xl lg:text-2xl text-xl font-semibold pl-10' >Tools</h2>
          <div className='flex flex-wrap justify-center gap-5'>
              <div className='hover:scale-125 duration-500 py-5'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="figma" src={figma}/>
              </div>
              <div className='hover:scale-125 duration-500 py-5 '>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="adobe" src={adobe}/>
              </div>
              <div className='hover:scale-125 duration-500 py-5'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="react" src={react}/>
              </div>
              <div className='hover:scale-125 duration-500 py-5'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="laravel" src={laravel}/>
              </div>
              <div className='hover:scale-125 duration-500 py-5'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="vscode" src={vscode}/>
              </div>
              <div className='hover:scale-125 duration-500 py-5'>
                <img className=" shadow-2xl mx-auto w-[363px] h-[177px] rounded-lg" alt="next" src={next}/>
              </div>
            
          </div>
        </section>
    );
};