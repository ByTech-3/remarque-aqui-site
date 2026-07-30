/**
 * Fonte única de verdade para os dados de contato da Remarque Aqui.
 * Qualquer alteração de telefone/endereço deve ser feita apenas aqui.
 */

export const MARCA = "Remarque Aqui";

/** Telefone formatado para exibição. */
export const TELEFONE_EXIBICAO = "(41) 99576-2174";

/** Link de ligação direta (Google Ads — campanha de chamadas). */
export const TELEFONE_HREF = "tel:+5541995762174";

/** Número no formato internacional usado pelo wa.me. */
export const WHATSAPP_NUMERO = "5541995762174";

const MENSAGEM_WHATSAPP =
  "Olá! Gostaria de um orçamento para remarcação de chassi/motor.";

/** Link do WhatsApp já com a mensagem pré-preenchida e codificada. */
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
  MENSAGEM_WHATSAPP,
)}`;

export const LOCALIZACAO_CURTA = "Em frente ao DETRAN do Tarumã";
export const LOCALIZACAO_COMPLETA =
  "Em frente ao DETRAN do Tarumã — Curitiba, PR";
export const CIDADE = "Curitiba, PR";

/** Atributos de tracking lidos pelo Google Tag Manager (ver layout.tsx). */
export const EVENTO_LIGACAO = "click_ligacao";
export const EVENTO_WHATSAPP = "click_whatsapp";
