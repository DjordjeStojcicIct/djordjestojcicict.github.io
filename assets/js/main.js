const listIgraca = [
    {ime: 'Milos Teodosic', imgPath: 'assets/images/igraci/teo.png', dres:'4', visina: '196 cm', datum:'19/03/1987', nacionalnost:'Srbija', position:'Bek'},
    {ime: 'Adam Hanga', imgPath: 'assets/images/igraci/hanga.png', dres:'5',visina: '200 cm', datum:'12/04/1989', nacionalnost:'Mađarska', position:'Bek'},
    {ime: 'Dejan Davidovac', imgPath: 'assets/images/igraci/davidovac.png', dres:'7',visina: '203 cm', datum:'17/02/1995', nacionalnost:'Srbija', position:'Krilo'},
    {ime: 'Marko Simonovic', imgPath: 'assets/images/igraci/simonovic.png', dres:'11',visina: '213 cm', datum:'15/10/1999', nacionalnost:'Crna Gora', position:'Centar'},
    {ime: 'Sabaz Nejpir', imgPath: 'assets/images/igraci/nejpir.png', dres:'13',visina: '183 cm', datum:'14/07/1991', nacionalnost:'SAD', position:'Bek'},
    {ime: 'Majk Tobi', imgPath: 'assets/images/igraci/tobi.png', dres:'18',visina: '213 cm', datum:'10/10/1994', nacionalnost:'SAD', position:'Centar'},
    {ime: 'Dzoel Bolomoboj', imgPath: 'assets/images/igraci/bolomboj.png', dres:'21',visina: '203 cm', datum:'28/01/1994', nacionalnost:'Rusija/SAD', position:'Centar'},
    {ime: 'Rokas Geidraitis', imgPath: 'assets/images/igraci/rokas.png', dres:'31',visina: '201 cm', datum:'16/08/1992', nacionalnost:'Litvanija', position:'Krilo'},
    {ime: 'Nemanja Bjelica', imgPath: 'assets/images/igraci/bjelica.png', dres:'44',visina: '208 cm', datum:'09/05/1988', nacionalnost:'Srbija', position:'Krilo'},
    {ime: 'Yago dos Santos', imgPath: 'assets/images/igraci/yago.png', dres:'99',visina: '175 cm', datum:'09/03/1999', nacionalnost:'Brazil', position:'Bek'},
];

const listKlubova=[
    {ime: 'Crvena Zvezda', imgPath: 'assets/images/timovi/kkcz.png', w:9,l:1,pozicija:1,},
    {ime: 'Cedevita', imgPath: 'assets/images/timovi/ced.png', w:7,l:3,pozicija:2,},
    {ime: 'Igokea', imgPath: 'assets/images/timovi/igk.png', w:7,l:2,pozicija:3,},
    {ime: 'Partizan', imgPath: 'assets/images/timovi/par.png', w:6,l:4,pozicija:4,},
    {ime: 'Budućnost', imgPath: 'assets/images/timovi/bud.png', w:6,l:4,pozicija:5,},
    {ime: 'Studentski Centar', imgPath: 'assets/images/timovi/stu.png', w:5,l:4,pozicija:6,},
    {ime: 'Mega Vizura', imgPath: 'assets/images/timovi/meg.png', w:5,l:4,pozicija:7,},
    {ime: 'Zadar', imgPath: 'assets/images/timovi/zad.png', w:4,l:5,pozicija:8,},
    {ime: 'Borac Čačak', imgPath: 'assets/images/timovi/bca.jpeg', w:4,l:5,pozicija:9,},
    {ime: 'FMP', imgPath: 'assets/images/timovi/fmp.png', w:3,l:7,pozicija:10,},
    {ime: 'Split', imgPath: 'assets/images/timovi/spl.png', w:2,l:8,pozicija:11,},
    {ime: 'Cibona', imgPath: 'assets/images/timovi/cib.png', w:1,l:9,pozicija:12,},
];

const listaVesti = [
    {title: 'VELIKO POLUVREME ZA VAŽNU POBEDU CRVENE ZVEZDE MERIDIANBET NAD EFESOM!', imgPath: 'assets/images/vesti/img2.jpeg'},
    {title: 'RUTINSKA POBEDA CRVENE ZVEZDE MERIDIANBET ZA PRVO MESTO NA TABELI REGIONALNE LIGE', imgPath: 'assets/images/vesti/img1.jpeg'},
    {title: 'CRVENO BELI SVE BROJNIJI, STIŽE ANADOLU EFES (PETAK, 20 ČASOVA)', imgPath: 'assets/images/vesti/img3.jpeg'},
    {title: 'Crvena Zvezda obeležila međunarodni dan borbe protiv nasilja nad ženama', imgPath: 'assets/images/vesti/img4.jpeg'},
    {title: 'CRVENO BELI RUTINSKI SAVLADALI CIBONU', imgPath: 'assets/images/vesti/img5.jpeg'},
];

