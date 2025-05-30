---
title: "La Placa Base (Mother Board)"
image: "https://profejaime.com/images/2023/09/03/placa-madre-partes-min.jpg"
date: 2025-11-10T05:00:00Z
type: "post"
---


### 5.1 BIOS

#### Fundamento teórico
El BIOS (Basic Input/Output System) es un software esencial que inicia el sistema al encender la computadora. Se encarga de:
- Comprobar que todo el hardware funcione correctamente (POST).
- Cargar el sistema operativo desde el dispositivo de arranque.
- Permitir configuración de opciones como orden de arranque, fecha y hora, y control de ventiladores.

Actualmente, muchas placas usan **UEFI**, una versión más moderna y gráfica del BIOS tradicional.

---

### 5.2 Jumpers

#### Fundamento teórico
Los jumpers son pequeños conectores que permiten modificar configuraciones físicas en la placa base. Pueden servir para:
- Borrar configuraciones del BIOS (reset CMOS).
- Seleccionar voltaje de procesador o frecuencia en placas antiguas.
- Activar o desactivar funciones específicas del hardware.

Aunque hoy son menos usados, siguen presentes en algunas funciones técnicas.

---

### 5.3 El trabajo conjunto de la placa base y la CPU

#### Fundamento teórico
La placa base y la CPU trabajan como un solo equipo:
- La **placa distribuye energía** y conecta todos los dispositivos.
- El **CPU procesa datos**, pero depende de la placa para comunicarse con la memoria, disco, periféricos, etc.
- Deben ser **compatibles en socket, chipset y frecuencia** para funcionar correctamente.

Un buen balance entre ambos asegura estabilidad, rendimiento y durabilidad.

---

### 5.4 Montaje de placas base

#### Fundamento teórico
Montar una placa base requiere precisión:
- Usar separadores (standoffs) para evitar cortos eléctricos.
- Conectar bien la fuente de poder (24 pines + CPU).
- Alinear y fijar con tornillos en el gabinete.
- Instalar CPU, RAM, almacenamiento y GPU con cuidado.

Evita electricidad estática usando una pulsera antiestática o tocando una parte metálica antes de manipularla.

---

### 5.5 Pilas

#### Fundamento teórico
La pila CMOS (generalmente CR2032) alimenta al BIOS cuando el equipo está apagado. Sirve para:
- Guardar configuración del BIOS
- Mantener la hora y fecha del sistema

Si se agota, la computadora puede mostrar errores al encender o reiniciar el reloj constantemente.

---

### Práctica – Tema 5: La Placa Base (Mother Board)

1. Explora la BIOS de una PC y anota algunas opciones básicas que puedas ver.
2. Identifica qué son los jumpers y para qué se usan en la placa base.
3. Explica cómo trabaja la placa base en conjunto con el procesador.
4. Describe el proceso básico para montar una placa base en un gabinete.
5. Localiza la pila de la placa base y menciona su función.

---

### 📄 Reporte

📎 [Descargar reporte en PDF](./reportes/actualizar_equipo.pdf)

---

### Video explicativo
<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/1RQ8OmZfk8s"
      title="Explicación de Series de Taylor"
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
<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=gsNAcvN36kKVdjcJfbNi0FCkw5CfzlBNhis-3McxiZlUMzdRUVZJQkQyQ0ZPN0tCSDgwVkdJWkZZOS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

### 🧾 Conclusión

La placa base es el puente que une todos los componentes. Comprender su estructura, sus conexiones y su relación con el CPU es fundamental para armar, mantener y optimizar cualquier equipo de cómputo. No es solo una base física, es el centro nervioso del sistema.

---

**Bibliografía en formato APA**

Intel Corporation. (2023). *Understanding BIOS and UEFI*. [https://www.intel.com/content/www/us/en/support/articles/000005486/boards-and-kits.html](https://www.intel.com/content/www/us/en/support/articles/000005486/boards-and-kits.html)

ASUS. (2024). *Motherboard jumpers and CMOS reset guide*. [https://www.asus.com/support/FAQ/1013861/](https://www.asus.com/support/FAQ/1013861/)

Gibson, D. (2020). *PC hardware: The complete reference*. McGraw-Hill Education.

Seagate Technology. (2022). *Motherboard and CPU interaction fundamentals*. [https://www.seagate.com/tech-insights/motherboard-cpu-fundamentals-master-ti/](https://www.seagate.com/tech-insights/motherboard-cpu-fundamentals-master-ti/)

Corsair. (2023). *How to install a motherboard step by step*. [https://www.corsair.com/us/en/blog/how-to-install-a-motherboard](https://www.corsair.com/us/en/blog/how-to-install-a-motherboard)

Kingston Technology. (2021). *CMOS battery: What it is and why it matters*. [https://www.kingston.com/en/blog/pc-build/cmos-battery](https://www.kingston.com/en/blog/pc-build/cmos-battery)

