const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
const art=document.querySelector(".art"),bar=document.querySelector(".progress span");
window.addEventListener("scroll",()=>{const y=Math.min(scrollY,innerHeight);if(art)art.style.transform=`translateY(${y*.035}px)`;const h=document.documentElement.scrollHeight-innerHeight;if(bar)bar.style.height=`${h?scrollY/h*100:0}%`},{passive:true});
const translations={
ja:{
navAbout:"ABOUT",navConnect:"CONNECT",navBusiness:"BUSINESS",navProjects:"PROJECTS",navContact:"CONTACT",
heroBehind:"Behind the Scenes.",heroTag:"境界に立ち、<br>未来をつなぐ。",
intro1:"見えない場所で起きていることが、<br><em>次の未来を形づくる。</em>",intro2:"すでに存在するものを、<br><em>まだ存在しない可能性へつなぐ。</em>",
p1:"私たちは、主役ではない。",p2:"人をつなぎ、<br>境界を越え、<br>既存の枠を外す。",p3:"壊し、つなぎ直し、<br>まだない価値を生み出す。",p4:"目に映るものより、<br>未来に残るものを。",p5:"主役になるより、<br>主役を生み出す。",p6:"光を浴びるより、<br>光をつくる。",p7:"私たちは、黒子であり、<br>影である。",p8:"見えない場所から、<br>人と可能性をつなぎ、<br>未来の舞台をつくる。",
different:"異なる世界。<br>ひとつの接続。",weConnect:"WE CONNECT",
between:"BETWEEN<br>WORLDS.",betweenMicro:"産業。文化。市場。人。",
position1:"LIMINAL CONNECTIVEは、産業・文化・市場・人、その境界に存在する。",
position2:"すでに存在する可能性を見つけ、まだつながっていないものを接続し、それらを前へ動かすための構造をつくる。",
position3:"私たちは、ただ紹介するのではない。",position4:"接続そのものを<br>設計する。",
businessTitle:"BUSINESS",capabilities:"単独のサービスではない。<br>能力をつなぎ、価値に変える。",
biz1:"サロン経営 / ヘアデザイン / 美容教育 / クリエイティブディレクション / プロフェッショナル育成",
biz2:"市場調査 / 事業開発 / 現地パートナーシップ / ローカライズ / 市場参入戦略",
biz3:"美容商材 / プロフェッショナル商材 / 流通 / 物流 / 販売開発",
biz4:"プロフェッショナルトレーニング / 技術教育 / サロン教育 / 日本研修プログラム / 人材育成",
biz5:"ビジネスマッチング / 戦略的パートナーシップ / クリエイター / モデル / KOL / プロフェッショナル / 企業",
eco1:"私たちは、孤立した事業をつくらない。",eco2:"エコシステムをつくる。",
connectionsTitle:"CONNECTIONS",projectsIntro:"重要なのはプロジェクトではない。<br>何と何がつながったか。",
proj1:"日本のヘアデザインと教育を、ホーチミンのベトナム市場に合わせてローカライズ。",
proj2:"ベトナム各地で展開してきた技術教育とプロフェッショナルトレーニング。",
proj3:"日本の美容ブランドを、ベトナムのサロン・教育・流通へ接続する市場開発。",
proj4:"ベトナムの美容プロフェッショナルを、日本の教育と国境を越えたキャリアへ接続する。",
numVietnam:"VIETNAM",numClients:"ベトナム人顧客",numPros:"美容プロフェッショナル",numCountries:"2か国 / 1つのネットワーク",
humanLabel:"接続の裏側にいる人",founderRole:"FOUNDER / CREATIVE CONNECTOR",founderSince:"2018 —",founderFields:"美容。ビジネス。教育。市場。人。",founderCopy:"2018年よりホーチミンを拠点に、日本とベトナムの境界を横断して活動。",founderCopy2:"サロン経営・ヘアデザインという現場から、美容教育、市場開拓、日越をつなぐビジネスへ。",founderCopy3:"ベトナムでの教育・講習活動では、これまで1,000名を超える美容従事者と接点を築いてきた。",founderCopy4:"LIMINAL CONNECTIVEは、新しく始めた何かではない。これまで人、業界、文化、可能性をつないできた活動を、一つの思想として構造化したもの。",founderClosing:"光の中に立つ人ではなく、<br>その接続をつくる人。",
m1:"WE ARE NOT<br><em>THE MAIN ACT.</em>",m2:"WE BUILD<br><em>THE STAGE.</em>",m3:"WE DO NOT<br><em>CHASE THE LIGHT.</em>",m4:"WE CREATE IT.",
contactTitle:"LET'S<br>CONNECT.",contactLead:"ブランド。<br>人。<br>市場。<br>アイデア。<br>可能性。",contactText:"つなぐ価値のあるものがあるなら、<br>話をしよう。",contactButton:"START A CONNECTION ↗",bookButton:"予約する ↗"
},
vi:{
navAbout:"ABOUT",navConnect:"CONNECT",navBusiness:"BUSINESS",navProjects:"PROJECTS",navContact:"CONTACT",
heroBehind:"Behind the Scenes.",heroTag:"Đứng tại những ranh giới,<br>chúng tôi kết nối điều sẽ đến tiếp theo.",
intro1:"Những gì diễn ra phía sau hậu trường<br><em>định hình điều sẽ xảy ra tiếp theo.</em>",intro2:"Chúng tôi kết nối những gì đang tồn tại<br><em>với những khả năng chưa thành hình.</em>",
p1:"Chúng tôi không ở đây để trở thành nhân vật chính.",p2:"Chúng tôi kết nối con người,<br>vượt qua ranh giới,<br>và tháo bỏ những khuôn khổ sẵn có.",p3:"Chúng tôi phá vỡ, kết nối lại,<br>và tạo ra những giá trị chưa từng tồn tại.",p4:"Không chỉ những gì được nhìn thấy,<br>mà là những gì sẽ còn lại trong tương lai.",p5:"Thay vì trở thành nhân vật chính,<br>chúng tôi tạo nên sân khấu để người khác vươn lên.",p6:"Thay vì đứng dưới ánh sáng,<br>chúng tôi tạo ra ánh sáng.",p7:"Chúng tôi là phần không được nhìn thấy.<br>Chúng tôi là cái bóng.",p8:"Từ phía sau hậu trường,<br>chúng tôi kết nối con người với khả năng<br>và xây dựng sân khấu cho điều tiếp theo.",
different:"Những thế giới khác nhau.<br>Một kết nối.",weConnect:"WE CONNECT",
between:"BETWEEN<br>WORLDS.",betweenMicro:"Ngành nghề. Văn hóa. Thị trường. Con người.",
position1:"LIMINAL CONNECTIVE hoạt động tại giao điểm giữa ngành nghề, văn hóa, thị trường và con người.",
position2:"Chúng tôi nhận diện những khả năng vốn đã tồn tại, kết nối những gì chưa từng được kết nối và xây dựng cấu trúc để đưa chúng tiến về phía trước.",
position3:"CHÚNG TÔI KHÔNG CHỈ ĐƠN THUẦN GIỚI THIỆU.",position4:"Chúng tôi thiết kế<br>sự kết nối.",
businessTitle:"BUSINESS",capabilities:"Không phải những dịch vụ tách rời.<br>Mà là những năng lực được kết nối.",
biz1:"Vận hành salon / Thiết kế tóc / Đào tạo ngành làm đẹp / Creative Direction / Phát triển chuyên môn",
biz2:"Nghiên cứu thị trường / Phát triển kinh doanh / Đối tác địa phương / Bản địa hóa / Chiến lược thâm nhập thị trường",
biz3:"Sản phẩm làm đẹp / Sản phẩm chuyên nghiệp / Phân phối / Logistics / Phát triển bán hàng",
biz4:"Đào tạo chuyên nghiệp / Đào tạo kỹ thuật / Đào tạo salon / Chương trình đào tạo tại Nhật / Phát triển con người",
biz5:"Kết nối kinh doanh / Đối tác chiến lược / Creator / Model / KOL / Chuyên gia / Doanh nghiệp",
eco1:"Chúng tôi không xây dựng những doanh nghiệp biệt lập.",eco2:"Chúng tôi xây dựng hệ sinh thái.",
connectionsTitle:"CONNECTIONS",projectsIntro:"Điều quan trọng không phải là dự án.<br>Mà là những gì đã được kết nối.",
proj1:"Thiết kế tóc và giáo dục theo tiêu chuẩn Nhật Bản, được bản địa hóa cho thị trường Việt Nam tại TP.HCM.",
proj2:"Đào tạo kỹ thuật và phát triển chuyên môn được triển khai cho ngành tóc trên khắp Việt Nam.",
proj3:"Kết nối các thương hiệu làm đẹp Nhật Bản với salon, giáo dục và hệ thống phân phối tại Việt Nam.",
proj4:"Kết nối các chuyên gia làm đẹp Việt Nam với giáo dục Nhật Bản và cơ hội nghề nghiệp xuyên biên giới.",
numVietnam:"VIETNAM",numClients:"KHÁCH HÀNG VIỆT NAM",numPros:"CHUYÊN GIA NGÀNH LÀM ĐẸP",numCountries:"2 QUỐC GIA / MỘT MẠNG LƯỚI",
humanLabel:"NGƯỜI ĐỨNG SAU NHỮNG KẾT NỐI",founderRole:"FOUNDER / CREATIVE CONNECTOR",founderSince:"Từ năm 2018",founderFields:"Beauty. Business. Education. Market. People.",founderCopy:"Hoạt động tại TP.HCM từ năm 2018, kết nối những ranh giới giữa Nhật Bản và Việt Nam.",founderCopy2:"Từ vận hành salon và thiết kế tóc đến đào tạo chuyên môn, phát triển thị trường và kinh doanh xuyên biên giới.",founderCopy3:"Hơn 1.000 chuyên gia trong ngành tóc và làm đẹp tại Việt Nam đã tham gia các hoạt động đào tạo và phát triển chuyên môn.",founderCopy4:"LIMINAL CONNECTIVE không phải là một khởi đầu mới. Đó là cấu trúc được hình thành từ nhiều năm kết nối con người, ngành nghề, văn hóa và những khả năng mới.",founderClosing:"Không phải người đứng dưới ánh đèn.<br>Mà là người tạo nên những kết nối phía sau.",
m1:"WE ARE NOT<br><em>THE MAIN ACT.</em>",m2:"WE BUILD<br><em>THE STAGE.</em>",m3:"WE DO NOT<br><em>CHASE THE LIGHT.</em>",m4:"WE CREATE IT.",
contactTitle:"LET'S<br>CONNECT.",contactLead:"Một thương hiệu.<br>Một con người.<br>Một thị trường.<br>Một ý tưởng.<br>Một khả năng.",contactText:"Nếu có điều gì đó đáng để kết nối,<br>chúng ta nên trò chuyện.",contactButton:"START A CONNECTION ↗",bookButton:"ĐẶT LỊCH ↗"
}}
const english={};document.querySelectorAll("[data-i18n]").forEach(el=>english[el.dataset.i18n]=el.innerHTML);
function setLang(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll(".langs button").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 document.querySelectorAll("[data-i18n]").forEach(el=>{el.innerHTML=lang==="en"?english[el.dataset.i18n]:(translations[lang]?.[el.dataset.i18n]||english[el.dataset.i18n])});
 localStorage.setItem("liminal-lang",lang);
}
document.querySelectorAll(".langs button").forEach(btn=>btn.addEventListener("click",()=>setLang(btn.dataset.lang)));
setLang(localStorage.getItem("liminal-lang")||"en");

