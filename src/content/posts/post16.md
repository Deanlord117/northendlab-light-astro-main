---
title: "Instalacion con éxito de redes LAN"
image: ""
date: 2025-11-10T05:00:00Z
type: "post"
---

### 16.1 Cableado

El corazón físico de cualquier red es su cableado. El tipo más común en redes LAN es el **cable de par trenzado** (UTP, categoría 5e o 6), aunque también puede usarse fibra óptica en entornos más demandantes.

- Se recomienda una topología en estrella.
- El cableado debe seguir normas de seguridad (no pasar por zonas con alta interferencia electromagnética).
- Usar canaletas o ductos para mantener el orden y evitar accidentes.

---

### 16.2 Conectividad

Para lograr una red funcional se necesitan los siguientes elementos:

- **Switch o router** para distribuir la señal.
- **Tarjetas de red** instaladas y habilitadas en cada equipo.
- **Direcciones IP** configuradas correctamente.
- **Prueba de conectividad** mediante comandos como `ping`.

---

### 16.3 Localización de fallas en la red

Detectar errores en una red es esencial para mantenerla operativa.

Pasos comunes:
1. Verifica físicamente cables, conectores y luces LED del switch.
2. Usa el comando `ipconfig` o `ifconfig` para revisar configuración IP.
3. Prueba con `ping` para saber si hay respuesta de otros equipos.
4. Revisa la configuración del firewall o antivirus.
5. Reinicia dispositivos y prueba uno por uno.

---

### 16.4 Montaje de una red en Windows

1. Accede a **Configuración > Red e Internet**.
2. Habilita o configura la red local en “Centro de redes y recursos compartidos”.
3. Asegura que los equipos estén en el mismo **grupo de trabajo** (workgroup).
4. Comparte carpetas o impresoras según sea necesario.
5. Prueba acceso desde otros equipos.

---
### 📄 Reporte

📎 [Descargar reporte en PDF](./reportes/actualizar_equipo.pdf)

---

### Video explicativo
<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/_amKugIhx74"
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
<iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=gsNAcvN36kKVdjcJfbNi0FCkw5CfzlBNhis-3McxiZlUNEc4UFcxQzBGVE9OQjlXRThOVTUwTVFIOS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>


### 🧾 Conclusión

Instalar una red LAN no solo es cuestión de conectar cables. Requiere orden, planificación y conocimiento técnico para asegurar que la conectividad sea estable y segura. Ya sea en una oficina o en tu hogar, una buena red es la columna vertebral de la productividad moderna.

---