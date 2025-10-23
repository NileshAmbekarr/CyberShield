// CyberShield Solutions - Main JS
(function(){
  const menuBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if(menuBtn && navLinks){
    const openMenu = () => {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.gap = '8px';
      navLinks.style.background = '#ffffff';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '58px';
      navLinks.style.right = '20px';
      navLinks.style.padding = '12px';
      navLinks.style.border = '1px solid #E9ECEF';
      navLinks.style.borderRadius = '12px';
      navLinks.style.boxShadow = '0 8px 24px rgba(0,0,0,.08)';
      menuBtn.setAttribute('aria-expanded', 'true');
    };
    const closeMenu = () => {
      navLinks.style.display = 'none';
      menuBtn.setAttribute('aria-expanded', 'false');
    };
    menuBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const isOpen = navLinks.style.display === 'flex';
      if(isOpen) closeMenu(); else openMenu();
    });
    document.addEventListener('click', (e)=>{
      const isOpen = navLinks.style.display === 'flex';
      if(isOpen && !navLinks.contains(e.target) && e.target !== menuBtn){
        closeMenu();
      }
    });
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){
        closeMenu();
      }
    });
  }

  // Form handling
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = contactForm.querySelector('[name=name]').value.trim();
      const email = contactForm.querySelector('[name=email]').value.trim();
      const service = contactForm.querySelector('[name=service]').value;
      const message = contactForm.querySelector('[name=message]').value.trim();

      if(!name || !email || !message){
        alert('Please fill in name, email, and your message.');
        return;
      }

      // Mailto fallback. Replace with Formspree or backend later.
      const subject = encodeURIComponent(`[Inquiry] ${service} - ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    });
  }

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{ if(ent.isIntersecting){ ent.target.classList.add('reveal-in'); io.unobserve(ent.target); }});
    }, {threshold: 0.15});
    revealEls.forEach(el=>io.observe(el));
  } else {
    revealEls.forEach(el=>el.classList.add('reveal-in'));
  }

  // Parallax hero
  const hero = document.querySelector('.hero.parallax');
  if(hero){
    window.addEventListener('scroll', ()=>{
      const y = window.scrollY * 0.4;
      hero.style.backgroundPosition = `center ${-y}px`;
    }, {passive:true});
  }

  // Carousel (testimonials)
  const carousel = document.getElementById('testimonials');
  if(carousel){
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    const dotsWrap = carousel.querySelector('.carousel-dots');
    let idx = 0; let timer;
    const makeDots = ()=>{
      items.forEach((_, i)=>{
        const d = document.createElement('button'); d.className = 'dot' + (i===0?' active':''); d.setAttribute('aria-label', `Go to slide ${i+1}`);
        d.addEventListener('click', ()=>{ go(i); reset(); }); dotsWrap.appendChild(d);
      });
    };
    const update = ()=>{
      track.style.transform = `translateX(-${idx*100}%)`;
      dotsWrap.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active', i===idx));
    };
    const go = (i)=>{ idx = (i+items.length)%items.length; update(); };
    const next = ()=>go(idx+1);
    const reset = ()=>{ clearInterval(timer); timer = setInterval(next, 4000); };
    makeDots(); update(); reset();
  }

  // Back to top
  const backBtn = document.getElementById('backToTop');
  if(backBtn){
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 300) backBtn.classList.add('show'); else backBtn.classList.remove('show');
    }, {passive:true});
    backBtn.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
  }

  // Cookie consent
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAccept = document.getElementById('cookieAccept');
  if(cookieBanner){
    const key = 'css_cookie_ok_v1';
    if(localStorage.getItem(key) !== '1') cookieBanner.classList.add('show');
    if(cookieAccept){ cookieAccept.addEventListener('click', ()=>{ localStorage.setItem(key,'1'); cookieBanner.classList.remove('show'); }); }
  }

  // Tabs
  document.querySelectorAll('.tabs').forEach(tabs=>{
    tabs.addEventListener('click', (e)=>{
      const t = e.target.closest('.tab'); if(!t) return;
      const name = t.dataset.tab;
      tabs.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active', x===t));
      const panels = tabs.parentElement.querySelectorAll('.tab-panel');
      panels.forEach(p=>p.classList.toggle('active', p.dataset.tab === name));
    });
  });

  // Accordion
  document.querySelectorAll('.accordion .acc-head').forEach(head=>{
    head.addEventListener('click', ()=>{
      head.parentElement.classList.toggle('open');
    });
  });

  // Modal (generic)
  const modal = document.getElementById('requestModal');
  if(modal){
    const openers = document.querySelectorAll('[data-open="requestModal"]');
    const closer = modal.querySelector('[data-close]');
    openers.forEach(btn=>btn.addEventListener('click', ()=> modal.classList.add('open')));
    closer && closer.addEventListener('click', ()=> modal.classList.remove('open'));
    modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.classList.remove('open'); });
  }
})();
