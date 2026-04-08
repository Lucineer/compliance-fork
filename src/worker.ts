export interface Env {
  AUDIT_LOGS: KVNamespace;
}

interface AuditData {
  timestamp: string;
  url: string;
  riskTier: string;
  checks: string[];
  compliant: boolean;
}

const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-ancestors 'none'",
  'X-Frame-Options': 'DENY',
};

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 'Content-Type': 'application/json', ...securityHeaders }
      });
    }
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8', ...securityHeaders }
    });
  }
};
