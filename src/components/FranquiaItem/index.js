import React from 'react';
import api from '../../services/api';
import '../FranquiaItem/style.css'

function FranquiaItem({ franquia }){

    return (
        <li className="franquia-item">
            <header>
                <img src="https://vollstudios.com.br/wp-content/uploads/2019/12/portraits-circle-small_2.png" alt="Imagem Studio"></img>
                <div className="franquia-info">
                    <strong>{franquia.unidade}</strong>
                    <span>slug: {franquia.slug}</span>
                </div>
            </header>
            <div className="franquia-body">
                <p><strong>Endereço:</strong> {franquia.logradouro} - {franquia.cidade} - {franquia.estado}</p>
                <p><strong>Especialização:</strong> {franquia.especializacao}</p>
                <p><strong>Email:</strong> {franquia.email}</p>
                <p><strong>Telefone:</strong> {franquia.telefone}</p>
                <p className="last"><strong>Whatsapp:</strong> {franquia.whatsapp}</p>
                <a href={`https://www.vollstudios.com.br/${franquia.slug}`} 
                   target="_blank" 
                   rel="noopener noreferrer">Acessar Site do Franqueado</a><br/><br/>
                <button onClick={() => {api.delete(`/studios/delete/${franquia._id}`);}}>Delete</button>
            </div>
        </li>
    );
}

export default FranquiaItem;