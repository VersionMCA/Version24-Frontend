import React, { useState } from 'react';
import './AboutUs.scss';
import Layout from '../../components/Layout/Layout';

function AboutUs() {
  const [text, setText] = useState('Version');
  return (
    <Layout>
      <section className="bg-black min-h-lvh w-full text-white flex flex-col justify-center items-center xl:py-24 lg:px-36 2xl:px-96 px-10 py-16 overflow-hidden">
        <div className="font-primary text-2xl xl:mb-0 mb-5 uppercase">
          ABOUT US
        </div>
        <div className="flex flex-col justify-center h-full w-full items-center mx-10 about-us about-us__container lg:px-10 pb-60">
          <div className="flex items-center justify-around xl:text-sm text-[0.6rem] h-10 w-9/12 xl:mt-5 lg:mt-2 mt-0 sm:mb-10 mb-5 xl:mx-40">
            <div
              aria-hidden
              onClick={() => setText('Version')}
              className={`cursor-pointer  hover:text-secondary hover:font-semibold transition-all ${text === 'Version' ? 'text-primary' : ''}`}
            >
              VERSION
            </div>
            <div
              aria-hidden
              onClick={() => setText('GenSynth')}
              className={`cursor-pointer  hover:text-secondary hover:font-semibold transition-all ${text === 'GenSynth' ? 'text-primary' : ''}`}
            >
              GENSYNTH
            </div>
          </div>
          {text === 'Version' && (
            <div className=" font-secondary text-justify xl:text-sm text-[0.6rem] max-[600px]:text-[0.5rem] flex flex-col justify-between gap-5 2xl:mx-64 max-[600px]:mx-10 max-[320px]:mx-2 max-[320px]:text-[0.4rem]">
              {' '}
              <p>
                Embarking on its 31st edition, Version 2024, the{' '}
                <span className="text-secondary">
                  annual All India MCA meet
                </span>{' '}
                hosted by the students of NIT Trichy, stands as the pinnacle
                event for MCA students nationwide. Since 1991, Version has been
                a platform for showcasing talent, fostering healthy competition,
                and promoting creativity.
              </p>
              <p>
                Beyond a mere contest, Version is an immersive experience
                featuring coding challenges, hackathons, workshops, and
                interactions with industry experts. As the star event for
                <span className="text-secondary"> MCA at NIT Trichy</span>, it
                continues to be eagerly anticipated, drawing participants from
                across India.
              </p>{' '}
              <p>
                {' '}
                Version 2024 promises to uphold its legacy of excellence,
                offering participants a{' '}
                <span className="text-secondary"> unique opportunity</span> to
                push boundaries, forge connections, and leave an indelible mark
                on the landscape of MCA events. Get ready to celebrate
                innovation, talent, and camaraderie at the grand stage of
                Version 2024.
              </p>
            </div>
          )}
          {text === 'GenSynth' && (
            <div className=" font-secondary text-justify xl:text-sm text-[0.6rem] max-[600px]:text-[0.5rem] flex flex-col justify-between gap-5 2xl:mx-64 max-[600px]:mx-10 max-[320px]:mx-2 max-[320px]:text-[0.4rem]">
              {' '}
              <p>
                Version 2024 is set to unveil its groundbreaking theme,
                <span className="text-secondary">
                  {' '}
                  &quot;Gensynth: Synthesized Brilliance of Gen AI.&quot;
                </span>{' '}
                Gensynth, a clever portmanteau of &quot;genius&quot; and
                &quot;synth,&quot; embodies the fusion of intelligence and
                creative synthesis in the context of Generative AI.
              </p>
              <p>
                It signifies the harmonious marriage of artificial
                intelligence&apos;s ingenious capabilities with the concept of
                synthesis, hinting at the{' '}
                <span className="text-secondary">
                  generation of innovative and intelligent outputs
                </span>
                . This theme underscores the event&apos;s dedication to
                exploring the symbiotic relationship between AI and creativity.
                In simpler terms, &quot;Gensynth&quot; conveys the idea of smart
                and creative technology coming together to create something
                entirely new, reflecting the essence of Version 2024&apos;s
                focus on the convergence of artificial intelligence and
                imaginative ingenuity.
              </p>{' '}
              <p>
                {' '}
                Get ready for a{' '}
                <span className="text-secondary">
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
  );
}

export default AboutUs;
