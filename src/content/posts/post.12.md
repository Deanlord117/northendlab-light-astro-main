---
title: "Tarjetas de sonido"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaOrHKxrEIeavCatyggxQNrfHs0jc6ugXjA&s"
date: 2025-11-10T05:00:00Z
type: "post"
---


### 12.1 Los controladores

Las tarjetas de sonido necesitan **drivers** o controladores para que el sistema operativo las reconozca correctamente. Sin ellos, no habrá salida de audio. Algunos sistemas instalan controladores genéricos automáticamente, pero lo ideal es usar los oficiales del fabricante para un mejor rendimiento y compatibilidad.

---

### 12.2 Montaje de una tarjeta de sonido

Aunque hoy muchas tarjetas están integradas en la placa base, las dedicadas ofrecen mejor calidad de audio. Para montarla:

1. Apaga el equipo y desconéctalo.
2. Inserta la tarjeta en una ranura PCI o PCIe libre.
3. Asegura con tornillo.
4. Conecta los altavoces o auriculares en los puertos correspondientes.
5. Enciende y espera a que el sistema detecte el nuevo hardware.

---

### 12.3 Solución de problemas

- **No hay sonido**: Verifica que esté activada y seleccionada como dispositivo predeterminado.
- **Sonido distorsionado**: Reinstala los controladores.
- **Ruido o interferencias**: Aleja cables de alimentación o cambia la tarjeta de ranura.
- **El sistema no detecta la tarjeta**: Prueba en otra ranura o verifica en BIOS si está habilitada.

---

### 🛠 Práctica 

- Instalar una tarjeta de sonido PCI.
- Descargar e instalar el controlador correcto.
- Probar salida de audio con altavoces y auriculares.
- Cambiar el dispositivo de audio predeterminado en Windows.

---
### 📄 Reporte

📎 [Descargar reporte en PDF](./reportes/actualizar_equipo.pdf)

---

### Video explicativo
<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/To9ZDSj_64k"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>

<style>
  .video-wrapper {
    max-width: 800px;
    margin: 2rem auto;
    border: 3px solid #8e3b46; 
    border-radius: 0.5rem; 
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* Sombra suave */
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* Relación 16:9 */
    height: 0;
    overflow: hidden;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>


### Evaluación
<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=gsNAcvN36kKVdjcJfbNi0FCkw5CfzlBNhis-3McxiZlUQ1A5WE9GWVVQV0hGSFQ4TVpMSlBWMTRCVC4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

### 🧾 Conclusión

Las tarjetas de sonido siguen siendo clave para quienes buscan una experiencia de audio más refinada. Saber instalarlas, configurarlas y resolver errores comunes es parte del mantenimiento esencial de un equipo de cómputo. Una buena tarjeta puede marcar la diferencia entre un sonido plano y uno profesional.

---