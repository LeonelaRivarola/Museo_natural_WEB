// src/pages/Home/index.jsx
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function IndexPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null;
}