(function(){
 const contact=document.getElementById('contact');
 if(!contact)return;
 const copy={
  en:{lead:'A brand.<br>A person.<br>A market.<br>An idea.<br>A possibility.',text:'If there is something worth connecting,<br>we should talk.',name:'NAME',email:'EMAIL',company:'COMPANY / ORGANIZATION',subject:'SUBJECT',message:'MESSAGE',send:'START A CONNECTION ↗',direct:'DIRECT EMAIL',footerContact:'CONTACT'},
  ja:{lead:'ブランド。<br>人。<br>市場。<br>アイデア。<br>可能性。',text:'つなぐ価値のあるものがあるなら、<br>話をしよう。',name:'お名前',email:'メールアドレス',company:'会社名 / 組織名',subject:'件名',message:'お問い合わせ内容',send:'START A CONNECTION ↗',direct:'メールを直接送る',footerContact:'CONTACT'},
  vi:{lead:'Một thương hiệu.<br>Một con người.<br>Một thị trường.<br>Một ý tưởng.<br>Một khả năng.',text:'Nếu có điều gì đó đáng để kết nối,<br>chúng ta nên trò chuyện.',name:'HỌ TÊN',email:'EMAIL',company:'CÔNG TY / TỔ CHỨC',subject:'CHỦ ĐỀ',message:'NỘI DUNG',send:'START A CONNECTION ↗',direct:'GỬI EMAIL TRỰC TIẾP',footerContact:'CONTACT'}
 };
 const style=document.createElement('style');
 style.textContent=`
 .lc-contact-wrap{display:grid;grid-template-columns:.72fr 1.28fr;gap:10vw;align-items:start}.lc-contact-form{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;border-top:1px solid #242424}.lc-field{display:grid;gap:10px;padding:22px 0;border-bottom:1px solid #242424}.lc-field.full{grid-column:1/-1}.lc-field label{font:300 7px/1 Inter,sans-serif;letter-spacing:.18em;opacity:.5}.lc-field input,.lc-field textarea{width:100%;box-sizing:border-box;border:0;outline:0;background:transparent;color:#fff;font:300 13px/1.7 Inter,sans-serif;padding:0}.lc-field textarea{min-height:130px;resize:vertical}.lc-contact-submit{grid-column:1/-1;margin-top:28px;display:flex;justify-content:space-between;align-items:center;gap:20px}.lc-contact-submit button{appearance:none;border:1px solid #fff;background:#fff;color:#000;padding:18px 22px;min-width:260px;text-align:left;font:500 9px/1 Inter,sans-serif;letter-spacing:.14em;cursor:pointer}.lc-direct{font:300 9px/1.6 Inter,sans-serif;letter-spacing:.12em}.lc-direct small{display:block;opacity:.45;margin-bottom:8px}.lc-footer-contact a{font:400 11px/1.5 Inter,sans-serif;letter-spacing:.08em}.lc-footer-note{font:300 8px/1.7 Inter,sans-serif;letter-spacing:.12em;opacity:.5}@media(max-width:800px){.lc-contact-wrap{grid-template-columns:1fr}.lc-contact-form{grid-template-columns:1fr}.lc-field.full{grid-column:auto}.lc-contact-submit{grid-column:auto;display:grid}.lc-contact-submit button{width:100%;min-width:0}.lc-direct{margin-top:12px}}
 `;
 document.head.appendChild(style);
 function render(lang){
  const c=copy[lang]||copy.en;
  contact.innerHTML=`<small>09 / CONTACT</small><h2>LET'S<br>CONNECT.</h2><div class="lc-contact-wrap"><p>${c.lead}</p><div><p>${c.text}</p><form class="lc-contact-form" id="lcContactForm"><div class="lc-field"><label>${c.name}</label><input name="name" autocomplete="name" required></div><div class="lc-field"><label>${c.email}</label><input name="email" type="email" autocomplete="email" required></div><div class="lc-field"><label>${c.company}</label><input name="company" autocomplete="organization"></div><div class="lc-field"><label>${c.subject}</label><input name="subject" required></div><div class="lc-field full"><label>${c.message}</label><textarea name="message" required></textarea></div><div class="lc-contact-submit"><button type="submit">${c.send}</button><a class="lc-direct" href="mailto:dogranwing07@gmail.com"><small>${c.direct}</small>dogranwing07@gmail.com ↗</a></div></form></div></div><footer class="network-footer"><div class="footer-brand"><strong>LIMINAL CONNECTIVE</strong><span>Behind the Scenes.</span><span>HO CHI MINH CITY / VIETNAM / JAPAN</span></div><div class="footer-columns"><div><small>NAVIGATION</small><a href="#philosophy">ABOUT</a><a href="#connect">CONNECT</a><a href="#connections">PROJECTS</a><a href="journal.html">JOURNAL</a><a href="#contact">CONTACT</a></div><div><small>CONNECTED NETWORK</small><a href="jfirst.html">J-FIRST SAIGON →</a><a href="https://www.headsfactory.jp/" target="_blank" rel="noopener">HEADS FACTORY ↗</a><a href="https://www.jba-tokyo.co.jp/" target="_blank" rel="noopener">JBA ↗</a><a href="https://corp.and-us.jp/" target="_blank" rel="noopener">andUS ↗</a><a href="https://andus-global-vn.com/" target="_blank" rel="noopener">andUS GLOBAL VIETNAM ↗</a></div><div class="lc-footer-contact"><small>${c.footerContact}</small><a href="mailto:dogranwing07@gmail.com">dogranwing07@gmail.com ↗</a><p class="lc-footer-note">LIMINAL CONNECTIVE<br>HO CHI MINH CITY / VIETNAM × JAPAN</p></div></div><div class="footer-last">We stand at the boundaries,<br>and connect what comes next.</div></footer>`;
  const form=document.getElementById('lcContactForm');
  form.addEventListener('submit',function(e){e.preventDefault();const fd=new FormData(form);const subject='[LIMINAL CONNECTIVE] '+(fd.get('subject')||'Connection');const body=`Name: ${fd.get('name')||''}\nEmail: ${fd.get('email')||''}\nCompany / Organization: ${fd.get('company')||''}\n\n${fd.get('message')||''}`;window.location.href='mailto:dogranwing07@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)});
 }
 document.querySelectorAll('.langs button').forEach(btn=>btn.addEventListener('click',()=>render(btn.dataset.lang)));
 render(localStorage.getItem('liminal-lang')||'en');
})();