const meniUrlIndex = 'https://djordjestojcicict.github.io/assets/data/nav.json';
const meniUrlPages = 'https://djordjestojcicict.github.io/assets/data/nav.json';
const proizvodiUrlIndex = 'https://djordjestojcicict.github.io/assets/data/products.json';
const proizvodiUrlPages = 'https://djordjestojcicict.github.io/assets/data/products.json';
const footerUrlIndex = 'https://djordjestojcicict.github.io/assets/data/footer.json';
const footerUrlPages = 'https://djordjestojcicict.github.io/assets/data/footer.json';
const instagramUrl = 'https://djordjestojcicict.github.io/assets/data/instagram.json';
const headerXmlUrl = 'https://djordjestojcicict.github.io/assets/data/header.xml';
const exploreXmlUrl = 'https://djordjestojcicict.github.io/assets/data/explore_products.xml';
const autorXmlUrl = 'https://djordjestojcicict.github.io/assets/data/autor.xml';

document.addEventListener('DOMContentLoaded', function () {
    popuniNizIsStoridza();
    let meniUrl = isIndex? meniUrlIndex : meniUrlPages;
    let footerUrl = isIndex? footerUrlIndex : footerUrlPages;
    dohvatanjePodatakaZaIspisivanje(meniUrl, ispisNavigacije);
    ispisiProizvode();
    if(isIndex){
        dohvatanjePodatakaZaIspisivanje(headerXmlUrl, ispisivanjeHeadera, 'xml');
        dohvatanjePodatakaZaIspisivanje(exploreXmlUrl, ispisivanjeExploerProducta, 'xml');
        dohvatanjePodatakaZaIspisivanje(instagramUrl, instagramIspis);
    }
    if(isAbout){
        dohvatanjePodatakaZaIspisivanje(autorXmlUrl, ispisvanjeAutor, 'xml')
    }
    if(isProducts){
        $(document).on('click', '.hover-content', function() {
            let id = $(this).data('id');
            let add = !($(this).children().children().children().hasClass('crvenoSrce'));
            if(add){
                $(this).children().children().children().addClass('crvenoSrce');
            } else{
                $(this).children().children().children().removeClass('crvenoSrce');
            }
            likeProduct(id,add);
          });
    }
    
    dohvatanjePodatakaZaIspisivanje(footerUrl, ispisivanjeFootera);
});

let href = location.href;
let isIndex = href.includes('index.html');
let isAbout = href.includes('about.html');
let isProducts = href.includes('products.html');
let lajkovaniProizvodi = [1,2,3];
let products = [];
let sortProducts = [];

function dohvatanjePodatakaZaIspisivanje(url, funkcija, dataType){
    $.ajax({
        url: url,
        method:'get',
        dataType: dataType == null? 'json':dataType,
        success:function(result){
            funkcija(result);
        },
        error:function(err){
            console.log(err);
        },
    });
}

function ispisNavigacije(niz){
    let ispis = '';
    for(let item of niz){
        if(item.hasSubmenu){
            let ispis2 = `<li class="submenu">
                            <a href="">${item.text}</a>
                            <ul>`;
            for(let sub of item.submenu){
                ispis2+=`<li><a href="${isIndex? sub.href_index : sub.href_pages}">${sub.text}</a></li>`;
            }
            ispis2+='</ul></li>';
            ispis+=ispis2;
        } else{
            ispis+=`<li class="scroll-to-section"><a href="${isIndex? item.href_index:item.href_pages}">${item.text}</a></li>`;
        }
    }
    $(".nav").html(ispis);
}

function ispisProizvodaPocetna(niz){
    let men = '';
    let women = '';
    let kids = '';
    let menBr = 0;
    let womenBr = 0;
    let kidsBr = 0;
    for(let item of niz){
        switch(item.type){
            case 'men':
            menBr++;
            men+= divProizvodiPocetna(item);
            break;
            case 'women':
            womenBr++;
            women+=divProizvodiPocetna(item);
            break;
            case 'kids':
            kidsBr++;
            kids+=divProizvodiPocetna(item);
            break;
        }
        ispis = ``;
    }
    $("#men-carousel").html(men); 
    $("#women-carousel").html(women); 
    $("#kids-carousel").html(kids); 
    aktivirajOwl(menBr, womenBr, kidsBr);
}

