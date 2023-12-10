const footerNavigacija = [
    {text:'Početna', href:'../../index.html'},
    {text:'Tim', href:'../../index.html#galerija'},
    {text:'Sezonske Karte', href:'../../index.html#sezonskeKarte'},
    {text:'O Autoru', href:'autor.html'},
    {text:'Dokumentacija', href:'../doc/Dokumentacija.pdf'},
    {text:'Sitemap', href:'../../sitemap.xml'},
];

const navList = [
    {text:'Početna', href:'../../index.html'},
    {text:'Tim', href:'../../index.html#galerija'},
    {text:'Sezonske Karte', href:'../../index.html#sezonskeKarte'},
    { href: "autor.html", text: "O Autoru" },
];

const socialMediaLinkovi = [
    { href: "https://www.facebook.com/kkcrvenazvezda/?locale=sr_RS", iconClass: "fa-brands fa-facebook" },
    { href: "https://twitter.com/kkcrvenazvezda?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", iconClass: "fa-brands fa-twitter" },
    { href: "https://kkcrvenazvezda.rs/", iconClass: "fa-brands fa-google" },
    { href: "https://www.instagram.com/crvenazvezdakk/", iconClass: "fa-brands fa-instagram" },
    { href: "https://rs.linkedin.com/company/kk-crvena-zvezda-mts", iconClass: "fa-brands fa-linkedin" }
];

function dinamickoIspisivanjeNavigacije(){
    var tekst='<ul id="navigacija" class="navbar-nav coll ms-auto">';
    for(var index in navList){
        var item = navList[index];
        tekst+='<li class="nav-item"><a class="nav-link" href="'+item.href+'">'+item.text.toUpperCase()+'</a></li>';
    }
    tekst+='</ul>';
    $('#navigacija').append(tekst);
}



function dinamickoIspisavanjeFootera(){
    var tekst = '';
    for(var item of footerNavigacija){
        tekst+=`<div class='col-md-6'>
                    <p>
                        <a class="text-dark" href="${item.href}"class="text-danger text-center">${item.text}</a>
                    </p>
                </div>`;
    }
    $('#footer-linkovi').append(tekst);
}

function dinamickoIspisivanjeSocialLinkova(){
    let x = document.getElementById('social');
    socialMediaLinkovi.forEach(link=>{
      let a = document.createElement('a');
      a.href = link.href;
      a.className = 'text-white me-4';
      let i = document.createElement('i');
      i.className = `fa ${link.iconClass}`;
      
      a.appendChild(i);
      x.appendChild(a);
    });
}

dinamickoIspisivanjeNavigacije();
dinamickoIspisavanjeFootera();
dinamickoIspisivanjeSocialLinkova();


