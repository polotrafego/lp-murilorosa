/* Murilo Rosa · O Terceiro Sinal — interações da página */

function scrollCarousel(trackId, dir){
    const track = document.getElementById(trackId);
    if(!track) return;
    const card = track.querySelector('.photo-card');
    const step = card ? card.getBoundingClientRect().width + 18 : 300;
    track.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
  }

  // reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); } });
  }, {threshold:0.1});
  revealEls.forEach(el=>observer.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o=>{ o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null; });
      if(!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });

  // lightbox para as fotos de palco
  function openLightbox(src, alt){
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if(!lb || !img) return;
    img.src = src;
    img.alt = alt || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    const lb = document.getElementById('lightbox');
    if(!lb) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('#palcoTrack .photo-card img').forEach(img=>{
    img.addEventListener('click', ()=> openLightbox(img.src, img.alt));
  });
  const lightboxEl = document.getElementById('lightbox');
  if(lightboxEl){
    lightboxEl.addEventListener('click', (e)=>{ if(e.target === lightboxEl || e.target.classList.contains('lightbox-close')) closeLightbox(); });
  }
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });
