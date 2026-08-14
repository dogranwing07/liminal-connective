const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
const art=document.querySelector(".art"),bar=document.querySelector(".progress span");
window.addEventListener("scroll",()=>{const y=Math.min(scrollY,innerHeight);if(art)art.style.transform=`translateY(${y*.035}px)`;const h=document.documentElement.scrollHeight-innerHeight;if(bar)bar.style.height=`${h?scrollY/h*100:0}%`},{passive:true});
const translations={
ja:{
heroBehind:"Behind the Scenes.",
heroTag:"境界に立ち、<br>未来をつなぐ。",
intro1:"見えない場所で起きていることが、<br><em>次の未来を形づくる。</em>",
intro2:"すでに存在するものを、<br><em>まだ存在しない可能性へつなぐ。</em>",
p1:"私たちは、主役ではない。",
p2:"人をつなぎ、<br>境界を越え、<br>既存の枠を外す。",
p3:"壊し、つなぎ直し、<br>まだない価値を生み出す。",
p4:"目に映るものより、<br>未来に残るものを。",
p5:"主役になるより、<br>主役を生み出す。",
p6:"光を浴びるより、<br>光をつくる。",
p7:"私たちは、黒子であり、<br>影である。",
p8:"見えない場所から、<br>人と可能性をつなぎ、<br>未来の舞台をつくる。",
different:"異なる世界。<br>ひとつの接続。",
capabilities:"単独のサービスではない。<br>能力をつなぎ、価値に変える。",
eco1:"私たちは、孤立した事業をつくらない。",
eco2:"エコシステムをつくる。",
projectsIntro:"重要なのはプロジェクトではない。<br>何と何がつながったか。",
contactText:"つなぐ価値のあるものがあるなら、<br>話をしよう。",
contactButton:"START A CONNECTION ↗"
},
vi:{
heroBehind:"Behind the Scenes.",
heroTag:"Chúng tôi đứng tại những ranh giới,<br>và kết nối điều sẽ đến tiếp theo.",
intro1:"Những gì diễn ra phía sau hậu trường<br><em>định hình điều sẽ xảy ra tiếp theo.</em>",
intro2:"Chúng tôi kết nối những gì đang tồn tại<br><em>với những khả năng chưa thành hình.</em>",
p1:"Chúng tôi không ở đây để trở thành nhân vật chính.",
p2:"Chúng tôi kết nối con người,<br>vượt qua ranh giới,<br>và tháo bỏ những khuôn khổ sẵn có.",
p3:"Chúng tôi phá vỡ, kết nối lại,<br>và tạo ra những giá trị chưa từng tồn tại.",
p4:"Không chỉ những gì được nhìn thấy,<br>mà là những gì sẽ còn lại trong tương lai.",
p5:"Thay vì trở thành nhân vật chính,<br>chúng tôi tạo nên sân khấu để người khác vươn lên.",
p6:"Thay vì đứng dưới ánh sáng,<br>chúng tôi tạo ra ánh sáng.",
p7:"Chúng tôi là những gì không được nhìn thấy.<br>Chúng tôi là cái bóng.",
p8:"Từ phía sau hậu trường,<br>chúng tôi kết nối con người với khả năng<br>và xây dựng sân khấu cho điều tiếp theo.",
different:"Những thế giới khác nhau.<br>Một kết nối.",
capabilities:"Không phải những dịch vụ tách rời.<br>Mà là những năng lực được kết nối.",
eco1:"Chúng tôi không xây dựng những doanh nghiệp biệt lập.",
eco2:"Chúng tôi xây dựng hệ sinh thái.",
projectsIntro:"Điều quan trọng không phải là dự án.<br>Mà là những gì đã được kết nối.",
contactText:"Nếu có điều gì đó đáng để kết nối,<br>chúng ta nên trò chuyện.",
contactButton:"START A CONNECTION ↗"
}}
const english={};document.querySelectorAll("[data-i18n]").forEach(el=>english[el.dataset.i18n]=el.innerHTML);
document.querySelectorAll(".langs button").forEach(btn=>btn.addEventListener("click",()=>{
 const lang=btn.dataset.lang;document.documentElement.lang=lang;
 document.querySelectorAll(".langs button").forEach(b=>b.classList.toggle("active",b===btn));
 document.querySelectorAll("[data-i18n]").forEach(el=>{el.innerHTML=lang==="en"?english[el.dataset.i18n]:(translations[lang][el.dataset.i18n]||english[el.dataset.i18n])});
 localStorage.setItem("liminal-lang",lang);
}));
const saved=localStorage.getItem("liminal-lang");if(saved&&saved!=="en"){document.querySelector(`.langs button[data-lang="${saved}"]`)?.click();}
