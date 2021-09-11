/* Definitions */

const languageButton = document.querySelector('.language-button');
const subtitle = document.querySelector('.subtitle');
const motivation = document.querySelector('.motivation');
const sectionTitle = document.querySelector('.section-title');

/* Text Content Object */

const texts = {
    subtitleText: {
        tr:`Merhaba, Ben <b>Gizem.</b> 
        <br> Yaklaşık bir yıldır <b>front-end teknolojileri</b> ile uğraşıyorum.<br> 
        Fotoğrafçılığa, kitaplara ve filmlere ilgim var. 
        <br> Benim hakkımda daha fazla bilgi almak için lütfen bana ulaşın.`, 
        en: `Hi, my name is Gizem.<br> 
        I am interested in <b>front-end technologies</b> almost a year. 
        <br> Also I like photography, books and movies. 
        Please contact me for more information.`
    },
    sectionTitle: {
        tr: `Kullandığım Teknolojiler`,
        en: 'Technologies I Use'
    },
    motivationText:{
        tr: ` “Çalışmadan, yorulmadan ve üretmeden, rahat yaşamak isteyen toplumlar; evvela haysiyetlerini, sonra hürriyetlerini daha sonra da istiklal ve istikballerini kaybetmeye mahkumdurlar.”  <span class="motivation-subtitle">Mustafa Kemal ATATÜRK</span>`,
        en: ` “Societies who wants to live in comfort without working, getting tired and producing are bound to lose firstly their dignity then their freedom then their independence and future.” <span class="motivation-subtitle">Mustafa Kemal ATATÜRK</span>`
    }    
}; 

/* Change Language Functions */

let changeToEnglish = function(){    
    languageButton.innerHTML = 'TR';
    subtitle.innerHTML = texts.subtitleText.en;
    motivation.innerHTML = texts.motivationText.en;
    sectionTitle.innerHTML = texts.sectionTitle.en;
}

let changeToTurkish = function(){
    languageButton.innerHTML = 'EN';
    subtitle.innerHTML = texts.subtitleText.tr;
    motivation.innerHTML = texts.motivationText.tr;
    sectionTitle.innerHTML = texts.sectionTitle.tr;
}

/* Find Browser Language and change the language automatically */

const userLang = (navigator.language || navigator.userLanguage);

if(userLang == 'tr-TR'){
    changeToTurkish();
}
else if(userLang == 'en-EN'){
    changeToEnglish();
}

/* Language Button Event */

languageButton.addEventListener('click', function () {
    if(languageButton.textContent === 'TR'){
        changeToTurkish();
    }
    else{
        changeToEnglish();
    }
});

