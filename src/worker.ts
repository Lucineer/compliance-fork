interface Env {
    // Environment variables can be defined here
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compliance Fork - EU AI Act Audit Vessel</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0a0a0f;
            color: #f8fafc;
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Hero Section */
        .hero {
            padding: 80px 0;
            text-align: center;
            border-bottom: 1px solid #1e293b;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-tagline {
            font-size: 1.5rem;
            color: #94a3b8;
            margin-bottom: 40px;
        }
        
        .accent {
            color: #ef4444;
        }
        
        /* Sections */
        .section {
            padding: 60px 0;
            border-bottom: 1px solid #1e293b;
        }
        
        .section-title {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 30px;
            color: #f1f5f9;
        }
        
        /* Timeline */
        .timeline {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 30px;
        }
        
        .timeline-item {
            flex: 1;
            min-width: 250px;
            background: #1e1e2e;
            padding: 25px;
            border-radius: 12px;
            border-left: 4px solid #ef4444;
        }
        
        .timeline-date {
            color: #ef4444;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        /* Risk Tiers */
        .risk-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .risk-card {
            background: #1e1e2e;
            padding: 25px;
            border-radius: 12px;
            transition: transform 0.3s ease;
        }
        
        .risk-card:hover {
            transform: translateY(-5px);
        }
        
        .risk-card.unacceptable {
            border-top: 4px solid #ef4444;
        }
        
        .risk-card.high {
            border-top: 4px solid #f97316;
        }
        
        .risk-card.limited {
            border-top: 4px solid #eab308;
        }
        
        .risk-card.minimal {
            border-top: 4px solid #22c55e;
        }
        
        .risk-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        /* Features */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        
        .feature-card {
            background: #1e1e2e;
            padding: 25px;
            border-radius: 12px;
        }
        
        .feature-icon {
            color: #ef4444;
            font-size: 2rem;
            margin-bottom: 15px;
        }
        
        /* Dashboard Preview */
        .dashboard-preview {
            background: #1e1e2e;
            padding: 30px;
            border-radius: 12px;
            margin-top: 30px;
            overflow-x: auto;
        }
        
        .dashboard-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .dashboard-table th {
            text-align: left;
            padding: 15px;
            background: #2d2d44;
            color: #f1f5f9;
            font-weight: 600;
        }
        
        .dashboard-table td {
            padding: 15px;
            border-bottom: 1px solid #334155;
        }
        
        .status-badge {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        .status-compliant {
            background: #14532d;
            color: #86efac;
        }
        
        .status-violation {
            background: #7f1d1d;
            color: #fca5a5;
        }
        
        /* Checklist */
        .checklist {
            background: #1e1e2e;
            padding: 30px;
            border-radius: 12px;
            margin-top: 30px;
        }
        
        .checklist-item {
            display: flex;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #334155;
        }
        
        .checklist-item:last-child {
            border-bottom: none;
        }
        
        .checklist-checkbox {
            width: 20px;
            height: 20px;
            margin-right: 15px;
            accent-color: #ef4444;
        }
        
        /* API Section */
        .api-endpoints {
            background: #1e1e2e;
            padding: 30px;
            border-radius: 12px;
            margin-top: 30px;
        }
        
        .endpoint {
            background: #2d2d44;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            font-family: monospace;
        }
        
        .method {
            display: inline-block;
            padding: 5px 10px;
            background: #ef4444;
            color: white;
            border-radius: 4px;
            font-weight: 600;
            margin-right: 10px;
        }
        
        /* Footer */
        .footer {
            padding: 40px 0;
            text-align: center;
            color: #94a3b8;
        }
        
        .footer a {
            color: #ef4444;
            text-decoration: none;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-tagline {
                font-size: 1.2rem;
            }
            
            .section {
                padding: 40px 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Hero Section -->
        <section class="hero">
            <h1>Compliance Fork</h1>
            <p class="hero-tagline">Watch any vessel. Report violations. Ship proof.</p>
            <p style="color: #64748b; max-width: 800px; margin: 0 auto;">
                Real-time compliance monitoring for EU AI Act enforcement. 
                Continuous audit infrastructure for AI systems in high-risk domains.
            </p>
        </section>
        
        <!-- EU AI Act Timeline -->
        <section class="section">
            <h2 class="section-title">EU AI Act Timeline</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">June 2024</div>
                    <p>Act enters into force</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">August 2024</div>
                    <p>Prohibitions apply</p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">August 2026</div>
                    <p><span class="accent">High-risk AI systems enforcement</span></p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">August 2027</div>
                    <p>General-purpose AI rules apply</p>
                </div>
            </div>
        </section>
        
        <!-- Risk Tiers -->
        <section class="section">
            <h2 class="section-title">Risk Tiers</h2>
            <div class="risk-grid">
                <div class="risk-card unacceptable">
                    <div class="risk-title">Unacceptable Risk</div>
                    <p>Social scoring, manipulative AI. Banned.</p>
                </div>
                <div class="risk-card high">
                    <div class="risk-title">High Risk</div>
                    <p>Critical infrastructure, education, employment. Strict compliance required.</p>
                </div>
                <div class="risk-card limited">
                    <div class="risk-title">Limited Risk</div>
                    <p>Chatbots, emotion recognition. Transparency obligations.</p>
                </div>
                <div class="risk-card minimal">
                    <div class="risk-title">Minimal Risk</div>
                    <p>Spam filters, AI video games. No restrictions.</p>
                </div>
            </div>
        </section>
        
        <!-- What We Check -->
        <section class="section">
            <h2 class="section-title">What We Check</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🔍</div>
                    <h3>Transparency</h3>
                    <p>Documentation, explainability, and user information requirements.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👁️</div>
                    <h3>Human Oversight</h3>
                    <p>Human-in-the-loop mechanisms and override capabilities.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Logging & Audit</h3>
                    <p>Automated logging of AI system operations and decisions.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚠️</div>
                    <h3>Risk Classification</h3>
                    <p>Proper categorization according to EU AI Act Annexes.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🛡️</div>
                    <h3>Data Governance</h3>
                    <p>Training data quality, privacy, and bias mitigation.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚖️</div>
                    <h3>Conformity Assessment</h3>
                    <p>Technical documentation and quality management systems.</p>
                </div>
            </div>
        </section>
        
        <!-- Live Dashboard -->
        <section class="section">
            <h2 class="section-title">Live Dashboard</h2>
            <div class="dashboard-preview">
                <table class="dashboard-table">
                    <thead>
                        <tr>
                            <th>Vessel ID</th>
                            <th>System Type</th>
                            <th>Risk Level</th>
                            <th>Last Audit</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CV-001</td>
                            <td>Recruitment AI</td>
                            <td>High</td>
                            <td>2024-03-15</td>
                            <td><span class="status-badge status-violation">Violation</span></td>
                        </tr>
                        <tr>
                            <td>CV-002</td>
                            <td>Medical Diagnostic</td>
                            <td>High</td>
                            <td>2024-03-14</td>
                            <td><span class="status-badge status-compliant">Compliant</span></td>
                        </tr>
                        <tr>
                            <td>CV-003</td>
                            <td>Credit Scoring</td>
                            <td>High</td>
                            <td>2024-03-14</td>
                            <td><span class="status-badge status-violation">Violation</span></td>
                        </tr>
                        <tr>
                            <td>CV-004</td>
                            <td>Chat Support</td>
                            <td>Limited</td>
                            <td>2024-03-13</td>
                            <td><span class="status-badge status-compliant">Compliant</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        
        <!-- Compliance Checklist -->
        <section class="section">
            <h2 class="section-title">Compliance Checklist</h2>
            <div class="checklist">
                <div class="checklist-item">
                    <input type="checkbox" class="checklist-checkbox" checked>
                    <span>Risk classification system implemented</span>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" class="checklist-checkbox" checked>
                    <span>Technical documentation maintained</span>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" class="checklist-checkbox">
                    <span>Quality management system in place</span>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" class="checklist-checkbox" checked>
                    <span>Automated logging enabled</span>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" class="checklist-checkbox">
                    <span>Human oversight mechanisms</span>
                </div>
                <div class="checklist-item">
                    <input type="checkbox" class="checklist-checkbox" checked>
                    <span>Transparency disclosures</span>
                </div>
            </div>
        </section>
        
        <!-- API Endpoints -->
        <section class="section">
            <h2 class="section-title">API Endpoints</h2>
            <div class="api-endpoints">
                <div class="endpoint">
                    <span class="method">GET</span>
                    <span>/api/audit?url={vessel-url}</span>
                    <p style="margin-top: 10px; color: #94a3b8;">Check compliance status of a vessel URL</p>
                </div>
                <div class="endpoint">
                    <span class="method">GET</span>
                    <span>/api/report?id={audit-id}</span>
                    <p style="margin-top: 10px; color: #94a3b8;">Generate detailed compliance report</p>
                </div>
                <div class="endpoint">
                    <span class="method">GET</span>
                    <span>/health</span>
                    <p style="margin-top: 10px; color: #94a3b8;">Service health check</p>
                </div>
            </div>
        </section>
        
        <!-- Footer -->
        <footer class="footer">
            <p><i style="color:#888">Built with <a href="https://github.com/Lucineer/cocapn-ai" style="color:#ef4444">Cocapn</a></i></p>
            <p style="margin-top: 10px; font-size: 0.9rem;">
                Compliance Fork © 2024 | EU AI Act Audit Vessel
            </p>
        </footer>
    </div>
</body>
</html>
`;

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);
        const path = url.pathname;

        // Set security headers
        const securityHeaders = {
            'Content-Security-Policy': "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;",
            'X-Frame-Options': 'DENY',
            'X-Content-Type-Options': 'nosniff',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
        };

        // Route handling
        if (path === '/' || path === '/index.html') {
            return new Response(html, {
                status: 200,
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    ...securityHeaders
                }
            });
        }

        if (path === '/health') {
            return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    ...securityHeaders
                }
            });
        }

        if (path === '/api/audit') {
            const vesselUrl = url.searchParams.get('url');
            if (!vesselUrl) {
                return new Response(JSON.stringify({ error: 'Missing vessel URL parameter' }), {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        ...securityHeaders
                    }
                });
            }

            // Mock audit response
            const mockAudit = {
                id: `audit_${Date.now()}`,
                url: vesselUrl,
                timestamp: new Date().toISOString(),
                riskLevel: Math.random() > 0.5 ? 'high' : 'limited',
                complianceScore: Math.floor(Math.random() * 100),
                violations: [
                    {
                        code: 'ART_13',
                        description: 'Transparency documentation incomplete',
                        severity: 'medium'
                    }
                ],
                status: Math.random() > 0.3 ? 'compliant' : 'violation'
            };

            return new Response(JSON.stringify(mockAudit), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    ...securityHeaders
                }
            });
        }

        if (path === '/api/report') {
            const auditId = url.searchParams.get('id');
            if (!auditId) {
                return new Response(JSON.stringify({ error: 'Missing audit ID parameter' }), {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        ...securityHeaders
                    }
                });
            }

            // Mock report response
            const mockReport = {
                id: auditId,
                generatedAt: new Date().toISOString(),
                summary: {
                    totalChecks: 42,
                    passed: 35,
                    failed: 7,
                    complianceRate: 83.3
                },
                details: {
                    transparency: { passed: true, score: 85 },
                    humanOversight: { passed: false, score: 45 },
                    logging: { passed: true, score: 92 },
                    riskClassification: { passed: true, score: 88 },
                    dataHandling: { passed: false, score: 60 }
                },
                recommendations: [
                    'Implement human oversight mechanisms',
                    'Improve data governance documentation'
                ]
            };

            return new Response(JSON.stringify(mockReport), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    ...securityHeaders
                }
            });
        }

        // 404 for unknown routes
        return new Response('Not Found', {
            status: 404,
            headers: securityHeaders
        });
    }
};