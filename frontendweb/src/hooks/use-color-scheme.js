import { useEffect, useState } from 'react';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('colorScheme');
        console.log('Cargando tema desde localStorage:', saved); // DEBUG
        if (saved && (saved === 'light' || saved === 'dark')) {
          setColorScheme(saved);
        } else {
          // Verificar preferencia del sistema
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          const systemTheme = mediaQuery.matches ? 'dark' : 'light';
          console.log('Usando tema del sistema:', systemTheme); // DEBUG
          setColorScheme(systemTheme);
        }
      } catch (error) {
        console.log('Error al cargar tema:', error);
        setColorScheme('light');
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        console.log('Aplicando tema:', colorScheme); // DEBUG
        // Remover todas las clases primero
        document.body.classList.remove('light-theme', 'dark-theme');
        // Agregar la clase del tema actual
        document.body.classList.add(`${colorScheme}-theme`);
        
        // También agregar atributo data-theme
        document.body.setAttribute('data-theme', colorScheme);
        
        localStorage.setItem('colorScheme', colorScheme);
        console.log('Tema guardado en localStorage:', colorScheme); // DEBUG
        
      } catch (error) {
        console.log('Error al aplicar tema:', error);
      }
    }
  }, [colorScheme]);

  const toggleColorScheme = () => {
    console.log('Toggle llamado, tema actual:', colorScheme); // DEBUG
    setColorScheme(current => {
      const newScheme = current === 'light' ? 'dark' : 'light';
      console.log('Nuevo tema:', newScheme); // DEBUG
      return newScheme;
    });
  };

  const setColorSchemeManual = (scheme) => {
    if (scheme === 'light' || scheme === 'dark') {
      setColorScheme(scheme);
    }
  };

  return {
    colorScheme,
    toggleColorScheme,
    setColorScheme: setColorSchemeManual
  };
}