const navList = [
    {text:'Početna', href:'index.html'},
    {text:'Tim', href:'#galerija'},
    {text:'Sezonske Karte', href:'#sezonskeKarte'},
    {text:'O Autoru', href:'assets/pages/autor.html'},
];

const footerNavigacija = [
    {text:'Početna', href:'index.html'},
    {text:'Tim', href:'#galerija'},
    {text:'Sezonske Karte', href:'#sezonskeKarte'},
    {text:'O Autoru', href:'assets/pages/autor.html'},
    {text:'Dokumentacija', href:'assets/doc/Dokumentacija.pdf'},
    {text:'Sitemap', href:'sitemap.xml'},
];

const socialMediaLinkovi = [
    { href: "https://www.facebook.com/kkcrvenazvezda/?locale=sr_RS", iconClass: "fa-brands fa-facebook" },
    { href: "https://twitter.com/kkcrvenazvezda?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", iconClass: "fa-brands fa-twitter" },
    { href: "https://kkcrvenazvezda.rs/", iconClass: "fa-brands fa-google" },
    { href: "https://www.instagram.com/crvenazvezdakk/", iconClass: "fa-brands fa-instagram" },
    { href: "https://rs.linkedin.com/company/kk-crvena-zvezda-mts", iconClass: "fa-brands fa-linkedin" }
];

$(document).ready(()=> {
    dinamickiIspisivanjeMenija();
    dinamickoIspisivanjeSlajdera();
    dinamickoIspisivanjeSekcijeTim();
    sortiranjeTabele('poz');

    // Slajder se automatski rotira na 3 sekunde
    setInterval(()=>{sledeciSlajd(1)}, 3000);
    dinamickoIspisivanjeSocialLinkova();
    dinamickoIspisivanjeFooterLinkova();

    $('.igracKontejner').click(function(){
        showModal($(this).attr('id'));
    });


    // Forma
    $("#ime").on('focus change keydown paste input', function(){
        hendlerFormName();
    });
    document.getElementById('ime').addEventListener('blur',hendlerFormNameBlur);

    $("#prezime").on('focus change keydown paste input', function(){
        hendlerFormSurname();
    });

    document.getElementById('prezime').addEventListener('blur',hendlerFormSurnameBlur);
    $("#email").on('focus change keydown paste input', function(){
        hendlerFormEmail();
    });
    document.getElementById('email').addEventListener('blur',hendlerFormEmailBlur);

    document.getElementById('sektor').addEventListener('change', hendlerFormSector);
    document.getElementById('uslovi').addEventListener('change', hendlerFormTerms);

    document.getElementById('dugme').addEventListener('click', rezervisiKartu);

    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
        targetElement.scrollIntoView({
        behavior: 'smooth'
        });
        }
    }
});


function showModal(id){
    var a = listIgraca[id];
    var text = `<div class="modal-header">
                    <h1 class="modal-title" id="playerModalLabel">${a.ime}</h1>
                    <span class="fa fa-times" data-bs-dismiss="modal" aria-hidden="true"></span>
                </div>
                <div  class="modal-body">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <img src="${a.imgPath}" alt="Slika ${a.ime}" class="img-fluid">
                        </div>
                        <div class="col-md-6 text-start text-center-v">
                            <br/>
                            <h4>Broj dresa: ${a.dres}</h4><br/>
                            <h4>Visina: ${a.visina}</h4><br/>
                            <h4>Datum rođenja: ${a.datum}</h4><br/>
                            <h4>Nacionalnost: ${a.nacionalnost}</h4><br/>
                            <h4>Pozicija: ${a.position}</h4><br/>
                        </div>
                    </div>
                </div>`;
    document.getElementById('sadrzajModal').innerHTML = text;
    $('#igracModal').modal('show');
}

function dinamickoIspisivanjeSekcijeTim(){
    let igraci = `<div class='container igraciKontejner'>`;
    for (var index in listIgraca) {
        var igrac = listIgraca[index];
        igraci += `<div id='${index}' class='igracKontejner' data-item='${igrac.ime}'>
                        <img src='${igrac.imgPath}' alt='Slika ${igrac.ime}'/>
                        <span class='ime col-8'>${igrac.ime} #${igrac.dres}</span>                            
                    </div>`;
    }
    
    

    igraci += `</div>`;
    $('#galerija').append(igraci);
}

