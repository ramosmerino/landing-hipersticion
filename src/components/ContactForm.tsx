import { createSignal, onMount } from 'solid-js';

export default function ContactForm() {
  const [reason, setReason] = createSignal('buy');
  const [subject, setSubject] = createSignal('Consulta desde el sitio web de Hiperstición');
  const [message, setMessage] = createSignal('');

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const bookTitle = params.get('bookTitle') || '';
    const bookAuthor = params.get('bookAuthor') || '';
    const initialReason = params.get('reason') || 'buy';
    
    setReason(initialReason);
    
    if (bookTitle) {
      setSubject(`Consulta sobre: ${bookTitle} (${getReasonText(initialReason)})`);
    } else {
      setSubject(`Consulta: ${getReasonText(initialReason)}`);
    }
    
    setMessage(getMessage(initialReason, bookTitle, bookAuthor));
  });

  const getReasonText = (reason: string) => {
    const reasons: Record<string, string> = {
      'buy': 'Compra',
      'ask': 'Consulta',
      'distribution': 'Distribución',
      'invitation': 'Invitación',
      'other': 'Otro'
    };
    return reasons[reason] || 'Consulta';
  };

  const getMessage = (reason: string, bookTitle: string, bookAuthor: string) => {
    const messages: Record<string, string> = {
      buy: `Hola, me interesa comprar el libro "${bookTitle}" de ${bookAuthor}.\n\nPor favor, indíquenme cómo puedo adquirirlo.`,
      ask: `Hola, me interesa obtener más información sobre el libro "${bookTitle}" de ${bookAuthor}.\n\nPor favor, indíquenme cómo puedo adquirirlo.`,
      distribution: `Hola, me interesa distribuir el libro "${bookTitle}" de ${bookAuthor}.`,
      invitation: `Hola, me interesa invitar a las personas que participaron de "${bookTitle}" (${bookAuthor}) a un evento.\n\nPor favor, indíquenme cómo puedo contactarlos.`,
      other: `Hola, mis intereses no son reconocidos por el sistema, sin embargo, existen.`
    };
    return messages[reason] || '';
  };

  const handleReasonChange = (e: Event) => {
    const newReason = (e.target as HTMLSelectElement).value;
    setReason(newReason);
    
    const params = new URLSearchParams(window.location.search);
    const bookTitle = params.get('bookTitle') || '';
    
    if (bookTitle) {
      setSubject(`Consulta sobre: ${bookTitle} (${getReasonText(newReason)})`);
    } else {
      setSubject(`Consulta: ${getReasonText(newReason)}`);
    }
    
    const bookAuthor = params.get('bookAuthor') || '';
    setMessage(getMessage(newReason, bookTitle, bookAuthor));
  };

  return (
    <form class="contact-form" action="https://formspree.io/f/xrbolkpb" method="post">
      <input type="hidden" name="_subject" value={subject()} />
      
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" required />
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-group">
        <label for="reason">Motivo de la consulta</label>
        <select 
          id="reason" 
          name="reason" 
          required
          value={reason()}
          onInput={handleReasonChange}
        >
          <option value="" disabled>Seleccione una opción</option>
          <option value="buy">Compra</option>
          <option value="ask">Consulta</option>
          <option value="distribution">Distribución</option>
          <option value="invitation">Invitación</option>
          <option value="other">Otro</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" rows={6} required>{message()}</textarea>
      </div>
      
      <button type="submit" class="btn-primary">Enviar mensaje</button>
    </form>
  );
}
