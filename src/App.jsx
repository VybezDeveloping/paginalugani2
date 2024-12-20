import React, { useState } from 'react';
import './App.css';

import gabrielImg from './assets/gabriel.jpg';
import brunoImg from './assets/bruno.jpg';
import thiagoImg from './assets/thiago.jpg';
import projectImg from './assets/project.png';
import logoImg from './assets/logo.png';

function App() {
  const [comments, setComments] = useState([
    "¡Me encanta el proyecto! La interfaz es muy intuitiva y fácil de usar.",
    "Este es un proyecto increíble. La información es precisa y útil. ¡Felicidades!"
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="Logo del proyecto" />
        </div>
        <ul className="navbar-links">
          <li><a href="#about">Información</a></li>
          <li><a href="#team">Integrantes</a></li>
          <li><a href="#comments">Comentarios</a></li>
        </ul>
      </nav>

      {/* Información */}
      <section id="about" className="section about">
        <h1>Estación meteorológica personal</h1>
        <p>Este proyecto mide la temperatura, humedad y sensación térmica,este proyecto es ideal para aquellos quienes quieren llevar el control sobre el clima en todo momento, tales como deportistas, o algun apasionado por las plantas en su invernadero personal.</p>
        <img src={projectImg} alt="Imagen del proyecto" className="about-image" />
      </section>

      {/* Integrantes */}
      <section id="team" className="section team">
        <h2>Conoce a los integrantes</h2>
        <div className="team-container">
          <div className="member">
            <img src={gabrielImg} alt="Gabriel" />
            <p>Gabriel - Ensamblador</p>
          </div>
          <div className="member">
            <img src={brunoImg} alt="Bruno" />
            <p>Bruno - Programador</p>
          </div>
          <div className="member">
            <img src={thiagoImg} alt="Thiago" />
            <p>Thiago - Diseñador</p>
          </div>
        </div>
      </section>

      {/* Comentarios */}
      <section id="comments" className="section comments">
        <h2>Caja de comentarios</h2>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario..."
        />
        <button onClick={handleAddComment}>Agregar comentario</button>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 EMP. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
