import Image from "next/image";

export default function About() {
  return (
    <div>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Harry&apos;s Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From curious beginner to seasoned developer, here&apos;s how Harry
              navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/3.jpg"
                  alt="Harry as a beginner in programming"
                  className="w-full rounded-lg shadow-lg"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Harry&apos;s coding journey began in high school when he
                  stumbled upon his first programming language—Python. What
                  started as a simple curiosity quickly turned into a passion,
                  as Harry spent countless hours experimenting with code,
                  building small projects, and learning the fundamentals of
                  software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/2.jpg"
                  alt="Harry learning new programming skills"
                  className="w-full rounded-lg shadow-lg"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, Harry&apos;s thirst for knowledge
                  grew. He began exploring more complex topics such as data
                  structures, algorithms, and web development. Enrolling in
                  online courses and attending coding bootcamps, Harry quickly
                  expanded his skill set, taking on freelance projects to apply
                  his knowledge in real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/1.jpg"
                  alt="Harry working on a big programming project"
                  className="w-full rounded-lg shadow-lg"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With several years of experience under his belt, Harry began
                  tackling more significant challenges. From contributing to
                  open-source projects to developing his own applications, Harry
                  continued to push his limits, always looking for opportunities
                  to learn and grow. His journey wasn&apos;t without its
                  setbacks, but each obstacle was a stepping stone to becoming
                  the skilled developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/4.jpg"
                  alt="Harry mentoring aspiring programmers"
                  className="w-full rounded-lg shadow-lg"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Giving Back
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Harry is not only a proficient coder but also a mentor
                  to others. He regularly contributes to the programming
                  community by writing tutorials, giving talks, and helping new
                  coders find their footing in the world of software
                  development. For Harry, coding is more than just a
                  profession—it&apos;s a lifelong journey of learning and
                  sharing knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
