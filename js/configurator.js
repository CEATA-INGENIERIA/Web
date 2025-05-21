/** Barra de progreso */
   document.addEventListener('DOMContentLoaded', () => {
  // Determinar el paso actual según la página
  const currentPage = window.location.pathname.split('/').pop();
  let currentStep;

  switch (currentPage) {
    case 'tratamiento.html':
      currentStep = 1;
      break;
    case 'fuente-agua.html':
      currentStep = 2;
      break;
    case 'capacidad-produccion.html':
      currentStep = 3;
      break;
    case 'caracterizacion-agua.html':
      currentStep = 4;
      break;
    case 'adicionales.html':
      currentStep = 5;
      break;
    case 'resumen.html':
      currentStep = 6;
      break;
    default:
      currentStep = 1;
  }

  // Actualizar los pasos en la barra de progreso
  const steps = document.querySelectorAll('.progress-bar .step');
  steps.forEach((step, index) => {
    const stepNumber = parseInt(step.getAttribute('data-step'));
    if (stepNumber < currentStep) {
      step.classList.add('completed');
    } else if (stepNumber === currentStep) {
      step.classList.add('active');
    }
  });



  // Manejo de tratamiento.html
  const treatmentForm = document.getElementById('treatment-form');
  if (treatmentForm) {
    treatmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedTreatment = document.querySelector('input[name="treatment"]:checked');
      if (!selectedTreatment) {
        alert('Por favor, selecciona un tipo de tratamiento antes de continuar.');
        return;
      }
      const configData = JSON.parse(localStorage.getItem('configData')) || {};
      configData.tipoTratamiento = selectedTreatment.value;
      localStorage.setItem('configData', JSON.stringify(configData));
      window.location.href = 'fuente-agua.html';
    });
  }

  // Manejo de fuente-agua.html
  const sourceForm = document.getElementById('source-form');
  if (sourceForm) {
    sourceForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedSource = document.querySelector('input[name="source"]:checked');
      if (!selectedSource) {
        alert('Por favor, selecciona una fuente de agua antes de continuar.');
        return;
      }
      const configData = JSON.parse(localStorage.getItem('configData')) || {};
      configData.fuenteAgua = selectedSource.value;
      localStorage.setItem('configData', JSON.stringify(configData));
      window.location.href = 'capacidad-produccion.html';
    });
  }

  // Manejo de capacidad-produccion.html
  const capacityForm = document.getElementById('capacity-form');
  if (capacityForm) {
    capacityForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedCapacity = document.querySelector('input[name="capacity"]:checked');
      if (!selectedCapacity) {
        alert('Por favor, selecciona una capacidad de producción antes de continuar.');
        return;
      }
      const configData = JSON.parse(localStorage.getItem('configData')) || {};
      configData.capacidadProduccion = selectedCapacity.value;
      localStorage.setItem('configData', JSON.stringify(configData));
      window.location.href = 'caracterizacion-agua.html';
    });
  }

  // Manejo de caracterizacion-agua.html
  const characterizationForm = document.getElementById('characterization-form');
  if (characterizationForm) {
    characterizationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const temperatura = document.getElementById('temperatura').value;
      const turbidez = document.getElementById('turbidez').value;
      const contaminantes = document.getElementById('contaminantes').value;
      const solidosDisueltos = document.getElementById('solidos-disueltos').value;

      if (!temperatura || !turbidez || !contaminantes || !solidosDisueltos) {
        alert('Por favor, selecciona una opción para cada característica antes de continuar.');
        return;
      }

      const configData = JSON.parse(localStorage.getItem('configData')) || {};
      configData.caracterizacion = {
        temperatura,
        turbidez,
        contaminantes,
        solidosDisueltos
      };
      localStorage.setItem('configData', JSON.stringify(configData));
      window.location.href = 'adicionales.html';
    });
  }

  // Manejo de adicionales.html
  const additionalForm = document.getElementById('additional-form');
  if (additionalForm) {
    additionalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const postTratamiento = document.getElementById('post-tratamiento').value;
      const smartOperation = document.getElementById('smart-operation').value;
      const peripheral = document.getElementById('peripheral').value;

      const configData = JSON.parse(localStorage.getItem('configData')) || {};
      configData.adicionales = {
        postTratamiento: postTratamiento || 'Ninguno',
        smartOperation: smartOperation || 'Ninguno',
        peripheral: peripheral || 'Ninguno'
      };
      localStorage.setItem('configData', JSON.stringify(configData));
      window.location.href = 'resumen.html';
    });
  }

  // Manejo de resumen.html
  const summaryList = document.getElementById('summary-list');
  const finalizeBtn = document.getElementById('finalize-btn');
  const downloadBtn = document.getElementById('download-btn');

  if (summaryList) {
    const configData = JSON.parse(localStorage.getItem('configData')) || {};

    // Mostrar las selecciones en la lista
    summaryList.innerHTML = `
      <li><strong>Tipo de Tratamiento:</strong> ${configData.tipoTratamiento || 'No seleccionado'}</li>
      <li><strong>Fuente de Agua:</strong> ${configData.fuenteAgua || 'No seleccionado'}</li>
      <li><strong>Capacidad de Producción:</strong> ${configData.capacidadProduccion || 'No seleccionado'}</li>
      <li><strong>Caracterización del Agua:</strong>
        <ul>
          <li>Temperatura: ${configData.caracterizacion?.temperatura || 'No seleccionado'}</li>
          <li>Turbidez: ${configData.caracterizacion?.turbidez || 'No seleccionado'}</li>
          <li>Contaminantes: ${configData.caracterizacion?.contaminantes || 'No seleccionado'}</li>
          <li>Sólidos Disueltos: ${configData.caracterizacion?.solidosDisueltos || 'No seleccionado'}</li>
        </ul>
      </li>
      <li><strong>Opciones Adicionales:</strong>
        <ul>
          <li>Post Tratamiento: ${configData.adicionales?.postTratamiento || 'No seleccionado'}</li>
          <li>Smart Operation: ${configData.adicionales?.smartOperation || 'No seleccionado'}</li>
          <li>Peripheral: ${configData.adicionales?.peripheral || 'No seleccionado'}</li>
        </ul>
      </li>
    `;
  }

  if (finalizeBtn) {
    finalizeBtn.addEventListener('click', () => {
      // Limpiar localStorage y redirigir al inicio
      localStorage.removeItem('configData');
      window.location.href = 'configurador.html';
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // Generar PDF con jsPDF
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      // Usar el base64 del logo proporcionado
      const logoData = 'data:image/png;base64,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';

      // Encabezado con logo y título
      if (logoData) {
        doc.addImage(logoData, 'PNG', 10, 10, 40, 20); // Mantengo las dimensiones ajustadas
      }
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(1, 87, 155); // Color azul oscuro (#01579B)
      doc.text('CEATA Ingeniería', 60, 20);
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text('Resumen de Configuración', 60, 30);

      // Línea divisoria
      doc.setLineWidth(0.5);
      doc.setDrawColor(0, 188, 212); // Color cian (#00BCD4)
      doc.line(10, 35, 200, 35);

      // Contenido del resumen
      const configData = JSON.parse(localStorage.getItem('configData')) || {};
      let y = 45;
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      doc.text('Detalles de la Configuración:', 10, y);
      y += 15; // Aumenté el espaciado a 15 para evitar solapamiento
      doc.setFont('Helvetica', 'bold');
      doc.text('Tipo de Tratamiento:', 10, y);
      doc.setFont('Helvetica', 'normal');
      doc.text(configData.tipoTratamiento || 'No seleccionado', 55, y);
      y += 15;

      doc.setFont('Helvetica', 'bold');
      doc.text('Fuente de Agua:', 10, y);
      doc.setFont('Helvetica', 'normal');
      doc.text(configData.fuenteAgua || 'No seleccionado', 45, y);
      y += 15;

      doc.setFont('Helvetica', 'bold');
      doc.text('Capacidad de Producción:', 10, y);
      doc.setFont('Helvetica', 'normal');
      doc.text(configData.capacidadProduccion || 'No seleccionado', 65, y);
      y += 15;

      doc.setFont('Helvetica', 'bold');
      doc.text('Caracterización del Agua:', 10, y);
      y += 15;
      doc.setFont('Helvetica', 'normal');
      doc.text(`- Temperatura: ${configData.caracterizacion?.temperatura || 'No seleccionado'}`, 15, y);
      y += 10;
      doc.text(`- Turbidez: ${configData.caracterizacion?.turbidez || 'No seleccionado'}`, 15, y);
      y += 10;
      doc.text(`- Contaminantes: ${configData.caracterizacion?.contaminantes || 'No seleccionado'}`, 15, y);
      y += 10;
      doc.text(`- Sólidos Disueltos: ${configData.caracterizacion?.solidosDisueltos || 'No seleccionado'}`, 15, y);
      y += 15;

      doc.setFont('Helvetica', 'bold');
      doc.text('Opciones Adicionales:', 10, y);
      y += 15;
      doc.setFont('Helvetica', 'normal');
      doc.text(`- Post Tratamiento: ${configData.adicionales?.postTratamiento || 'No seleccionado'}`, 15, y);
      y += 10;
      doc.text(`- Smart Operation: ${configData.adicionales?.smartOperation || 'No seleccionado'}`, 15, y);
      y += 10;
      doc.text(`- Peripheral: ${configData.adicionales?.peripheral || 'No seleccionado'}`, 15, y);
      y += 15;

      doc.setFont('Helvetica', 'bold');
      doc.text('Fecha:', 10, y);
      doc.setFont('Helvetica', 'normal');
      doc.text(new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }), 25, y); // Solo día/mes/año
      y += 20;

      // Información de contacto
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(1, 87, 155);
      doc.text('Información de Contacto', 10, y);
      doc.setLineWidth(0.5);
      doc.setDrawColor(0, 188, 212);
      doc.line(10, y + 2, 200, y + 2);
      y += 10;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text('Correo: ceataingenieria@ceataingenieria.com', 10, y);
      y += 6;
      doc.text('Teléfono: +34 946 29 11 83', 10, y);
      y += 6;
      doc.text('Dirección: Avda. Altos Hornos 33, ILGNER C6, 48901 Barakaldo (Bizkaia)', 10, y);
      y += 6;
      doc.text('Web: www.ceataingenieria.com', 10, y);

      // Guardar el PDF y mostrar modal de éxito
      doc.save('resumen_configuracion.pdf');

      // Mostrar modal de éxito
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      if (successModal) {
        successModal.show();
      }
    });
  }
});
  
