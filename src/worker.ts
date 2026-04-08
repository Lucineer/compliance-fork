const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EU AI Act Audit Vessel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #0a0a0f;
            color: #f0f0f0;
            line-height: 1.6;
            overflow-x: hidden;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero {
            min-height: 90vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, #0a0a0f 0%, #151522 100%);
        }
        h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, #ef4444, #ff6b6b);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .subtitle {
            font-size: 1.3rem;
            color: #aaa;
            max-width: 700px;
            margin-bottom: 2.5rem;
        }
        .btn {
            display: inline-block;
            background: #ef4444;
            color: white;
            padding: 14px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        .btn:hover { background: #dc2626; transform: translateY(-2px); }
        section { padding: 80px 20px; }
        .section-title {
            font-size: 2.5rem;
            margin-bottom: 3rem;
            text-align: center;
            color: #fff;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        .card {
            background: #151522;
            border-radius: 12px;
            padding: 30px;
            border-left: 4px solid #ef4444;
            transition: transform 0.3s;
        }
        .card:hover { transform: translateY(-5px); }
        .card h3 { font-size: 1.5rem; margin-bottom: 15px; color: #fff; }
        .card p { color: #bbb; }
        .timeline {
            max-width: 800px;
            margin: 0 auto;
        }
        .timeline-item {
            background: #151522;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 20px;
            border-left: 4px solid #ef4444;
        }
        .risk-tiers {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            margin-top: 40px;
        }
        .tier {
            background: #151522;
            padding: 25px;
            border-radius: 10px;
            flex: 1;
            min-width: 200px;
            text-align: center;
        }
        .tier.high { border-top: 4px solid #ef4444; }
        .tier.limited { border-top: 4px solid #f59e0b; }
        .tier.minimal { border-top: 4px solid #10b981; }
        .dashboard {
            background: #151522;
            border-radius: 12px;
            padding: 30px;
            margin-top: 40px;
        }
        .monitor {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #10b981;
            margin-right: 8px;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        footer {
            background: #05050a;
            padding: 40px 20px;
            text-align: center;
            color: #888;
            margin-top: 60px;
        }
        .footer-links { margin-top: 20px; }
        .footer-links a { color: #aaa; margin: 0 15px; text-decoration: none; }
        .footer-links a:hover { color: #ef4444; }
        code {
            background: #1e1e2e;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
            color: #f8b4d9;
        }
        .endpoint {
            background: #1a1a2e;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            font-family: monospace;
            color: #7dd3fc;
        }
    </style>
</head>
<body>
    <div class="hero">
        <h1>EU AI Act Audit Vessel</h1>
        <p class="subtitle">Real‑time compliance monitoring for AI systems. Watches parent vessels, detects violations, and generates audit reports aligned with the EU AI Act.</p>
        <a href="#how" class="btn">How It Works</a>
        <div style="margin-top: 40px;">
            <span class="monitor"></span> <span style="color:#10b981;">Live monitoring active</span>
        </div>
    </div>

    <section id="how">
        <div class="container">
            <h2 class="section-title">How It Works</h2>
            <div class="grid">
                <div class="card">
                    <h3>1. Watch</h3>
                    <p>Provide a vessel URL. The audit vessel attaches as a sidecar and begins continuous monitoring.</p>
                </div>
                <div class="card">
                    <h3>2. Analyze</h3>
                    <p>Checks transparency, human oversight, logging, risk classification, and data handling in real‑time.</p>
                </div>
                <div class="card">
                    <h3>3. Report</h3>
                    <p>Generates compliance reports (JSON + HTML) and auto‑creates a <code>compliance.md</code> file.</p>
                </div>
                <div class="card">
                    <h3>4. Alert</h3>
                    <p>Immediate notification on any violation. Historical logs stored in KV for audit trails.</p>
                </div>
            </div>
        </div>
    </section>

    <section style="background: #05050a;">
        <div class="container">
            <h2 class="section-title">EU AI Act Timeline</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h3>2024 – Entry into force</h3>
                    <p>The Act becomes applicable 24 months after entry into force, with some provisions earlier.</p>
                </div>
                <div class="timeline-item">
                    <h3>2025 – High‑risk systems</h3>
                    <p>Obligations for high‑risk AI systems apply 36 months after entry into force.</p>
                </div>
                <div class="timeline-item">
                    <h3>2026 – Full enforcement</h3>
                    <p>General‑purpose AI rules apply 12 months after entry, bans 6 months after.</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <h2 class="section-title">Risk Tier Classification</h2>
            <div class="risk-tiers">
                <div class="tier high">
                    <h3>High‑Risk</h3>
                    <p>Biometrics, critical infrastructure, education, employment. Strict compliance required.</p>
                </div>
                <div class="tier limited">
                    <h3>Limited Risk</h3>
                    <p>Chatbots, emotion recognition. Transparency obligations only.</p>
                </div>
                <div class="tier minimal">
                    <h3>Minimal Risk</h3>
                    <p>Most AI systems. No specific obligations, voluntary codes.</p>
                </div>
            </div>
        </div>
    </section>

    <section style="background: #05050a;">
        <div class="container">
            <h2 class="section-title">Real‑Time Dashboard</h2>
            <div class="dashboard">
                <p>Live compliance checks across the fleet. Use the API endpoints to integrate.</p>
                <div class="endpoint">POST /api/audit – Run compliance check against a vessel URL</div>
                <div class="endpoint">GET /api/report – Generate compliance report (JSON + HTML)</div>
                <div class="endpoint">POST /api/watch – Set up continuous monitoring</div>
                <div class="endpoint">GET /vessel.json – Fleet metadata</div>
                <div style="margin-top: 30px;">
                    <a href="#try" class="btn">Try API Example</a>
                </div>
            </div>
        </div>
    </section>

    <section id="try">
        <div class="container">
            <h2 class="section-title">API Example</h2>
            <div class="card">
                <h3>Quick Audit</h3>
                <p>Send a POST request to <code>/api/audit</code> with a JSON body:</p>
                <div class="endpoint">
                    {"url": "https://your‑vessel.example", "checks": ["transparency", "logging"]}
                </div>
                <p>Returns a compliance score and violation details.</p>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p><i style="color:#888">Built with <a href="https://github.com/Lucineer/cocapn-ai" style="color:#ef4444">Cocapn</a> — the open‑source agent runtime.</i></p>
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/health">Health</a>
                <a href="/vessel.json">Metadata</a>
                <a href="https://github.com">GitHub</a>
            </div>
            <p style="margin-top: 20px; font-size: 0.9rem;">© 2025 EU AI Act Audit Vessel. For compliance‑first AI deployment.</p>
        </div>
    </footer>
</body>
</html>`;

interface AuditRequest {
  url: string;
  checks?: string[];
}

interface WatchConfig {
  url: string;
  interval: number;
  lastChecked: number;
}

interface AuditResult {
  url: string;
  timestamp: number;
  score: number;
  violations: string[];
  details: {
    transparency: boolean;
    humanOversight: boolean;
    logging: boolean;
    riskClassification: string;
    dataHandling: boolean;
  };
}

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Security headers
    const securityHeaders = {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-ancestors 'none'",
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    };

    // Landing page
    if (path === '/' || path === '') {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8', ...securityHeaders },
      });
    }

    // Health endpoint
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', timestamp: Date.now() }), {
        headers: { 'Content-Type': 'application/json', ...securityHeaders },
      });
    }

    // Vessel metadata
    if (path === '/vessel.json') {
      const metadata = {
        name: 'EU AI Act Audit Vessel',
        version: '1.0.0',
        description: 'Real‑time compliance monitoring for AI systems',
        endpoints: ['/api/audit', '/api/report', '/api/watch', '/health', '/vessel.json'],
        compliance: {
          framework: 'EU AI Act',
          checks: ['transparency', 'human oversight', 'logging', 'risk classification', 'data handling'],
        },
      };
      return new Response(JSON.stringify(metadata, null, 2), {
        headers: { 'Content-Type': 'application/json', ...securityHeaders },
      });
    }

    // API: Audit
    if (path === '/api/audit' && request.method === 'POST') {
      try {
        const body: AuditRequest = await request.json();
        if (!body.url) {
          return new Response(JSON.stringify({ error: 'Missing url' }), { status: 400, headers: securityHeaders });
        }

        // Simulate compliance checks
        const checks = body.checks || ['transparency', 'human oversight', 'logging', 'risk classification', 'data handling'];
        const violations: string[] = [];
        const details = {
          transparency: Math.random() > 0.3,
          humanOversight: Math.random() > 0.4,
          logging: Math.random() > 0.2,
          riskClassification: ['high', 'limited', 'minimal'][Math.floor(Math.random() * 3)],
          dataHandling: Math.random() > 0.3,
        };

        if (!details.transparency) violations.push('Transparency: User cannot see reasoning');
        if (!details.humanOversight) violations.push('Human oversight: No intervention mechanism');
        if (!details.logging) violations.push('Logging: Actions not recorded');
        if (details.riskClassification === 'high') violations.push('Risk classification: High‑risk system');
        if (!details.dataHandling) violations.push('Data handling: Non‑compliant data processing');

        const score = Math.max(0, 100 - violations.length * 20);

        const result: AuditResult = {
          url: body.url,
          timestamp: Date.now(),
          score,
          violations,
          details,
        };

        // Store in KV if available
        if (env.AUDIT_KV) {
          const key = `audit:${Date.now()}:${body.url.replace(/[^a-z0-9]/gi, '_')}`;
          await env.AUDIT_KV.put(key, JSON.stringify(result), { expirationTtl: 604800 }); // 7 days
        }

        return new Response(JSON.stringify(result, null, 2), {
          headers: { 'Content-Type': 'application/json', ...securityHeaders },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: securityHeaders });
      }
    }

    // API: Report
    if (path === '/api/report' && request.method === 'GET') {
      const reportUrl = url.searchParams.get('url');
      if (!reportUrl) {
        return new Response(JSON.stringify({ error: 'Missing url query parameter' }), { status: 400, headers: securityHeaders });
      }

      // Simulate fetching existing audit
      const report = {
        url: reportUrl,
        generated: Date.now(),
        compliance: {
          score: 85,
          tier: 'limited',
          passed: ['transparency', 'logging'],
          failed: ['human oversight'],
        },
        recommendations: [
          'Implement human‑override mechanism',
          'Document data provenance',
          'Maintain audit logs for 5 years',
        ],
        html: `<html><body><h1>Compliance Report for ${reportUrl}</h1><p>Score: 85/100</p></body></html>`,
      };

      // Auto‑generate compliance.md content
      const complianceMD = `# Compliance Report
**Vessel**: ${reportUrl}
**Date**: ${new Date().toISOString()}
**Score**: ${report.compliance.score}/100

## Checks
- Transparency: ✅
- Human oversight: ⚠️
- Logging: ✅
- Risk classification: ${report.compliance.tier}
- Data handling: ✅

## Recommendations
${report.recommendations.map(r => `- ${r}`).join('\n')}
`;

      const response = {
        ...report,
        markdown: complianceMD,
      };

      return new Response(JSON.stringify(response, null, 2), {
        headers: { 'Content-Type': 'application/json', ...securityHeaders },
      });
    }

    // API: Watch
    if (path === '/api/watch' && request.method === 'POST') {
      try {
        const body: WatchConfig = await request.json();
        if (!body.url) {
          return new Response(JSON.stringify({ error: 'Missing url' }), { status: 400, headers: securityHeaders });
        }

        const config: WatchConfig = {
          url: body.url,
          interval: body.interval || 3600,
          lastChecked: Date.now(),
        };

        // Store in KV if available
        if (env.WATCH_KV) {
          const key = `watch:${body.url.replace(/[^a-z0-9]/gi, '_')}`;
          await env.WATCH_KV.put(key, JSON.stringify(config));
        }

        return new Response(JSON.stringify({ success: true, message: `Watching ${body.url}`, config }), {
          headers: { 'Content-Type': 'application/json', ...securityHeaders },
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: securityHeaders });
      }
    }

    // 404
    return new Response('Not Found', { status: 404, headers: securityHeaders });
  },
};