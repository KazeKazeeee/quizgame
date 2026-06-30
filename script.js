const topics={
  "Campus Life":[
    {w:"library",m:"thư viện",e:"I study in the library after class.",h:"Nơi sinh viên mượn sách và học nhóm."},
    {w:"dormitory",m:"ký túc xá",e:"My dormitory is near the campus.",h:"Nơi ở dành cho sinh viên."},
    {w:"assignment",m:"bài tập được giao",e:"I submit my assignment on Friday.",h:"Việc giảng viên giao để làm ở nhà hoặc trên lớp."},
    {w:"lecture",m:"bài giảng",e:"The lecture starts at eight.",h:"Nội dung được giảng viên trình bày."},
    {w:"semester",m:"học kỳ",e:"This semester has fifteen weeks.",h:"Một giai đoạn học trong năm học."},
    {w:"scholarship",m:"học bổng",e:"She received a scholarship.",h:"Khoản hỗ trợ học tập dựa trên thành tích hoặc hoàn cảnh."},
    {w:"laboratory",m:"phòng thí nghiệm",e:"We practice in the computer laboratory.",h:"Nơi thực hành và làm thí nghiệm."},
    {w:"deadline",m:"hạn chót",e:"The deadline is next Monday.",h:"Thời điểm cuối cùng phải hoàn thành công việc."},
    {w:"classroom",m:"phòng học",e:"Our classroom is on the second floor.",h:"Nơi sinh viên học cùng giảng viên."},
    {w:"professor",m:"giảng viên",e:"The professor explains the lesson clearly.",h:"Người dạy học ở trường đại học."},
    {w:"classmate",m:"bạn cùng lớp",e:"My classmate helps me with this exercise.",h:"Người học chung một lớp với bạn."},
    {w:"textbook",m:"sách giáo khoa",e:"I bring my English textbook to class.",h:"Sách chính được dùng trong một môn học."},
    {w:"cafeteria",m:"căn tin",e:"We have lunch in the cafeteria.",h:"Nơi bán thức ăn và đồ uống trong trường."},
    {w:"attendance",m:"sự có mặt; điểm danh",e:"Good attendance is important in this course.",h:"Việc có mặt đầy đủ trong các buổi học."},
    {w:"exam",m:"kỳ thi",e:"The final exam is in July.",h:"Bài kiểm tra quan trọng vào cuối môn học."},
    {w:"grade",m:"điểm số",e:"She got a good grade in English.",h:"Kết quả được ghi bằng số hoặc chữ sau bài kiểm tra."},
    {w:"project",m:"dự án",e:"Our group is working on a small project.",h:"Công việc lớn được thực hiện trong một khoảng thời gian."},
    {w:"presentation",m:"bài thuyết trình",e:"I prepare slides for my presentation.",h:"Phần trình bày một nội dung trước lớp."},
    {w:"campus",m:"khuôn viên trường",e:"The campus is quiet in the evening.",h:"Khu vực gồm các tòa nhà và sân của trường."},
    {w:"club",m:"câu lạc bộ",e:"I joined the English club last month.",h:"Nhóm sinh viên cùng tham gia một hoạt động chung."}
  ],
  "Technology":[
    {w:"upload",m:"tải lên",e:"Please upload the file.",h:"Đưa tệp từ máy lên hệ thống."},
    {w:"download",m:"tải xuống",e:"I download the document.",h:"Lấy tệp từ mạng về máy."},
    {w:"database",m:"cơ sở dữ liệu",e:"The app stores words in a database.",h:"Nơi lưu dữ liệu có tổ chức."},
    {w:"network",m:"mạng máy tính",e:"The network is stable today.",h:"Hệ thống kết nối nhiều thiết bị."},
    {w:"password",m:"mật khẩu",e:"Use a strong password.",h:"Chuỗi bí mật để đăng nhập."},
    {w:"browser",m:"trình duyệt",e:"Open the page in a browser.",h:"Phần mềm dùng để mở trang web."},
    {w:"device",m:"thiết bị",e:"This device has a touch screen.",h:"Máy hoặc công cụ điện tử."},
    {w:"software",m:"phần mềm",e:"The software is easy to use.",h:"Chương trình chạy trên máy tính."},
    {w:"keyboard",m:"bàn phím",e:"I type the answer on the keyboard.",h:"Thiết bị có các phím dùng để nhập chữ và số."},
    {w:"screen",m:"màn hình",e:"The screen is bright and clear.",h:"Bộ phận hiển thị hình ảnh và nội dung."},
    {w:"application",m:"ứng dụng",e:"This application helps students learn words.",h:"Chương trình được tạo để thực hiện một công việc cụ thể."},
    {w:"file",m:"tệp tin",e:"Save the file before closing the program.",h:"Nơi lưu một nội dung trên máy tính."},
    {w:"folder",m:"thư mục",e:"The pictures are in this folder.",h:"Nơi chứa và sắp xếp nhiều tệp tin."},
    {w:"internet",m:"mạng Internet",e:"I use the Internet to find information.",h:"Mạng kết nối các máy tính trên toàn thế giới."},
    {w:"website",m:"trang web",e:"The course has its own website.",h:"Một trang thông tin được mở bằng trình duyệt."},
    {w:"account",m:"tài khoản",e:"You need an account to log in.",h:"Thông tin riêng dùng để sử dụng một dịch vụ."},
    {w:"login",m:"đăng nhập",e:"Click here to login to the system.",h:"Vào hệ thống bằng tài khoản và mật khẩu."},
    {w:"update",m:"cập nhật",e:"Please update the software today.",h:"Thay phiên bản cũ bằng thông tin hoặc phiên bản mới."},
    {w:"backup",m:"sao lưu",e:"I make a backup of my important files.",h:"Tạo thêm một bản dữ liệu để tránh bị mất."},
    {w:"code",m:"mã lập trình",e:"The student writes code for the quiz game.",h:"Các câu lệnh dùng để tạo ra chương trình."}
  ],
  "Daily Routine":[
    {w:"commute",m:"đi lại hằng ngày",e:"I commute to school by bus.",h:"Di chuyển thường xuyên giữa nhà và trường hoặc nơi làm việc."},
    {w:"prepare",m:"chuẩn bị",e:"I prepare my bag at night.",h:"Làm sẵn trước khi bắt đầu."},
    {w:"attend",m:"tham dự",e:"I attend class every morning.",h:"Có mặt tại một lớp học hoặc sự kiện."},
    {w:"review",m:"ôn lại",e:"I review new words before bed.",h:"Xem lại kiến thức đã học."},
    {w:"schedule",m:"lịch trình",e:"My schedule is busy today.",h:"Danh sách công việc theo thời gian."},
    {w:"habit",m:"thói quen",e:"Reading is a good habit.",h:"Việc thường xuyên lặp lại."},
    {w:"exercise",m:"tập thể dục",e:"I exercise for thirty minutes.",h:"Hoạt động giúp cơ thể khỏe hơn."},
    {w:"relax",m:"thư giãn",e:"I relax after finishing my homework.",h:"Nghỉ ngơi để giảm căng thẳng."},
    {w:"wake up",m:"thức dậy",e:"I wake up at six every morning.",h:"Ngừng ngủ và bắt đầu một ngày mới."},
    {w:"breakfast",m:"bữa sáng",e:"I eat breakfast before going to school.",h:"Bữa ăn đầu tiên trong ngày."},
    {w:"shower",m:"tắm",e:"I take a shower after exercising.",h:"Làm sạch cơ thể bằng nước."},
    {w:"brush",m:"chải; đánh",e:"I brush my teeth twice a day.",h:"Dùng bàn chải để làm sạch răng hoặc tóc."},
    {w:"study",m:"học tập",e:"I study English for one hour.",h:"Dành thời gian để học kiến thức mới."},
    {w:"cook",m:"nấu ăn",e:"My mother cooks dinner at home.",h:"Chuẩn bị thức ăn bằng cách làm chín."},
    {w:"clean",m:"dọn dẹp; làm sạch",e:"I clean my room every Sunday.",h:"Làm cho một nơi không còn bụi bẩn hoặc lộn xộn."},
    {w:"sleep",m:"ngủ",e:"I sleep for about seven hours.",h:"Nghỉ ngơi vào ban đêm."},
    {w:"organize",m:"sắp xếp",e:"I organize my books on the desk.",h:"Đặt mọi thứ theo thứ tự gọn gàng."},
    {w:"complete",m:"hoàn thành",e:"I complete my homework before dinner.",h:"Làm xong một công việc."},
    {w:"practice",m:"luyện tập",e:"I practice speaking English every day.",h:"Làm đi làm lại để tiến bộ hơn."},
    {w:"check",m:"kiểm tra",e:"I check my email in the morning.",h:"Xem lại để biết thông tin có đúng hoặc có thay đổi không."}
  ],
  "Food":[
    {w:"ingredient",m:"nguyên liệu",e:"Rice is the main ingredient.",h:"Thành phần dùng để nấu món ăn."},
    {w:"delicious",m:"ngon",e:"The soup is delicious.",h:"Có vị làm người ăn thích."},
    {w:"healthy",m:"tốt cho sức khỏe",e:"Vegetables are healthy.",h:"Có lợi cho cơ thể."},
    {w:"beverage",m:"đồ uống",e:"Tea is a popular beverage.",h:"Thứ dùng để uống."},
    {w:"recipe",m:"công thức nấu ăn",e:"This recipe is simple.",h:"Hướng dẫn các bước nấu món ăn."},
    {w:"portion",m:"khẩu phần",e:"This portion is enough for one person.",h:"Lượng thức ăn dành cho một người."},
    {w:"boil",m:"luộc; đun sôi",e:"Boil the water first.",h:"Làm nóng chất lỏng đến khi sôi."},
    {w:"fresh",m:"tươi",e:"The fruit is fresh.",h:"Mới và chưa bị hỏng."},
    {w:"meal",m:"bữa ăn",e:"Dinner is my main meal of the day.",h:"Phần thức ăn được dùng vào một thời điểm trong ngày."},
    {w:"breakfast",m:"bữa sáng",e:"Breakfast gives me energy for class.",h:"Bữa ăn đầu tiên trong ngày."},
    {w:"lunch",m:"bữa trưa",e:"We have lunch at twelve.",h:"Bữa ăn vào giữa ngày."},
    {w:"dinner",m:"bữa tối",e:"My family eats dinner together.",h:"Bữa ăn vào buổi tối."},
    {w:"spicy",m:"cay",e:"This noodle soup is very spicy.",h:"Có vị cay do ớt hoặc gia vị."},
    {w:"sweet",m:"ngọt",e:"The cake is too sweet for me.",h:"Có vị giống đường hoặc mật."},
    {w:"sour",m:"chua",e:"The lemon tastes sour.",h:"Có vị chua như chanh."},
    {w:"salty",m:"mặn",e:"The soup is a little salty.",h:"Có nhiều vị muối."},
    {w:"bake",m:"nướng bằng lò",e:"We bake the bread for twenty minutes.",h:"Làm chín thức ăn bằng nhiệt trong lò."},
    {w:"fry",m:"chiên; rán",e:"She fries the eggs for breakfast.",h:"Làm chín thức ăn trong dầu nóng."},
    {w:"chop",m:"cắt nhỏ",e:"Chop the vegetables before cooking.",h:"Dùng dao cắt thức ăn thành miếng nhỏ."},
    {w:"serve",m:"phục vụ; dọn món",e:"They serve rice with grilled chicken.",h:"Đưa thức ăn hoặc đồ uống cho người dùng."}
  ],
  "Travel":[
    {w:"destination",m:"điểm đến",e:"Da Lat is our destination.",h:"Nơi chuyến đi hướng tới."},
    {w:"luggage",m:"hành lý",e:"My luggage is light.",h:"Túi và đồ mang theo khi đi xa."},
    {w:"ticket",m:"vé",e:"I bought a bus ticket.",h:"Giấy hoặc mã cho phép sử dụng dịch vụ di chuyển."},
    {w:"journey",m:"chuyến đi",e:"The journey took three hours.",h:"Quá trình đi từ nơi này đến nơi khác."},
    {w:"accommodation",m:"chỗ ở",e:"We booked cheap accommodation.",h:"Nơi ở tạm trong chuyến đi."},
    {w:"departure",m:"sự khởi hành",e:"The departure time is 7 a.m.",h:"Thời điểm bắt đầu rời đi."},
    {w:"arrive",m:"đến nơi",e:"We arrive in the afternoon.",h:"Tới điểm cuối của chuyến đi."},
    {w:"explore",m:"khám phá",e:"We explore the old town.",h:"Đi tìm hiểu một nơi mới."},
    {w:"passport",m:"hộ chiếu",e:"Keep your passport in a safe place.",h:"Giấy tờ cần dùng khi đi sang nước khác."},
    {w:"airport",m:"sân bay",e:"We arrive at the airport two hours early.",h:"Nơi máy bay cất cánh và hạ cánh."},
    {w:"station",m:"nhà ga; trạm",e:"The train station is near the hotel.",h:"Nơi xe lửa hoặc xe buýt dừng đón khách."},
    {w:"hotel",m:"khách sạn",e:"Our hotel has a small swimming pool.",h:"Nơi khách thuê phòng để ở trong chuyến đi."},
    {w:"map",m:"bản đồ",e:"I use a map to find the museum.",h:"Hình thể hiện đường đi và vị trí các nơi."},
    {w:"tourist",m:"khách du lịch",e:"Many tourists visit this beach in summer.",h:"Người đi đến một nơi để tham quan hoặc nghỉ ngơi."},
    {w:"guide",m:"hướng dẫn viên; hướng dẫn",e:"The guide tells us about the old temple.",h:"Người chỉ đường và giới thiệu thông tin trong chuyến đi."},
    {w:"suitcase",m:"va li",e:"My clothes are in the suitcase.",h:"Loại túi lớn dùng để mang đồ khi đi xa."},
    {w:"reservation",m:"sự đặt chỗ",e:"I made a hotel reservation online.",h:"Việc giữ trước phòng, bàn hoặc vé."},
    {w:"delay",m:"sự chậm trễ",e:"The flight has a thirty-minute delay.",h:"Việc bắt đầu hoặc đến muộn hơn dự kiến."},
    {w:"visit",m:"tham quan; thăm",e:"We visit the museum in the morning.",h:"Đi đến một nơi để gặp người hoặc xem địa điểm."},
    {w:"return",m:"trở về",e:"We return home on Sunday evening.",h:"Đi lại nơi đã bắt đầu chuyến đi."}
  ]
};
let selectedTopic="Campus Life", questions=[], current=0, correct=0, mistakes=[], answered=false;
const $=id=>document.getElementById(id);
function show(screen){document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));$(screen).classList.remove('hidden')}
function getStats(){return JSON.parse(localStorage.getItem('vocabai_stats')||'{}')}
function saveStats(s){localStorage.setItem('vocabai_stats',JSON.stringify(s))}
function topicCards(){const grid=$('topicGrid');grid.innerHTML='';Object.keys(topics).forEach((t,i)=>{const b=document.createElement('button');b.className='topic'+(t===selectedTopic?' active':'');b.innerHTML=`<b>${t}</b><small>${topics[t].length} từ mẫu</small>`;b.onclick=()=>{selectedTopic=t;topicCards()};grid.appendChild(b)})}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function selectAdaptive(topic,count=10){const stats=getStats();let pool=topics[topic].map(x=>{const st=stats[x.w]||{correct:0,wrong:0,last:0};const days=(Date.now()-st.last)/86400000;const weight=1+st.wrong*2-Math.min(st.correct*.25,1)+(days>2?1:0);return {...x,weight:Math.max(.3,weight)}});let chosen=[];while(chosen.length<Math.min(count,pool.length)){const total=pool.reduce((s,x)=>s+x.weight,0);let r=Math.random()*total,idx=0;for(;idx<pool.length;idx++){r-=pool[idx].weight;if(r<=0)break}chosen.push(pool.splice(Math.min(idx,pool.length-1),1)[0])}while(chosen.length<count)chosen.push(...shuffle(topics[topic]).slice(0,Math.min(count-chosen.length,topics[topic].length)));return chosen.slice(0,count)}
function wrongOptions(item){let values=[];Object.values(topics).flat().forEach(x=>{if(x.m!==item.m&&!values.includes(x.m))values.push(x.m)});return shuffle(values).slice(0,3)}
function renderQuestion(){answered=false;$('feedback').className='feedback hidden';$('nextBtn').classList.add('hidden');$('hintBtn').classList.remove('hidden');const q=questions[current];$('topicTitle').textContent=`Chủ đề: ${selectedTopic}`;$('counter').textContent=`Câu ${current+1}/${questions.length}`;$('progress').style.width=`${(current/questions.length)*100}%`;$('word').textContent=q.w;$('prompt').textContent='Từ trên có nghĩa gần đúng nhất là gì?';const opts=shuffle([q.m,...wrongOptions(q)]);$('answers').innerHTML='';opts.forEach((o,i)=>{const b=document.createElement('button');b.className='answer';b.innerHTML=`<span class="letter">${String.fromCharCode(65+i)}</span>${o}`;b.onclick=()=>choose(b,o,q);$('answers').appendChild(b)})}
function choose(btn,opt,q){if(answered)return;answered=true;const ok=opt===q.m;const stats=getStats(),st=stats[q.w]||{correct:0,wrong:0,last:0};st.last=Date.now();if(ok){correct++;st.correct++;btn.classList.add('correct');$('feedback').className='feedback ok';$('feedback').innerHTML=`<b>Chính xác.</b> ${q.w} nghĩa là “${q.m}”.<br><b>Ví dụ:</b> ${q.e}`}else{st.wrong++;mistakes.push(q);btn.classList.add('wrong');document.querySelectorAll('.answer').forEach(x=>{if(x.textContent.includes(q.m))x.classList.add('correct')});$('feedback').className='feedback bad';$('feedback').innerHTML=`<b>Chưa đúng.</b> Đáp án là “${q.m}”.<br><b>Ví dụ:</b> ${q.e}`}stats[q.w]=st;saveStats(stats);$('nextBtn').classList.remove('hidden');$('hintBtn').classList.add('hidden')}
function start(topic=selectedTopic){selectedTopic=topic;questions=selectAdaptive(topic,10);current=0;correct=0;mistakes=[];show('quiz');renderQuestion()}
function finish(){show('result');$('score').textContent=Math.round(correct/questions.length*100);$('correctCount').textContent=correct;$('wrongCount').textContent=questions.length-correct;let list=mistakes.length?mistakes:[{w:'Không có',m:'Bạn đã trả lời đúng tất cả',h:'Hãy thử chủ đề khác.'}];$('weakList').innerHTML=list.slice(0,5).map(x=>`<div class="weak"><div><b>${x.w}</b><br><em>${x.m}</em></div><span>${x.h}</span></div>`).join('');$('aiAdvice').textContent=mistakes.length?`Ưu tiên ôn ${mistakes.slice(0,3).map(x=>x.w).join(', ')} sau 1 ngày. Sau đó làm lại một lượt ngắn để kiểm tra.`:'Bạn đã hoàn thành tốt. Có thể chuyển sang chủ đề mới hoặc tăng độ khó.'}
$('startBtn').onclick=()=>start();$('resetBtn').onclick=()=>{localStorage.removeItem('vocabai_stats');alert('Đã xóa lịch sử học.');};$('hintBtn').onclick=()=>{const q=questions[current];$('feedback').className='feedback';$('feedback').innerHTML=`<b>Gợi ý AI:</b> ${q.h}`};$('nextBtn').onclick=()=>{current++;if(current>=questions.length)finish();else renderQuestion()};$('homeBtn').onclick=()=>{show('home');topicCards()};$('retryBtn').onclick=()=>start(selectedTopic);
function demoMode(){const p=new URLSearchParams(location.search),s=p.get('screen');if(s==='quiz'){selectedTopic='Campus Life';questions=topics[selectedTopic].slice(0,10);current=2;show('quiz');renderQuestion();$('feedback').className='feedback';$('feedback').innerHTML='<b>Gợi ý AI:</b> Đây là nơi sinh viên mượn sách và học nhóm.';}else if(s==='result'){selectedTopic='Campus Life';questions=topics[selectedTopic].slice(0,8);correct=6;mistakes=[topics[selectedTopic][1],topics[selectedTopic][2]];finish();}else{show('home')}}
topicCards();demoMode();