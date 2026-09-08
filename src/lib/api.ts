// Base URL do backend Flask. Em produção (Coolify), defina NEXT_PUBLIC_API_URL
// com a URL pública do serviço de backend — variáveis NEXT_PUBLIC_* são
// embutidas no bundle durante o build, então precisam existir nesse momento.
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
