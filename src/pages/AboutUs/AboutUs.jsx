import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AboutUs.scss';
import Layout from '../../components/Layout/Layout';
import TransitionAnimation from '../../components/TransitionAnimation/TransitionAnimation';

function AboutUs() {
  const [text, setText] = useState('Version');
  const [displayAboutUs, setAboutUs] = useState(false);

  setTimeout(() => {
    setAboutUs(true);
  }, 1000);

  return displayAboutUs ? (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <section className="about-us bg-black min-h-lvh w-full text-white flex flex-col justify-center items-center xl:py-32 lg:px-36 min-[1600px]:px-80 min-[1900px]:px-96 px-10 pt-16 overflow-hidden">
          <h2 className="font-primary text-2xl mb-5 uppercase">ABOUT US</h2>
          <div className="flex flex-col justify-center h-full w-full items-center mx-10 about-us about-us__container lg:px-10 pb-60 max-[600px]:px-28 max-[550px]:px-24 max-[480px]:px-6 max-[340px]:px-4">
            <div className="flex items-center justify-around xl:text-base [&>*]:font-medium max-[600px]:text-sm h-10 w-9/12 xl:mt-7 lg:mt-2 mt-4 mb-5 md:mb-3 sm:mb-1 min-[601px]:mb-0 xl:mx-40 2xl:mb-8 sm:mt-0 min-[601px]:mt-0 md:mt-2">
              <h3
                aria-hidden
                onClick={() => setText('Version')}
                className={`cursor-pointer hover:font-semibold transition-all ${text === 'Version' ? 'text-primary' : ''}`}
              >
                VERSION
              </h3>
              <h3
                aria-hidden
                onClick={() => setText('GenSynth')}
                className={`cursor-pointer  hover:font-semibold transition-all ${text === 'GenSynth' ? 'text-primary' : ''}`}
              >
                GENSYNTH
              </h3>
            </div>
            {text === 'Version' && (
              <div className=" font-secondary font-extralight text-justify xl:text-base text-[0.75rem] min-[601px]:max-[767px]:text-[0.5rem]  min-[601px]:px-10 flex flex-col justify-between gap-5 max-[639px]:gap-2 min-[2400px]:mx-64 min-[2100px]:mx-40 max-[600px]:mx-6 max-[320px]:mx-2 max-[320px]:text-[0.4rem] mt-2 sm:mt-0 min-[601px]:mt-0 sm:px-10">
                {' '}
                <p className="xl:leading-6">
                  Embarking on its 31st edition, Version 2024, the{' '}
                  <span className="text-primary font-semibold">
                    annual All India MCA meet
                  </span>{' '}
                  hosted by the students of NIT Trichy, stands as the pinnacle
                  event for MCA students nationwide. Since 1991, Version has
                  been a platform for showcasing talent, fostering healthy
                  competition, and promoting creativity.
                </p>
                <p className="xl:leading-6">
                  Beyond a mere contest, Version is an immersive experience
                  featuring coding challenges, hackathons, workshops, and
                  interactions with industry experts. As the star event for
                  <span className="text-primary font-semibold">
                    {' '}
                    MCA at NIT Trichy
                  </span>
                  , it continues to be eagerly anticipated, drawing participants
                  from across India.
                </p>{' '}
                <p className="xl:leading-6">
                  {' '}
                  Version 2024 promises to uphold its legacy of excellence,
                  offering participants a{' '}
                  <span className="text-primary font-semibold">
                    {' '}
                    unique opportunity
                  </span>{' '}
                  to push boundaries, forge connections, and leave an indelible
                  mark on the landscape of MCA events. Get ready to celebrate
                  innovation, talent, and camaraderie at the grand stage of
                  Version 2024.
                </p>
              </div>
            )}
            {text === 'GenSynth' && (
              <div className=" font-secondary font-extralight text-justify xl:text-base text-[0.75rem] min-[601px]:max-[767px]:text-[0.5rem]  min-[601px]:px-10 flex flex-col justify-between gap-5 max-[639px]:gap-2 min-[2400px]:mx-64 min-[2100px]:mx-40 max-[600px]:mx-6 max-[320px]:mx-2 max-[320px]:text-[0.4rem] mt-2 sm:mt-0 min-[601px]:mt-0 sm:px-10">
                {' '}
                <p className="xl:leading-6">
                  Version 2024 is set to unveil its groundbreaking theme,
                  <span className="text-primary font-semibold">
                    {' '}
                    &quot;Gensynth: Synthesized Brilliance of Gen AI.&quot;
                  </span>{' '}
                  Gensynth, a clever portmanteau of &quot;genius&quot; and
                  &quot;synth,&quot; embodies the fusion of intelligence and
                  creative synthesis in the context of Generative AI.
                </p>
                <p className="xl:leading-6">
                  It signifies the harmonious marriage of artificial
                  intelligence&apos;s ingenious capabilities with the concept of
                  synthesis, hinting at the{' '}
                  <span className="text-primary font-semibold">
                    generation of innovative and intelligent outputs
                  </span>
                  . This theme underscores the event&apos;s dedication to
                  exploring the symbiotic relationship between AI and
                  creativity. In simpler terms, &quot;Gensynth&quot; conveys the
                  idea of smart and creative technology coming together to
                  create something entirely new, reflecting the essence of
                  Version 2024&apos;s focus on the convergence of artificial
                  intelligence and imaginative ingenuity.
                </p>{' '}
                <p className="xl:leading-6">
                  {' '}
                  Get ready for a{' '}
                  <span className="text-primary font-semibold">
                    transformative experience
                  </span>{' '}
                  at Gensynth as we delve into the boundless possibilities of
                  Generative AI.
                </p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </motion.div>
  ) : (
    <TransitionAnimation />
  );
}

export default AboutUs;
