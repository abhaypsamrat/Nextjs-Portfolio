import Head from 'next/head';
import About from "../components/About";
import Avatar from "../components/Avatar";
import Connect from "../components/Connect";
import Header from "../components/Header";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abhay Pratap Samrat</title>
        <meta name='description' content='React Native Developer & Frontend Engineer specializing in scalable mobile and web applications. Building with React Native, React.js, JavaScript, Next.js, and modern tech stack.' />
        <meta name='keywords' content='React Native Developer, React Native, React.js, JavaScript, Mobile App Developer, Frontend Engineer, Next.js, Node.js, portfolio' />
        <meta name='author' content='Abhay Pratap Samrat' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      
      <div className="home">
        <Header />
        <Avatar />
        <About />
        <Skill />
        <Work />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
