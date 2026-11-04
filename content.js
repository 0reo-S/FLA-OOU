/* Firebase connection (already filled in for your project) */
window.FLA_FIREBASE={
apiKey:"AIzaSyADoUk0ONylhGLfPa5IhfvTPq5qY8vAJLg",
authDomain:"flaoou-ac560.firebaseapp.com",
projectId:"flaoou-ac560",
storageBucket:"flaoou-ac560.firebasestorage.app",
messagingSenderId:"910418016433",
appId:"1:910418016433:web:d6679632a0fa47dad38a90"
};

/* Starting content. Once you save from Admin, the live data in Firebase replaces these. */
const GROUPS={
"Undergraduate executives":{note:"2026/2027 session. Oreos-led admin.",people:[
{n:"Falemu Oreoluwa",nick:"Oreos",role:"Chairman",fac:"BMS",img:"images/ug-06.jpg"},
{n:"Onanuga Victor",nick:"Nivani",role:"General Secretary",fac:"CEES",img:"images/ug-07.jpg"},
{n:"Abdulazeez Zainab",nick:"Zanny",role:"Financial Secretary",fac:"FASA",img:"images/ug-01.jpg"},
{n:"Kareem Awwal",nick:"Kickson",role:"D.O.P.",fac:"FASA",img:"images/ug-05.jpg"},
{n:"Ayanbadejo Samuel",nick:"Shine",role:"Welfare Director",fac:"ESAN",img:"images/ug-10.jpg"},
{n:"Kuyoro Testimony",nick:"Blaqlaw",role:"Legal Adviser",fac:"LAW",img:"images/ug-04.jpg"},
{n:"Babalola Oluwabusayo",nick:"Topboy",role:"SPEDU.",fac:"CAS",img:"images/ug-03.jpg"},
{n:"Orekoya Sesan",nick:"Chief Eto",role:"Media 1",fac:"FAMS",img:"images/ug-02.jpg"},
{n:"Oladeinde Mojolaoluwa",nick:"MOJ Sports",role:"Media 2",fac:"SOSSA",img:"images/ug-08.jpg"},
{n:"Joseph Oluwasayo Daniel",nick:"",role:"Medical 1",fac:"BMS",img:"images/ug-09.jpg"},
{n:"Oluwaseun Babarafunmi",nick:"Abidemi",role:"Medical 2",fac:"NASS",img:"images/ug-11.jpg"}]},
"Alumni executives":{note:"Holag-led admin.",people:[
{n:"Olaitan Owolabi",nick:"Holag",role:"Chairman",fac:"",img:"images/al-06.jpg"},
{n:"Gbadamosi Yusuf",nick:"Yusluv",role:"General Secretary",fac:"",img:"images/al-07.jpg"},
{n:"Adeyemi Zainab",nick:"Queen Zee",role:"Assistant General Secretary",fac:"",img:"images/al-03.jpg"},
{n:"Olayemi Adekoya",nick:"Eri-Ifeoluwa",role:"Financial Secretary",fac:"",img:"images/al-01.jpg"},
{n:"Adenuga Ayokunle",nick:"Ay Eco",role:"D.O.P.",fac:"",img:"images/al-05.jpg"},
{n:"Adeleke Taofeek",nick:"Taoibadan",role:"PRO",fac:"",img:"images/al-08.jpg"},
{n:"Dokeh Rebecca",nick:"Umbreella",role:"Treasurer",fac:"",img:"images/al-09.jpg"},
{n:"Afeez Ibrahim",nick:"Fizzy",role:"Welfare Director",fac:"",img:"images/al-02.jpg"},
{n:"Oyesola Oluwarantimi",nick:"Ranti",role:"Assistant Welfare Director",fac:"",img:"images/al-11.jpg"},
{n:"Ayileka Adesuyi",nick:"Silverboy",role:"Media Director",fac:"",img:"images/al-04.jpg"},
{n:"Adewumi Azeeb",nick:"Nahbaz",role:"Creative Director",fac:"",img:"images/al-10.jpg"}]},
"Past chairmen and patron":{note:"",people:[
{n:"Name to be added",nick:"",role:"Patron",fac:"",img:""},
{n:"Name to be added",nick:"",role:"Past Chairman",fac:"",img:""},
{n:"Name to be added",nick:"",role:"Past Chairman",fac:"",img:""}]}
};

window.FLA_CONTENT={
breaking:"FLA @10 years coming soon",
about:"The Football Lovers Association, OOU Chapter, brings together students who live and breathe football. We organise competitions, watch parties and events for the whole campus.",
mission:"To unite OOU students through football, grow talent and fan culture on campus, and run fair, well-organised competitions every year.",
history:"",
ach:"",
goalText:"GOAL! A fan just scored on the FLA pitch. Goals this visit: {n}",
faculties:"FASA, FAMS, CAS, LAW, BMS, CEES, SOSSA, ESAN, NASS",
table:"",
fame:`Player of the Season | Name to be added
Golden Boot | Name to be added
Best Team | Name to be added`,
news:"Welcome to the new FLA website | The chapter now has a home online. Check back for fixtures, results and announcements.",
trivia:`Which country won the 2022 FIFA World Cup? | Argentina | France | Brazil | 1
Which club has won the most Champions League titles? | AC Milan | Real Madrid | Liverpool | 2
In which year did Nigeria win its first AFCON? | 1980 | 1994 | 2013 | 1
Who has won the most Ballon d'Or awards? | Cristiano Ronaldo | Lionel Messi | Michel Platini | 2
Which country hosted the 2010 World Cup? | Brazil | Germany | South Africa | 3
Who won the first World Cup in 1930? | Uruguay | Argentina | Italy | 1
Which country has won the most World Cups? | Germany | Brazil | Italy | 2
Nigeria won Olympic football gold in 1996 in which city? | Atlanta | Sydney | Barcelona | 1
Who is the World Cup's all-time top scorer? | Pele | Ronaldo Nazario | Miroslav Klose | 3
Which club is nicknamed the Gunners? | Arsenal | Chelsea | Tottenham | 1
Which country won Euro 2024? | England | Spain | France | 2
Which country hosted the 2022 World Cup? | Qatar | Russia | Japan | 1
Who scored the 'Hand of God' goal? | Pele | Zidane | Maradona | 3
Who is the Premier League's all-time top scorer? | Wayne Rooney | Alan Shearer | Harry Kane | 2
Which country won AFCON 2023, played in early 2024? | Nigeria | Ivory Coast | Senegal | 2`,
contact:"07062213814",
sponsorPitch:"Put your brand in front of the biggest football crowd on campus. FLA match days bring fans, faculties and satellite campuses together in one place.",
perks:`1,000+ fans in attendance on every match day
Participation from different faculties and our satellite campuses
Brand visibility at matches, on this website and across our social pages
Direct access to an energetic student audience
Brands from every campus are welcome, no one is left out`,
sponsors:"",
constitutionText:"",
constitutionUrl:"",
x:"https://x.com/ooufla01?s=21",
youtube:"https://youtube.com/@ooufla?si=IV0kK_SHJT00xwx2",
instagram:"https://www.instagram.com/oou_fla1?dlrf=NTgwZGZqcjNtNmNw",
whatsapp:"https://chat.whatsapp.com/HU2HyWIUHDK2gvNTnx36s1?s=cl&p=i&mlu=4&ilr=4&iam=2",
whatsapp2:"https://chat.whatsapp.com/BseYVp0OdqN5WwZ6TDF91L?s=cl&p=i&mlu=4&ilr=4&iam=2",
groupsJson:JSON.stringify(GROUPS,null,1)
};
