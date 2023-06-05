export default function formatPhone(phone: string): string {
  return phone.replace(/[^\d]/g, "");
}