function dinamickiIspisivanjeMenija(){
    var tekst='<ul id="navigacija" class="navbar-nav coll ms-auto">';
    for(var item of navList){
        console.log(navList);
        tekst+='<li class="nav-item"><a class="nav-link" href="'+item.href+'">'+item.text.toUpperCase()+'</a></li>';
    }
    tekst+='</ul>';
    document.getElementById('navigacija').innerHTML = tekst;
}


function dinamickoIspisivanjeSlajdera(){
    var slajderText = '';
    for(var vest of listaVesti){
        slajderText += `<div class="w3-display-container mySlides">
                            <img class="sliderSlika" src="${vest.imgPath}" style="width:100%;" alt="slajder">
                            <div class="vest w3-display-bottomleft w3-large w3-container w3-padding-40">
                                <h2>${vest.title.toUpperCase()}</h2>
                            </div>
                            <button id='back' class="w3-button w3-light-gray w3-display-left" onclick="sledeciSlajd(-1)">&#10094;</button>
                            <button id='forward' class="w3-button w3-light-gray w3-display-right" onclick="sledeciSlajd(1)">&#10095;</button>
                        </div>`;
    }
    $('#slajder').append(slajderText);
    slide(1);
}

function dinamickioIspisvanjeTabele(lista, sortString){
    var tableBody = '';
    for(var item of lista){
        tableBody+=`<tr>
                        <td>${item.pozicija.toString()}</td>
                        <td><img class='grb' src="${item.imgPath}" alt='${item.ime}'/>${item.ime}</td>
                        <td>${item.w.toString()}</td>
                        <td>${item.l.toString()}</td>
                    </tr>`;
    }
    document.getElementById('teloTabele').innerHTML=tableBody;
    switch(sortString){
        case 'poz':
            poz.classList.add(asc?'asc':'desc');
            poz.classList.remove(asc?'desc':'asc');
            l.classList.remove(...l.classList);
            tim.classList.remove(...tim.classList);
            w.classList.remove(...w.classList);
            break;
        case 'tim':
            tim.classList.add(asc? 'asc':'desc');
            tim.classList.remove(asc?'desc':'asc')
            poz.classList.remove(...poz.classList);
            l.classList.remove(...l.classList);
            w.classList.remove(...w.classList);
            break;
        case 'w':
            w.classList.add(asc? 'asc':'desc');
            w.classList.remove(asc?'desc':'asc')
            poz.classList.remove(...poz.classList);
            tim.classList.remove(...tim.classList);
            l.classList.remove(...l.classList);
            break;
        case 'l':
            l.classList.add(asc? 'asc':'desc');
            l.classList.remove(asc?'desc':'asc')
            poz.classList.remove(...poz.classList);
            tim.classList.remove(...tim.classList);
            w.classList.remove(...w.classList);
            break;
    };
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

function dinamickoIspisivanjeFooterLinkova(){
    var x = document.getElementById('footer-linkovi');

    for (let i = 0; i < footerNavigacija.length; i++) {
        var link = footerNavigacija[i];

        var div = document.createElement('div');
        div.className = 'col-md-6';

        let a = document.createElement('a');
        a.href = link.href;
        a.className = 'text-dark';
        a.textContent = link.text;
        let p = document.createElement('p');

        p.appendChild(a);
        div.appendChild(p);
        x.appendChild(div);
    }
}

// SORTIRANJE TABELE

var asc = false;

function sortiranjeTabele(sortString){
    asc = !asc;
    var sortiraniKlubovi = listKlubova;
    if(sortString == 'poz'){
        if(asc){
          sortiraniKlubovi.sort((a, b)=> a.pozicija - b.pozicija);  
        } else{
          sortiraniKlubovi.sort((a, b)=> b.pozicija - a.pozicija);   
        }
    }

    if(sortString == 'tim'){
        if(asc){
            sortiraniKlubovi.sort((a,b)=> a.ime.localeCompare(b.ime));
        }
        else{
            sortiraniKlubovi.sort((a,b)=> b.ime.localeCompare(a.ime));
        }
    }

    if(sortString == 'w'){
        if(asc){
          sortiraniKlubovi.sort((a, b)=> a.w - b.w);  
        } else{
          sortiraniKlubovi.sort((a, b)=> b.w - a.w);   
        }
    }

    if(sortString == 'l'){
        if(asc){
          sortiraniKlubovi.sort((a, b)=> a.l - b.l);  
        } else{
          sortiraniKlubovi.sort((a, b)=> b.l - a.l);   
        }
    }

    dinamickioIspisvanjeTabele(sortiraniKlubovi, sortString);
}

var pocetniSlajd = 1;

function sledeciSlajd(index) {
    slide(pocetniSlajd += index);
}

function slide(n) {
  var sladovi = document.getElementsByClassName("mySlides");
  if (n > sladovi.length) {
    pocetniSlajd = 1
  }
  if (n < 1) {
    pocetniSlajd = sladovi.length
  }
  for (var i = 0; i < sladovi.length; i++) {
    sladovi[i].style.display = "none";  
  }
  sladovi[pocetniSlajd-1].style.display = "block";  
}


// FORMA

var imePrezimeRegExp = /^[A-Z][a-z]{2,29}$/;
var emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function changeBorderColorById(id, error){
    document.getElementById(id).classList.remove(error? 'form-control-success':'form-control-error');
    document.getElementById(id).classList.add(error? 'form-control-error':'form-control-success');
}

function displayErrorMessageByIndex(index, hide, tekst){
    document.getElementsByClassName('forma')[index].getElementsByTagName('p')[0].innerHTML = tekst;
    document.getElementsByClassName('forma')[index].getElementsByTagName('p')[0].style.display = hide? 'none':'block';
}

function hendlerFormNameBlur(){
    var hide = true;
    var tekst = '';
    if(ime.value == ''){
        hide = false;
        tekst = 'Ime je obavezno.';
    } else if(!imePrezimeRegExp.test(ime.value)){
        hide = false;
        tekst = 'Ime mora pocinjati velikim slovom i imati barem tri karaktera.';
    } 
    displayErrorMessageByIndex(0,hide,tekst);
    
}

function hendlerFormName(){
    if(!imePrezimeRegExp.test(ime.value)){
        changeBorderColorById('ime',true);
    } else{
        changeBorderColorById('ime',false);
    }
    hendlerFormNameBlur();
}

function hendlerFormSurnameBlur(){
    var hide = true;
    var tekst = '';
    if(prezime.value == ''){
        hide = false;
        tekst = 'Prezime je obavezno.';
    } else if(!imePrezimeRegExp.test(prezime.value)){
        hide = false;
        tekst = 'Prezime mora pocinjati velikim slovom i imati barem tri karaktera.';
    } 
    displayErrorMessageByIndex(1,hide,tekst);
}

function hendlerFormSurname(){
    if(!imePrezimeRegExp.test(prezime.value)){
        changeBorderColorById('prezime',true);
    } else{
        changeBorderColorById('prezime',false);
    }
    hendlerFormSurnameBlur();
}

function hendlerFormEmailBlur(){
    var hide = true;
    var tekst = '';
    if(email.value == ''){
        hide = false;
        tekst = 'Email polje je obavezno.';
    } else if(!emailRegExp.test(email.value)){
        hide = false;
        tekst = 'Email nije u dobrom formatu.';
    } 
    displayErrorMessageByIndex(2,hide,tekst);
}

function hendlerFormEmail(){
    if(!emailRegExp.test(email.value)){
        changeBorderColorById('email',true);
    } else{
        changeBorderColorById('email',false);
    }
    hendlerFormEmailBlur();
}

function hendlerFormSector(){
    if($("#sektor").val() == "0"){
        displayErrorMessageByIndex(3,false,'Sektor polje je obavezno.');
        changeBorderColorById('sektor',true);
    } else{
        changeBorderColorById('sektor',false);
        displayErrorMessageByIndex(3,true,'');
    }
}

function hendlerFormTerms(){
    if(!uslovi.checked){
        displayErrorMessageByIndex(4,false,'Prihvatanje uslova koriscenja je obavezno.');
        changeBorderColorById('uslovi',true);
    } else{
        changeBorderColorById('uslovi',false);
        displayErrorMessageByIndex(4,true,'');
    }
}

function rezervisiKartu(){
    if(!imePrezimeRegExp.test(ime.value)){
        hendlerFormName();
    } 
    if(!imePrezimeRegExp.test(prezime.value)){
        hendlerFormSurname();
    }
    if(!emailRegExp.test(email.value)){
        hendlerFormEmail();
    }
    if($("#sektor").val() == "0"){
        hendlerFormSector();
    }
    if(!uslovi.checked){
        hendlerFormTerms();
    }
    if(imePrezimeRegExp.test(ime.value)
    && imePrezimeRegExp.test(prezime.value) 
    && emailRegExp.test(email.value) 
    && $("#sektor").val() != "0" 
    && uslovi.checked){
        formSuccess();
    }
}

function formSuccess(){
    document.getElementById('formSuccess').innerText = 
    "Uspešno ste rezervisali kartu na ime: " +ime.value+ " " +prezime.value+ "\nDodatne inforacije cete dobiti na mejl: "+email.value+"\nHvala na poverenju.";
    document.getElementById("forma").reset();

    setTimeout(()=>{
        document.getElementById('formSuccess').innerHTML = '';
    }, 6000);
}

