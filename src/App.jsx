
import './App.css';
import Advanced from './components/Advanced';
import Boost from './components/Boost';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import FormShortUrl from './components/FormShortUrl';
import Results from './components/Results';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <FormShortUrl />
      <Results />
      <Advanced />
      <Boost />
      <Footer />
    </>
  );
}