function divProizvodiPocetna(item , isProducts){
    let lajkovan = lajkovaniProizvodi.includes(item.id);
    let proizvod = `<div class="item">
                    <div class="thumb">
                        ${isProducts? `<div class="hover-content" data-id="${item.id}">
                            <ul>
                                <li><i class="fa fa-heart ${lajkovan? 'crvenoSrce':''}"></i></li>
                            </ul>
                        </div>`:''}
                        <img src="${isProducts? '..':'assets'}/images/${item.img.src}" alt="${item.img.alt}" style="width:370px;height:390px;">
                    </div>
                    <div class="down-content">
                        <h4>${item.title}</h4>
                        <span>$${item.price}</span>
                        <ul class="stars">`;
    for(i=1;i<=5;i++){
        if(item.stars < i){
            proizvod+='<li><i class="fa fa-star"></i></li>';
        } else{
            proizvod+='<li><i class="fa fa-star gold"></i></li>'
        }
    }
    proizvod+=`</ul></div></div>`;
    return proizvod;
}

function ispisivanjeFootera(niz){
    let ispis = '';
    for(let item of niz){
        ispis += `<div class="col-lg-4">
                    <h4>${item.title}</h4>
                    <ul>`;
        for(let item1 of item.links){
            ispis+= `<li><a href="${isIndex? item1.href_index : item1.href_pages}">${item1.text}</a></li>`;
        }
        ispis+='</ul></div>'; 
    }
    ispis += `<div class="col-lg-12">
                <div class="under-footer">
                    <p>Copyright © 2024 Đorđe Stojčić. 
                    <ul>
                        <li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>`;
    $('#footer').html(ispis);
}

function instagramIspis(niz){
    let ispis = '';
    for(let item of niz){
        ispis += `<div class="col-2">
                    <div class="thumb">
                        <div class="icon">
                            <a href="http://instagram.com">
                                <h6>${item.text}</h6>
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src="${item.src}" alt="${item.alt}">
                    </div>
                </div>`;
    }
    $('#instagram').html(ispis);
}

function ispisivanjeHeadera(xml){
    let ispis = `<div class="col-lg-6">
                    <div class="left-content">
                        <div class="thumb">
                            <div class="inner-content">
                                <h4>${$(xml).find('levakolona').find('title').text()}</h4>
                                <p style="color: white !important;">${$(xml).find('levakolona').find('p1').text()}</p>
                                <p style="color:white !important;">${$(xml).find('levakolona').find('p2').text()}</p>
                                <br>
                            </div>
                            <img src="${$(xml).find('levakolona').find('image').find('src').text()}" alt="${$(xml).find('levakolona').find('image').find('src').text()}">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">`;
    
    $(xml).find('desnakolona').find('sub_column').each(function(){
        ispis+=`<div class="col-lg-6">
                    <div class="right-first-image">
                        <div class="thumb">
                            <div class="inner-content">
                                <h4>${$(this).find('title').text()}</h4>
                                <span>${$(this).find('text').text()}</span>
                            </div>
                            <div class="hover-content">
                                <div class="inner">
                                    <h4>${$(this).find('title').text()}</h4>
                                    <div class="main-border-button">
                                        <a href="${$(this).find('href').text()}">Discover More</a>
                                    </div>
                                </div>
                            </div>
                            <img src="${$(this).find('image').find('src').text()}" alt="${$(this).find('image').find('alt').text()}">
                        </div>
                    </div>
                </div>`;
    });
    ispis+='</div></div></div>';
    $("#header").html(ispis);
}

