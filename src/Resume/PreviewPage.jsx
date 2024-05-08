const PreviewPage = ()=>{
    return(

        <>
        <section className="flex border border-green-0 ">
            {/* Left Side */}
            <section className="border w-2/4 border-yellow-0 ">
              <div className="w-5/6 flex flex-col border gap-5 p-5 border-blue-0 ">
                <div className="border mb-8">
                  <h1 className="text-3xl font-semibold">Your Name</h1>
                  <p className="text-sm">Dec</p>
                </div>

                <div className="border">
                  <div>
                    <h1 className="text-md font-bold text-blue-500">
                      EXPERIENCE
                    </h1>
                  </div>
                  <div>
                    <span className="text-xl font-semibold">Company</span>
                    <span className="font-semibold">&nbsp; Location</span>
                    <p className="text-md font-semibold text-wrap">Job Title</p>
                  </div>
                  <div>
                    <span className="text-sm">MONTH 20XX </span>
                    <span className="text-sm">Present</span>
                  </div>
                  <div>
                    <p className="w-4/5">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </p>
                  </div>
                </div>
                {/* */}

                <div className="border ">
                  <div>
                    <h1 className="text-md font-bold text-blue-500">
                      EDUCATION
                    </h1>
                  </div>
                  <div>
                    <span className="text-xl font-semibold">School Name</span>
                    <span className="font-semibold">&nbsp; Location</span>
                    <p className="text-md font-semibold text-wrap">Degree</p>
                  </div>
                  <div>
                    <span className="text-sm">MONTH 20XX </span>
                    <span className="text-sm">Present</span>
                  </div>
                  <div>
                    <p className="w-4/5">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="border">
                  <div>
                    <h1 className="text-md font-bold text-blue-500">
                      PROJECTS
                    </h1>
                  </div>
                  <div>
                    <span className="text-xl font-semibold">PROJECTS Name</span>
                    {/* <span className="font-semibold">&nbsp; Location</span> */}
                    <p className="text-md font-semibold text-wrap">Details</p>
                    <p>
                      Live Demo <a href="">DemoLink</a>
                    </p>
                  </div>
                  <div>
                    <span className="text-sm">MONTH 20XX </span>
                    <span className="text-sm">Present</span>
                  </div>
                  <div>
                    <p className="w-4/5">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh.
                    </p>
                  </div>
                </div>
                {/*  */}
              </div>
            </section>

            <section className="border border-red-0 w-3/2">
              {/* Right Side */}
              <div className="border border-green-800 flex flex-col  gap-5 p-5">
                <div className="text-md">
                  <p className="">Address Line 1 123 Your Street </p>
                  <p>Address Line 1 Your City, ST 12345</p>
                  <p>PinCode (123) 456-7890 </p>
                  <p className="font-semibold">
                    Email Address no_reply@example.com
                  </p>
                </div>

                <div className="w-72 border">
                  <h1 className="text-md font-bold text-blue-500">AWARDS</h1>
                  <p className=" text-wrap">
                    Lorem ipsum dolor sit amet. Consectetuer adipiscing elit.
                    Sed diam nonummy nibh euismod tincidunt. L​​​‌​aoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
                <div className="w-72 border">
                  <h1 className="text-md font-bold text-blue-500">
                    CERTIFICATE
                  </h1>
                  <p className=" text-wrap">
                    Lorem ipsum dolor sit amet. Consectetuer adipiscing elit.
                    Sed diam nonummy nibh euismod tincidunt. L​​​‌​aoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
                <div className="w-72 border">
                  <h1 className="text-md font-bold text-blue-500">LANGUAGES</h1>
                  <p className=" text-wrap">
                    Lorem ipsum dolor sit amet. Consectetuer adipiscing elit.
                    Sed diam nonummy nibh euismod tincidunt.
                  </p>
                </div>
                <div className="w-72 border">
                  <h1 className="text-md font-bold text-blue-500">PROJECTS</h1>
                  <p className=" text-wrap">
                    Lorem ipsum dolor sit amet. Consectetuer adipiscing elit.
                    Sed diam nonummy nibh euismod tincidunt. L​​​‌​aoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </section>
        </section>
        </>
    );
}

export default PreviewPage;