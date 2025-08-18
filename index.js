async function setLanguage(lang) {
    // Si no se pasa parámetro, hacer toggle entre 'es' y 'en'
    if (!lang) {
      const currentLang = localStorage.getItem('lang') || 'es';
      lang = currentLang === 'es' ? 'en' : 'es';
    }
    try {
      const res = await fetch(`lang/${lang}.json`);
      const data = await res.json();

      for (const key in data) {
        const el = document.getElementById(key);
        if (el) {
          el.textContent = data[key];
        }
      }

      // Guardar preferencia en localStorage (opcional)
      localStorage.setItem('lang', lang);

    } catch (error) {
      console.error('Error cargando idioma:', error);
    }
  }

  // Cargar idioma guardado al entrar
  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'es';
    setLanguage(savedLang);
  });

  function copiarWhatsapp() {
    // Tomamos el valor del input
    let texto = "1234567890"

    // Lo copiamos al portapapeles
    navigator.clipboard.writeText(texto).then(() => {
      alert("¡Texto copiado al portapapeles! " + texto);
    }).catch(err => {
      console.error("Error al copiar: ", err);
    });
  }

  
  function copiarCorreo() {
    // Tomamos el valor del input
    let texto = "info@transporteseguro.com"

    // Lo copiamos al portapapeles
    navigator.clipboard.writeText(texto).then(() => {
      alert("¡Texto copiado al portapapeles! " + texto);
    }).catch(err => {
      console.error("Error al copiar: ", err);
    });
  }

  function copiarTelefono() {
    // Tomamos el valor del input
    let texto = "1234567890"

    // Lo copiamos al portapapeles
    navigator.clipboard.writeText(texto).then(() => {
      alert("¡Texto copiado al portapapeles! " + texto);
    }).catch(err => {
      console.error("Error al copiar: ", err);
    });
  }