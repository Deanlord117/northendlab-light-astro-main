---
title: "El disco duro"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0I-ewjkQtbxEPm45JLSSlQ7Dtx3tBczqeLQ&s"
date: 2025-11-10T05:00:00Z
type: "post"
---
### 9.1 Mantenimiento de software

#### Fundamento teórico
El mantenimiento de software de un disco duro es clave para su rendimiento y vida útil:
- **Desfragmentación** (solo en HDD): organiza los datos para acceso más rápido.
- **Limpieza de archivos temporales y basura**: mejora el espacio libre y velocidad.
- **Análisis con antivirus**: para eliminar malware que dañe archivos o reduzca rendimiento.
- **Herramientas como CHKDSK y SMART**: para comprobar el estado del disco y prevenir fallas.

---

### 9.2 El modelo apropiado según sus necesidades

#### Fundamento teórico
Elegir el disco correcto depende del uso que le des al equipo:
- **HDD (disco duro mecánico)**: más barato y con más capacidad, ideal para almacenamiento masivo.
- **SSD (unidad de estado sólido)**: mucho más rápido, sin partes móviles, ideal para sistema operativo y programas.
- **NVMe**: el más veloz actualmente, se conecta vía PCIe y ofrece velocidades altísimas, recomendado para tareas exigentes como edición de video o gaming pesado.

- Tip clásico pero sabio: combinación ideal = SSD para el sistema + HDD para archivos grandes.

---
¡Tienes razón, Chino! Se me fue la práctica del **tema 9: El disco duro**. Aquí te la dejo para que no falte nada en tu blog estilo Astro. Bien clarita, sin adornos innecesarios:

---

### 🛠 Práctica 

* Verifica el estado de salud de un disco duro con herramientas como *CrystalDiskInfo* o *Hard Disk Sentinel*.
* Abre el administrador de discos en Windows (`diskmgmt.msc`) y revisa particiones y espacios sin asignar.
* Realiza una desfragmentación (en discos duros mecánicos, no en SSD).
* Conecta un disco duro externo, crea una partición y dale formato (NTFS recomendado).
* Usa el símbolo del sistema para hacer un chequeo de errores:

  ```cmd
  chkdsk C: /f /r
  ```

### 📄 Reporte

📎 [Descargar reporte en PDF](./reportes/actualizar_equipo.pdf)

---

### Video explicativo
<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/hjVu7Td6doI"
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
<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=gsNAcvN36kKVdjcJfbNi0FCkw5CfzlBNhis-3McxiZlUQ1A5WE9GWVVQV0hGSFQ4TVpMSlBWMTRCVC4u&embed=true" frameborder="0" marginwidth=xsx"0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

### 🧾 Conclusión

El disco duro es el corazón del almacenamiento. Saber cómo cuidarlo y cuál elegir hace toda la diferencia entre una máquina lenta y una que vuele. Si optimizas el uso, optimizas todo.


---

### **Bibliografía APA – Tema 9: El disco duro**

Kingston Technology. (2023). *SSD vs HDD: What's the difference?* [https://www.kingston.com/en/blog/pc-performance/ssd-vs-hdd](https://www.kingston.com/en/blog/pc-performance/ssd-vs-hdd)

Western Digital. (2024). *Hard Drive vs. SSD: What’s the difference?* [https://www.westerndigital.com/products/internal-drives/hdd-vs-ssd](https://www.westerndigital.com/products/internal-drives/hdd-vs-ssd)

Seagate Technology. (2023). *How to check hard drive health*. [https://www.seagate.com/support/kb/how-to-check-hard-drive-health-006008en/](https://www.seagate.com/support/kb/how-to-check-hard-drive-health-006008en/)

Microsoft Support. (2024). *Improve performance by optimizing your drive*. [https://support.microsoft.com/en-us/windows/improve-performance-by-optimizing-your-drive](https://support.microsoft.com/en-us/windows/improve-performance-by-optimizing-your-drive)

Crystal Dew World. (2024). *CrystalDiskInfo: Software for monitoring HDD/SSD health*. [https://crystalmark.info/en/software/crystaldiskinfo/](https://crystalmark.info/en/software/crystaldiskinfo/)
