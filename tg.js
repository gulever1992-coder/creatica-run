/* Поддержка Telegram Mini App. Вне Telegram файл ничего не делает и внешних скриптов не загружает. */
(function(){
  var inTg=false;
  try{ inTg=/tgWebAppData|tgWebAppPlatform/.test(location.hash+location.search)||!!sessionStorage.getItem('__telegram__initParams'); }catch(e){}
  if(!inTg) return;

  var s=document.createElement('script'); s.src='https://telegram.org/js/telegram-web-app.js'; s.onload=init; document.head.appendChild(s);

  function init(){
    var tg=window.Telegram&&window.Telegram.WebApp; if(!tg) return;
    document.documentElement.classList.add('tg');
    try{ tg.ready(); tg.expand(); }catch(e){}
    try{ if(tg.disableVerticalSwipes) tg.disableVerticalSwipes(); }catch(e){}       // чтобы жест вниз в игре не сворачивал окно
    try{ tg.setHeaderColor('#F6EEE6'); tg.setBackgroundColor('#F6EEE6'); }catch(e){}

    // кнопка «Назад» Telegram ведёт на главную со списком игр
    try{
      var hub=/\/(index\.html)?$/.test(location.pathname);
      if(hub) tg.BackButton.hide(); else { tg.BackButton.show(); tg.BackButton.onClick(function(){ location.href='./'; }); }
    }catch(e){}

    // внешние ссылки (сайт creatica.shop) открываем средствами Telegram
    document.addEventListener('click',function(e){
      var a=e.target.closest&&e.target.closest('a[target=_blank]');
      if(a&&tg.openLink){ e.preventDefault(); try{ tg.openLink(a.href); }catch(x){ window.open(a.href,'_blank'); } }
    },true);

    // рекорды и прогресс синхронизируем с облаком Telegram (доступны на всех устройствах игрока)
    var KEYS=['cr_best','cd_best','cc_done','cc_models'], cs=tg.CloudStorage;
    if(!cs||!cs.getItems) return;
    function merge(cloud){
      KEYS.forEach(function(k){
        var loc=null, cl=cloud&&cloud[k]; try{ loc=localStorage.getItem(k); }catch(e){}
        var out=loc;
        if(k==='cc_models'){ try{ var a=JSON.parse(loc||'[]'), b=JSON.parse(cl||'[]'); out=JSON.stringify(Array.from(new Set(a.concat(b)))); }catch(e){} }
        else if(cl!=null&&cl!==''){ out=String(Math.max(+loc||0,+cl||0)); }
        if(out!=null&&out!==loc){ try{ localStorage.setItem(k,out); }catch(e){} }
      });
      document.dispatchEvent(new Event('cr-synced'));
    }
    function push(){
      KEYS.forEach(function(k){ var v=null; try{ v=localStorage.getItem(k); }catch(e){} if(v!=null) cs.setItem(k,v); });
    }
    cs.getItems(KEYS,function(err,vals){ merge(err?null:vals); push(); });
    setInterval(push,15000);
    document.addEventListener('visibilitychange',function(){ if(document.hidden) push(); });
  }
})();
