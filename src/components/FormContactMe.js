

export default function FormContactMe() {
    return (
        <>
            <div className="relative flex flex-col ">
                <label className="text-lg pt-5 pb-1" >
                    Your Name:
                </label>
                <input className="text-lg bg-transparent border-black  dark:border-white rounded-lg border-2 py-1 px-3"
                id="name"
                type="text" 
                name="user_name"/>
                <label className="text-lg pt-5 pb-1">
                    Contact:
                </label>
                <input className="text-lg bg-transparent border-black  dark:border-white rounded-lg border-2 py-1 px-3"
                id="name"
                type="tel" 
                name="user_contact"
                />
                <label className="text-lg pt-5 pb-1">
                    Email Address:
                </label>
                <input className="text-lg bg-transparent border-black dark:border-white rounded-lg border-2 py-1 px-3"
                id="name"
                type="email"
                name="user_email" />
                <label className="text-lg pt-5 pb-1"  >
                    Your Message  
                </label>
                <textarea className="h-40 text-lg bg-transparent border-black dark:border-white rounded-lg border-2 py-2 px-3"
                name="message" />
            </div> 
            <button className="text-xl dark:bg-green-600 bg-violet-600 rounded-full py-1 px-3 w-full my-5 hover:bg-green-600 dark:hover:bg-violet-600 font-semibold"
            type="submit" 
            name="send">
                Submit
            </button>
         </>               
    );
};