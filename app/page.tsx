"use client"
import React from 'react';
import { Icon } from '@iconify/react';
import Footer from './components/Footer';


interface ProfilePictureProps {
  avatarUrl: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ avatarUrl }) => {
  return (
    <div className="profile-container border border-2 border-gray-800 md:absolute md:right-8 md:top-12 relative mx-auto mb-8 mt-24 w-48 h-48 md:w-64 md:h-64 rounded-full animate-fadeIn">
      <div className="profile-wrapper">
        <div className="profile-border"></div>
        <img src={avatarUrl} alt="Profile Picture" className="profile-image w-full h-full rounded-full object-cover" />
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="mt-8 pl-2 text-center sm:text-left animate-fadeIn">
      <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">About Me</h2>
      <p className="text-description text-gray-400 text-base sm:text-lg max-w-2xl">
        I am a highly motivated and results-oriented full-stack developer with a
        passion for building innovative and user-friendly web applications. I
        have a strong understanding of front-end and back-end technologies and
        am always eager to learn new skills and expand my knowledge.
      </p>
    </div>
  );
};

const CodingLanguages = () => {
  const techStack = [
    // Existing Technologies
    { icon: 'logos:css-3', title: 'CSS3' },
    { icon: 'logos:html-5', title: 'HTML5' },
    { icon: 'logos:javascript', title: 'JavaScript' },
    { icon: 'logos:php', title: 'PHP' },
    { icon: 'logos:markdown', title: 'Markdown' },
    { icon: 'logos:typescript-icon', title: 'TypeScript' },
    { icon: 'devicon:digitalocean', title: 'DigitalOcean' },
    { icon: 'logos:aws', title: 'AWS' },
    { icon: 'logos:vercel', title: 'Vercel' },
    { icon: 'logos:cloudflare', title: 'Cloudflare' },
    { icon: 'logos:chakra-ui', title: 'Chakra' },
    { icon: 'logos:express', title: 'Express.js' },
    { icon: 'logos:npm-icon', title: 'NPM' },
    { icon: 'logos:nextjs-icon', title: 'Next.js' },
    { icon: 'logos:react', title: 'React' },
    { icon: 'logos:tailwindcss', title: 'TailwindCSS' },
    { icon: 'logos:threejs', title: 'Three.js' },
    { icon: 'logos:yarn', title: 'Yarn' },
    { icon: 'logos:mongodb', title: 'MongoDB' },
    { icon: 'logos:redis', title: 'Redis' },
    { icon: 'devicon:canva', title: 'Canva' },
    { icon: 'logos:postman', title: 'Postman' },
    { icon: 'logos:codecov', title: 'Codecov' },
    { icon: 'simple-icons:huggingface', title: 'Transformers' },
    { icon: 'simple-icons:huggingface', title: 'Datasets' },
    { icon: 'logos:visual-studio-code', title: 'Visual Studio Code' },
    { icon: 'logos:github', title: 'GitHub' },
    { icon: 'logos:netlify', title: 'Netlify' },
    { icon: 'logos:nodejs-icon', title: 'Node.js' },
    { icon: 'simple-icons:tauri', title: 'Tauri' },
    { icon: 'simple-icons:bun', title: 'Bun' },
    { icon: 'simple-icons:rust', title: 'Rust (Learning)' },
  ];

  return (
    <div className="mt-8 text-center sm:text-left animate-fadeIn">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Technologies I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 z-5">
  {techStack.map((tech, index) => (
    <div
      key={index}
      className="flex items-center justify-between bg-gray-700 bg-opacity-30 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 w-full h-16"
    >
     
      <Icon icon={tech.icon} className="w-12 h-12 text-white" />

      <h3 className="text-sm font-semibold text-white text-right ml-4">{tech.title}</h3>
    </div>
  ))}
</div>
    </div>
  );
};

const Home = () => {
  const githubUsername = "Nicat-dcw";
  const avatarUrl = `https://avatars.githubusercontent.com/u/59221034?v=4`;

  return (
    <>
      <style jsx global>{`
        /* Global styles */
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      <div className="flex ml-2 h-full w-full grid box grid-rows-[20px_1fr_20px] md:ml-8 items-center md:items-start justify-items-center md:justify-items-start min-h-screen px-4 pb-20 gap-16 sm:px-8 md:px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col md:pl-2 -md:ml-2 pt-1.5 border-1 border-gray-700 shadow-md rounded-xl gap-8 row-start-2 items-center md:items-start md:w-1/2 lg:max-w-full w-full sm:w-96 md:w-full lg:w-1/2 xl:w-2/3 2xl:w-1/2 animate-fadeIn">
          <ProfilePicture avatarUrl={avatarUrl} />

          <div className="relative w-full">
            <div className="mt-16 pl-2 text-center sm:text-left">
              <h1 className="font-mono text-white text-3xl sm:text-6xl font-bold mb-4 leading-tight animate-fadeIn">
                Hey, I'm Nicat,<br />
                A Full-Stack<br />
                <span className="text-blue-500">Developer.</span>
              </h1>
              <p className="text-description text-gray-400 text-base sm:text-xl mt-8 max-w-2xl animate-fadeIn">
                Passionate developer with a knack for creating dynamic web
                applications, exploring cutting-edge technologies, and engaging in
                outdoor adventures.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-4 ml-2 justify-center sm:justify-start text-description animate-fadeIn">
            <button className="px-6 py-2 sm:px-8 sm:py-3 rounded-lg border-0 border-spacing-1 border-stone-600 bg-gray-900 text-white hover:bg-stone-950 transition-colors">
              About
            </button>
            <button className="px-6 py-2 sm:px-8 sm:py-3 rounded-lg bg-gray-900 text-white border-1 border-stone-700 hover:bg-zinc-950 transition-colors flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 sm:h-5 w-4 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </button>
          </div>

          <AboutMe />
          <CodingLanguages />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
