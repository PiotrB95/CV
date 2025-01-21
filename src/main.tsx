import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss';

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'https://placehold.co/400x400?text=PB',
  name: 'Piotr',
  lastName: 'Bubnowski',
  position: 'Full Stack Developer',
  experience: [
    {
      year: 2020,
      description: 'ReSymbio - IT Support Specialist'
    },
    {
      year: 2021,
      description: 'Questy - Wdrożenie i wsparcie IT - Software Developer'
    },
    {
      year: 2022,
      description: 'Polska Press Grupa- Full Stack Developer'
    }
  ],
  education: [
    '2020 - Master - Education in Technology and Computer Science', 
    '2019 - Engineer - Education in Technology and Computer Science'
  ]
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className='cv-main'>
      <header className='cv-header'>
        <h1>CV {cvData.name} {cvData.lastName}</h1>
      </header>
      <aside className='cv-personal'>
        <h2>Personal data</h2>
        <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} zdjęcie profilowe`} />
        <p>{cvData.name} {cvData.lastName}</p>
        <small>{cvData.position}</small>
      </aside>
      <section className='cv-details'>
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map(experience => (
            <li key={experience.year}>
              <strong>{experience.year}</strong> - {experience.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((education,index) => <li key={index}>{education}</li>)}
        </ul>
      </section>
    </main>
  </React.StrictMode>,
)
