import React, { useState } from 'react';

import './style.css';


function FranquiaForm({ onSubmit }) {
    const [unidade, setUnidade] = useState('');
    const [slug, setSlug] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [especializacao, setEspecializacao] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const especializacoesArray = especializacao.split(',').map(espec => espec.trim());

        await onSubmit({
            unidade, 
            slug,
            email,
            telefone, 
            whatsapp, 
            especializacao: especializacoesArray,
            logradouro,
            cidade,
            estado
        });

        setUnidade('');
        setSlug('');
        setEmail('');
        setTelefone('');
        setWhatsapp('');
        setEspecializacao('');
        setLogradouro('');
        setCidade('');
        setEstado('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="unidade">Unidade:</label>
                <input 
                    name="unidade" 
                    id="unidade" 
                    required 
                    value={unidade} 
                    onChange={e => setUnidade(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="slug">URL da Franquia (Slug):</label>
                <input 
                    name="slug" 
                    id="slug" 
                    required
                    value={slug}
                    onChange={e => setSlug(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="email">Email:</label>
                <input 
                    name="email" 
                    id="email" 
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="telefone">Telefone:</label>
                <input 
                    name="telefone" 
                    id="telefone" 
                    required
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="whatsapp">Whatsapp:</label>
                <input 
                    name="whatsapp" 
                    id="whatsapp" 
                    required
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="especializacao">Especialização:</label>
                <input 
                    name="especializacao" 
                    id="especializacao" 
                    required
                    value={especializacao}
                    onChange={e => setEspecializacao(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="logradouro">Logradouro:</label>
                <input 
                    name="logradouro" 
                    id="logradouro" 
                    
                    value={logradouro}
                    onChange={e => setLogradouro(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="cidade">Cidade:</label>
                <input 
                    name="cidade" 
                    id="cidade" 
                    
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="estado">Estado:</label>
                <input 
                    name="estado" 
                    id="estado" 
                   
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default FranquiaForm;