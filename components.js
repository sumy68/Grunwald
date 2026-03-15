function initPage(activeNav = '') {
  const root = getRoot();

  document.body.insertAdjacentHTML('afterbegin', `
  <nav class="navbar">
    <a href="${root}index.html" style="text-decoration:none">
      <span class="logo-name">Eva Kell-Grunwald</span>
      <span class="logo-sub">Allgemeinmedizin · Schweitenkirchen</span>
    </a>
    <ul class="nav-links">
      <li><a href="${root}index.html" class="${activeNav==='home'?'active':''}">Home</a></li>
      <li class="nav-dropdown">
        <a href="${root}team.html" class="${activeNav==='team'?'active':''}">Team ▾</a>
        <div class="dropdown-menu">
          <a href="${root}team.html">Alle Teammitglieder</a>
          <a href="${root}team/eva-kell-grunwald.html">Eva Kell-Grunwald</a>
          <a href="${root}team/alexandra-jaksch.html">Alexandra Jaksch</a>
          <a href="${root}team/sarah-ziegltrum.html">Sarah Ziegltrum</a>
        </div>
      </li>
      <li class="nav-dropdown">
        <a href="${root}schwerpunkte.html" class="${activeNav==='schwerpunkte'?'active':''}">Schwerpunkte ▾</a>
        <div class="dropdown-menu">
          <a href="${root}schwerpunkte/bluthochdruck.html">Bluthochdruck (Hypertonie)</a>
          <a href="${root}schwerpunkte/diabetes.html">Diabetes Typ II</a>
          <a href="${root}schwerpunkte/praevention.html">Präventionsmedizin</a>
        </div>
      </li>
      <li class="nav-dropdown">
        <a href="${root}leistungen.html" class="${activeNav==='leistungen'?'active':''}">Leistungen ▾</a>
        <div class="dropdown-menu">
          <div class="dropdown-cat">Kassenleistungen</div>
          <a href="${root}leistungen/allgemeine-leistungen.html">Allgemeine Leistungen</a>
          <div class="dropdown-cat">Selbstzahler (IGeL)</div>
          <a href="${root}leistungen/gesundheitsleistungen.html">Gesundheitsleistungen</a>
        </div>
      </li>
      <li><a href="${root}sprechzeiten.html" class="${activeNav==='sprechzeiten'?'active':''}">Sprechzeiten</a></li>
      <li><a href="${root}kontakt.html" class="${activeNav==='kontakt'?'active':''}">Kontakt</a></li>
      <li><a href="tel:+498444545" class="nav-btn">📞 Termin buchen</a></li>
    </ul>
  </nav>`);

  document.body.insertAdjacentHTML('beforeend', `
  <div class="hours-strip">
    <div class="hours-label">Sprechzeiten</div>
    <div class="hours-items">
      <div class="h-entry"><span class="h-day">Mo</span><span class="h-time">09–12 · 18–19 Uhr</span></div>
      <div class="h-entry"><span class="h-day">Di</span><span class="h-time">09–12 · 16–18 Uhr</span></div>
      <div class="h-entry"><span class="h-day">Mi</span><span class="h-time">09–13 Uhr</span></div>
      <div class="h-entry"><span class="h-day">Do</span><span class="h-time">09–12 · 16–18 Uhr</span></div>
      <div class="h-entry"><span class="h-day">Fr</span><span class="h-time">09–13 Uhr</span></div>
    </div>
    <div class="notruf">Notfall: <strong>112</strong> &nbsp;|&nbsp; Bereitschaft: <strong>116 117</strong></div>
  </div>
  <footer>
    <div>© 2025 Praxis Eva Kell-Grunwald · Allgemeinmedizin Schweitenkirchen</div>
    <div class="footer-links">
      <a href="${root}impressum.html">Impressum</a>
      <a href="${root}datenschutz.html">Datenschutz</a>
    </div>
  </footer>`);
}

function getRoot() {
  const path = window.location.pathname;
  const dir = path.substring(0, path.lastIndexOf('/') + 1);
  const parts = dir.split('/').filter(p => p.length > 0);
  if (parts.length === 0) return '';
  if (parts.length === 1) return '../';
  return '../../';
}