function ispisivanjeExploerProducta(xml){
    let ispis = `<div class="col-lg-6">
                    <div class="left-content">
                        <h2>${$(xml).find('levakolona').find('title').text()}</h2>
                        <span>${$(xml).find('levakolona').find('p1').text()}</span>
                        <div class="quote">
                            <i class="fa fa-quote-left"></i><p>${$(xml).find('levakolona').find('quote').text()}</p>
                        </div>
                        <p>${$(xml).find('levakolona').find('p2').text()}</p>
                        <p>${$(xml).find('levakolona').find('p3').text()}</p>
                        <div class="main-border-button">
                            <a href="${$(xml).find('levakolona').find('href').text()}">Discover More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="right-content">
                        <div class="row">`;
    $(xml).find('desnakolona').find('sub_column').each(function(){
        if($(this).find('hasImage').text() == "true"){
            ispis+=`<div class="col-lg-6">
                        <div class="${$(this).find('class').text()}">
                            <img src="${$(this).find('image').find('src').text()}" alt="${$(this).find('image').find('alt').text()}">
                        </div>
                    </div>`;
        } else{
            ispis+=`<div class="col-lg-6">
                        <div class="${$(this).find('class').text()}">
                            <h4>${$(this).find('title').text()}</h4>
                            <span>${$(this).find('text').text()}</span>
                        </div>
                    </div>`;
        }
    });
    ispis+='</div></div></div>';
    $("#explore_row").html(ispis);
}

function ispisvanjeAutor(xml){
    let ispis = `<div class="page-heading about-page-heading" id="top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="inner-content">
                                    <h2>${$(xml).find('title').text()}</h2>
                                    <span>${$(xml).find('subtitle').text()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-us">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="left-image">
                                    <img src="${$(xml).find('image').find('src').text()}" alt="${$(xml).find('image').find('alt').text()}">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="right-content">
                                    <h4>${$(xml).find('h1').text()}</h4>
                                    <span>${$(xml).find('p1').text()}</span>
                                    <p>${$(xml).find('p2').text()}</p>
                                    <ul>
                                        <li><a href="https://facebook.com"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://linkedin.com"><i class="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        $("#autor").html(ispis);
}

function ispisProizvodaProducts(data, asd = false){
    if(!asd){
        products = data;
    }

    let ispis ='';
    for(let item of data){
        ispis+='<div class="col-lg-4">';
        ispis+=divProizvodiPocetna(item, isProducts);
        ispis+='</div>';
    }
    $('#proizvodi1').html(ispis);
}

function ispisiProizvode(){
    popuniNizIsStoridza();
    if(isIndex){
        dohvatanjePodatakaZaIspisivanje(proizvodiUrlIndex, ispisProizvodaPocetna);
    }
    if(isProducts){
        dohvatanjePodatakaZaIspisivanje(proizvodiUrlPages, ispisProizvodaProducts);
    }
}

function likeProduct(id, add){
    if(add){
        let isPresent = lajkovaniProizvodi.includes(id);
        if(!isPresent){
            lajkovaniProizvodi.push(id);
        }
    } else{
        lajkovaniProizvodi = lajkovaniProizvodi.filter(function(value){
            return value !== id;
        })
    }

    let arrayAsString = JSON.stringify(lajkovaniProizvodi);
    localStorage.setItem('lajkovaniProizvodi', arrayAsString);
}

function popuniNizIsStoridza(){
    let storedArrayAsString = localStorage.getItem('lajkovaniProizvodi');
    let retrievedArray = JSON.parse(storedArrayAsString);
    lajkovaniProizvodi = retrievedArray;
    if(lajkovaniProizvodi == null){
        lajkovaniProizvodi = [];
    }
}

// Nije moj kod, iskopirano kako bi radio carousel
function aktivirajOwl(men, women , kids) {
	"use strict";
	$('.owl-men-item').owlCarousel({
		items:men,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	})

	$('.owl-women-item').owlCarousel({
		items:women,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	 })

	$('.owl-kid-item').owlCarousel({
		items:kids,
		loop:true,
		dots: true,
		nav: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		 }
	 })
};