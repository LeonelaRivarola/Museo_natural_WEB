// src/pages/RegisterScreen.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getApiUrl } from '../config/api';
import '../styles/RegisterScreen.css';

const RegisterScreen = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        password: '',
        nombre: '',
        apellido: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        if (!formData.usuario || !formData.password || !formData.nombre || !formData.apellido) {
            setMessage('Todos los campos son obligatorios');
            setMessageType('error');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(getApiUrl('REGISTER'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.status === 200) {
                setMessage('¡Usuario registrado correctamente!');
                setMessageType('success');
                
                setFormData({
                    usuario: '',
                    password: '',
                    nombre: '',
                    apellido: ''
                });

            } else {
                setMessage(data.message || 'Error al registrar usuario');
                setMessageType('error');
            }

        } catch (error) {
            setMessage('Error de conexión: ' + error.message);
            setMessageType('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-left">
                    <img 
                        src="/images/logo-sinfondo.png" 
                        alt="Logo" 
                        className="register-logo" 
                    />
                    <h2 className="register-title">Crear Cuenta</h2>
                    
                    {message && (
                        <div className={`message ${messageType}`}>
                            {message}
                        </div>
                    )}

                    <div className="register-form-wrapper">
                        <form onSubmit={handleSubmit} style={{width: '100%'}}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu nombre"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellido">Apellido:</label>
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                    placeholder="Ingresa tu apellido"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="usuario">Usuario:</label>
                                <input
                                    type="text"
                                    id="usuario"
                                    name="usuario"
                                    value={formData.usuario}
                                    onChange={handleChange}
                                    placeholder="Elige un nombre de usuario"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Crea una contraseña segura"
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="register-button"
                                disabled={loading}
                            >
                                {loading ? 'Creando cuenta...' : 'Registrarse'}
                            </button>
                        </form>

                        <div className="login-link">
                            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                        </div>
                    </div>
                </div>

                <div className="register-right"></div>
            </div>
        </div>
    );
};

export default RegisterScreen;