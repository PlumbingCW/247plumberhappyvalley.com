(function(){
  var BP = 768;
  var drawer = document.querySelector('.mob-drawer');
  var overlay = document.querySelector('.mob-overlay');
  var burger = document.querySelector('.burger');
  var closeBtn = document.querySelector('.mob-close');
  function openMenu(){
    if(!drawer) return;
    drawer.classList.add('open'); overlay.classList.add('open');
    burger.setAttribute('aria-expanded','true'); drawer.setAttribute('aria-hidden','false');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeMenu(){
    if(!drawer) return;
    drawer.classList.remove('open'); overlay.classList.remove('open');
    burger.setAttribute('aria-expanded','false'); drawer.setAttribute('aria-hidden','true');
    document.documentElement.style.overflow = '';
  }
  if(burger){ burger.addEventListener('click', openMenu); }
  if(closeBtn){ closeBtn.addEventListener('click', closeMenu); }
  if(overlay){ overlay.addEventListener('click', closeMenu); }
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', function(){ if(window.innerWidth > BP) closeMenu(); });
  var qs = document.querySelectorAll('.faq-q');
  Array.prototype.forEach.call(qs, function(q){
    q.addEventListener('click', function(){
      var panel = document.getElementById(q.getAttribute('aria-controls'));
      var open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel.style.maxHeight = open ? '0px' : panel.scrollHeight + 'px';
    });
  });
  window.addEventListener('resize', function(){
    Array.prototype.forEach.call(qs, function(q){
      if(q.getAttribute('aria-expanded') === 'true'){
        var panel = document.getElementById(q.getAttribute('aria-controls'));
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
})();
