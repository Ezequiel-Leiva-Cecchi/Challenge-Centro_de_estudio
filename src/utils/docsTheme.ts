export const swaggerCustomCss = `
  :root { --cm-blue:#1778aa; --cm-cyan:#39c4d6; --cm-ink:#173247; --cm-soft:#f3fbfd; }
  body { background:#f7fbfc !important; color:var(--cm-ink); }
  .swagger-ui { font-family: Inter, system-ui, sans-serif; color:var(--cm-ink); }
  .swagger-ui .topbar { background:linear-gradient(115deg,#ffffff,#eefbfe); border-bottom:1px solid #d9edf2; padding:12px 0; }
  .swagger-ui .topbar-wrapper img { display:none; }
  .swagger-ui .topbar-wrapper:before { content:'CentroMed'; display:inline-flex; align-items:center; min-height:38px; padding-left:48px; color:var(--cm-ink); font-size:20px; font-weight:800; letter-spacing:-.03em; background:radial-gradient(circle at 18px 19px,#fff 0 5px,var(--cm-cyan) 6px 10px,transparent 11px),linear-gradient(var(--cm-blue),var(--cm-blue)) 16px 7px/4px 24px no-repeat,linear-gradient(var(--cm-blue),var(--cm-blue)) 8px 15px/20px 4px no-repeat; }
  .swagger-ui .info { margin:42px 0 28px; padding:30px; border:1px solid #dcebf0; border-radius:22px; background:#fff; box-shadow:0 18px 50px rgba(28,83,107,.08); }
  .swagger-ui .info .title { color:var(--cm-ink); font-size:38px; letter-spacing:-.04em; }
  .swagger-ui .info p,.swagger-ui .info li,.swagger-ui .info table { color:#617788; }
  .swagger-ui .scheme-container { background:#fff; border:1px solid #dcebf0; border-radius:18px; box-shadow:none; }
  .swagger-ui .opblock-tag { color:var(--cm-ink); border-bottom-color:#dcebf0; }
  .swagger-ui .opblock { border-radius:16px; overflow:hidden; box-shadow:0 10px 28px rgba(28,83,107,.06); }
  .swagger-ui .opblock.opblock-get { border-color:#32a5c0; background:rgba(50,165,192,.06); }
  .swagger-ui .opblock.opblock-post { border-color:#247cb0; background:rgba(36,124,176,.06); }
  .swagger-ui .opblock.opblock-delete { border-color:#db6b72; background:rgba(219,107,114,.055); }
  .swagger-ui .btn.authorize { border-color:var(--cm-blue); color:var(--cm-blue); border-radius:10px; }
  .swagger-ui .btn.execute { background:var(--cm-blue); border-color:var(--cm-blue); border-radius:10px; }
  .swagger-ui input[type=text],.swagger-ui textarea,.swagger-ui select { border:1px solid #cfe2e8; border-radius:9px; }
  @media (max-width: 640px) { .swagger-ui .info { margin:22px 10px; padding:20px; } .swagger-ui .wrapper { padding:0 10px; } .swagger-ui .info .title { font-size:30px; } }
`;

export const landingPage = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#f4fbfd">
  <title>CentroMed API</title>
  <style>
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,sans-serif;background:radial-gradient(circle at 85% 5%,#dff8fb,transparent 25rem),radial-gradient(circle at 5% 75%,#e8f4ff,transparent 28rem),#f7fbfc;color:#173247;line-height:1.55}.shell{width:min(1080px,calc(100% - 32px));margin:auto}.nav{min-height:78px;display:flex;align-items:center;justify-content:space-between}.brand{display:flex;align-items:center;gap:12px;font-weight:850;font-size:20px}.mark{width:42px;height:42px;border-radius:14px;background:#fff;border:1px solid #d9edf2;position:relative;box-shadow:0 8px 25px rgba(32,112,143,.1)}.mark:before,.mark:after{content:'';position:absolute;background:#1778aa;border-radius:99px;left:50%;top:50%;transform:translate(-50%,-50%)}.mark:before{width:22px;height:6px}.mark:after{width:6px;height:22px}.status{display:inline-flex;align-items:center;gap:7px;color:#557184;font-size:13px;font-weight:700}.status i{width:9px;height:9px;border-radius:50%;background:#38bca9;box-shadow:0 0 0 5px rgba(56,188,169,.1)}.hero{min-height:560px;display:grid;grid-template-columns:1.15fr .85fr;gap:64px;align-items:center;padding:54px 0 80px}.eyebrow{color:#1778aa;text-transform:uppercase;letter-spacing:.15em;font-size:11px;font-weight:850}.hero h1{font-size:clamp(48px,7vw,78px);line-height:.98;letter-spacing:-.055em;margin:12px 0 22px}.hero h1 span{color:#22a8bd}.hero p{max-width:620px;color:#62798a;font-size:18px}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 18px;border-radius:13px;background:#1778aa;color:#fff;text-decoration:none;font-weight:800;transition:.2s}.button:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(23,120,170,.2)}.button.secondary{background:#fff;color:#173247;border:1px solid #d7e8ed}.visual{min-height:390px;border:1px solid #d7e9ee;border-radius:32px;background:rgba(255,255,255,.82);box-shadow:0 28px 75px rgba(25,91,117,.12);padding:28px;display:grid;align-content:center;gap:14px;position:relative;overflow:hidden}.visual:after{content:'';position:absolute;width:220px;height:220px;border:40px solid rgba(57,196,214,.09);border-radius:50%;right:-90px;top:-80px}.metric{padding:16px;border:1px solid #deedf1;border-radius:16px;background:#fff;position:relative;z-index:1}.metric small{display:block;color:#8093a2;text-transform:uppercase;letter-spacing:.1em;font-weight:800;font-size:10px}.metric b{font-size:18px}.routes{padding:80px 0;background:#fff;border-block:1px solid #e0edf1}.routes h2{font-size:clamp(34px,5vw,54px);letter-spacing:-.045em;margin:0 0 28px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.card{padding:22px;border:1px solid #dfecef;border-radius:19px;background:#fbfeff;transition:.2s}.card:hover{transform:translateY(-4px);box-shadow:0 16px 35px rgba(35,88,108,.08);border-color:#b9dfe7}.card code{color:#1778aa;font-weight:800}.card p{color:#6c8291;margin-bottom:0;font-size:14px}.footer{padding:32px 0;color:#718695;font-size:13px;display:flex;justify-content:space-between;gap:20px}@media(max-width:760px){.hero{grid-template-columns:1fr;gap:28px;padding-top:35px}.hero h1{font-size:52px}.visual{min-height:300px}.grid{grid-template-columns:1fr}.nav .status{display:none}.footer{flex-direction:column}}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
  </style>
</head>
<body>
  <nav class="shell nav"><div class="brand"><span class="mark" aria-hidden="true"></span>CentroMed API</div><span class="status"><i></i>Servicio documentado</span></nav>
  <main>
    <section class="shell hero"><div><span class="eyebrow">REST API · Node · TypeScript</span><h1>Datos médicos con una interfaz <span>clara.</span></h1><p>CentroMed gestiona usuarios, turnos y estudios con autenticación JWT y permisos por rol. Esta portada presenta la API; la documentación interactiva vive en Swagger.</p><div class="actions"><a class="button" href="/api-docs">Abrir documentación</a><a class="button secondary" href="/health">Ver estado</a></div></div><div class="visual"><div class="metric"><small>Autenticación</small><b>JWT Bearer</b></div><div class="metric"><small>Roles</small><b>Paciente · Médico · Admin</b></div><div class="metric"><small>Recursos</small><b>Usuarios · Turnos · Estudios</b></div></div></section>
    <section class="routes"><div class="shell"><span class="eyebrow">Mapa rápido</span><h2>Una API pequeña, con límites claros.</h2><div class="grid"><article class="card"><code>/api/users</code><p>Registro e inicio de sesión.</p></article><article class="card"><code>/api/appointments</code><p>Creación y consulta de turnos con control de acceso.</p></article><article class="card"><code>/api/studies</code><p>Estudios protegidos por rol y paciente.</p></article></div></div></section>
  </main>
  <footer class="shell footer"><span>CentroMed API · proyecto de portfolio</span><span>Documentación en /api-docs</span></footer>
</body>
</html>`;
