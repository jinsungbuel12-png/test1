// --- Firebase Configuration ---
// TODO: 여기에 Firebase 프로젝트의 구성 객체를 붙여넣으세요.
// 1. Firebase 콘솔(https://console.firebase.google.com/)에서 새 프로젝트를 만듭니다.
// 2. 프로젝트 설정 > 일반 탭에서 '웹 앱'을 등록합니다.
// 3. 'Firebase SDK 추가'에서 '구성' 객체를 복사하여 아래에 붙여넣습니다.
const firebaseConfig = {
  // apiKey: "AIza....",
  // authDomain: "your-project-id.firebaseapp.com",
  // databaseURL: "https://your-project-id-default-rtdb.firebaseio.com",
  // projectId: "your-project-id",
  // storageBucket: "your-project-id.appspot.com",
  // messagingSenderId: "...",
  // appId: "..."
};

// --- Data ---
const qnaList = [
    {
        q: 'Q1. 오랜만에 만난 친구가 "너 얼굴 좋아졌다? 살 좀 붙었네~")라고 할 때',
        img: 'q1.jpg', // Placeholder
        outer: [
            { text: '"아 진짜? 요즘 너무 잘 먹고 다녔나 봐~"라며 호탕하게 웃는다.', type: 'A' },
            { text: '"안 그래도 다이어트하려고! 티 많이 나?"라며 울상을 짓는다.', type: 'C' },
            { text: '"에이, 네가 더 예뻐졌는데 뭘~"이라며 화살표를 친구에게 돌린다.', type: 'D' },
            { text: '"응, 나 요즘 마음이 편해서 그런가 봐."라며 짧게 대답하고 화제를 바꾼다.', type: 'C' }
        ],
        inner: [
            { text: '말이야 방구야? 칭찬이야 먹이는 거야? 기분 확 나쁘네.', type: 'α' },
            { text: '거울 볼 때마다 스트레스였는데 남 눈에도 보일 정도라니... 망했다.', type: 'β' },
            { text: '지는 관리 잘하는 척하네. 너도 예전 같지 않거든?', type: 'γ' },
            { text: '살쪘다는 소리를 이렇게 정면으로 한다고? 예의가 없네 진짜.', type: 'α' }
        ]
    },
    {
        q: 'Q2. 팀 프로젝트에서 한 명이 계속 읽씹하며 참여 안 할 때',
        img: 'q2.jpg',
        outer: [
            { text: '"OO님, 바쁘신가 봐요? 확인하시면 답장 부탁드려요!"라며 친절하게 태그한다.', type: 'A' },
            { text: '"그냥 제가 이 부분까지 미리 해둘게요. 나중에 확인만 해주세요."라며 총대를 멘다.', type: 'A' },
            { text: '아무 말 없이 단톡방에 현재 진행 상황과 미참여자를 정리해서 올린다.', type: 'B' },
            { text: '개인톡으로 "무슨 일 있으세요? 참여 어려우시면 미리 말씀해주세요."라고 보낸다.', type: 'B' }
        ],
        inner: [
            { text: '와, 진짜 양심 어디 갔냐? 이름 뺄까? 진짜 혈압 오른다.', type: 'α' },
            { text: '내가 호구지, 호구야. 이럴 거면 차라리 혼자 하는 게 속 편하겠다.', type: 'β' },
            { text: '박제 완료. 나중에 교수님(혹은 상사)한테 보고할 때 증거로 다 써먹어야지.', type: 'γ' },
            { text: '얘 하나 때문에 전체 분위기 흐려지는 거 짜증 난다. 내 시간 아까워.', type: 'α' }
        ]
    },
    {
        q: 'Q3. 싸운 후, 상대가 먼저 "미안, 내가 잘못했어"라고 사과할 때',
        img: 'q3.jpg',
        outer: [
            { text: '"아냐, 나도 예민하게 굴어서 미안해."라며 바로 받아준다.', type: 'A' },
            { text: '"뭐가 미안한데? 구체적으로 말해봐."라며 차갑게 대꾸한다.', type: 'B' },
            { text: '"알겠어. 일단 알았으니까 나중에 얘기하자."라며 대화를 회피한다.', type: 'C' },
            { text: '아무 말 없이 상대를 빤히 쳐다보다가 작게 고개를 끄덕인다.', type: 'C' }
        ],
        inner: [
            { text: '휴, 먼저 사과해줘서 다행이다. 사실 나도 사과하고 싶어 죽는 줄.', type: 'δ' },
            { text: '지금 상황 모면하려고 대충 미안하다고 하는 거 다 보여. 진짜 뻔뻔하다.', type: 'γ' },
            { text: '미안하다고 하면 끝이야? 내 상처받은 마음은 어쩔 건데?', type: 'α' },
            { text: '아, 아직 화 안 풀렸는데... 여기서 더 화내면 나만 나쁜 사람 되겠지?', type: 'β' }
        ]
    },
    {
        q: 'Q4. 약속 시간에 30분 늦은 친구가 헐떡이며 뛰어올 때',
        img: 'q4.jpg',
        outer: [
            { text: '"괜찮아! 천천히 오지, 더운데 고생했네."라며 음료수를 건넨다.', type: 'A' },
            { text: '"야~ 너 오늘 맛있는 거 사야겠다? 나 진짜 한참 기다렸어."라며 장난스레 압박한다.', type: 'D' },
            { text: '"왔어? 그럼 가자."라며 별 말 없이 바로 목적지로 향한다.', type: 'C' },
            { text: '"차가 많이 막혔나 보네. 다음부턴 미리 연락 좀 해줘."라고 차분히 말한다.', type: 'B' }
        ],
        inner: [
            { text: '한두 번도 아니고 얘는 진짜 내 시간을 우습게 아는 것 같아.', type: 'α' },
            { text: '아, 진짜 짜증 나는데... 분위기 망치기 싫어서 일단 참는다.', type: 'β' },
            { text: '내 30분은 누가 보상해주나? 나도 다음엔 똑같이 늦게 나가야지.', type: 'γ' },
            { text: '사과하는 꼬락서니 보니까 진심이 안 느껴져서 더 화나.', type: 'α' }
        ]
    },
    {
        q: 'Q5. SNS에 올린 사진에 내가 싫어하는 지인이 "좋아요"와 댓글을 남겼을 때',
        img: 'q5.jpg',
        outer: [
            { text: '적당히 짧은 답글과 이모티콘을 달아주며 예의를 지킨다.', type: 'A' },
            { text: '못 본 척 댓글을 방치하고 다른 지인 댓글에만 답글을 단다.', type: 'C' },
            { text: '"오랜만이네! 잘 지내?"라며 세상 다정하게 답글을 적는다.', type: 'D' },
            { text: '슬그머니 해당 댓글을 삭제하거나 댓글 제한을 건다.', type: 'B' }
        ],
        inner: [
            { text: '왜 이래 진짜? 우리 안 친하잖아. 내 SNS까지 염탐하는 거야?', type: 'α' },
            { text: '댓글 달 시간에 네 인생이나 잘 살지. 소름 돋는다.', type: 'γ' },
            { text: '남들 눈도 있으니까 일단 착한 척은 하는데, 진짜 속 울렁거려.', type: 'β' },
            { text: '굳이 여기까지 와서 흔적 남기는 심리가 뭐야? 관심받고 싶나?', type: 'γ' }
        ]
    },
    {
        q: 'Q6. 단체 사진에서 나는 이상한데 다른 애들은 다 잘 나왔을 때',
        img: 'q6.jpg',
        outer: [
            { text: '"대박! 다들 너무 잘 나왔다. 이거 단톡방에 올려줘!"라고 말한다.', type: 'D' },
            { text: '"아, 나 너무 이상하게 나왔어... 이거 올리지 마아~"라며 귀엽게 투정 부린다.', type: 'D' },
            { text: '"나는 좀 별로긴 한데, 너네가 잘 나왔으니까 괜찮아."라며 쿨한 척한다.', type: 'A' },
            { text: '사진을 확인하자마자 말없이 자기 폰만 쳐다본다.', type: 'C' }
        ],
        inner: [
            { text: '아, 진짜 내 얼굴 왜 저래? 저걸 진짜 올린다고? 눈치 더럽게 없네.', type: 'α' },
            { text: '자기들 잘 나온 것만 보느라 내 몰골은 안중에도 없지? 이기적인 것들.', type: 'α' },
            { text: '단톡방에 올라오기만 해봐. 바로 읽씹하고 사진 저장도 안 할 거야.', type: 'γ' },
            { text: '다들 예쁜 척하는 거 보니까 역겹다. 나만 희생양 된 기분이야.', type: 'β' }
        ]
    },
    {
        q: 'Q7. 상사가 내 의견을 듣고 "그건 좀 별로인 것 같은데?"라고 할 때',
        img: 'q7.jpg',
        outer: [
            { text: '"아, 제가 놓친 부분이 있었네요! 다시 수정해서 가져오겠습니다."라며 즉각 수긍한다.', type: 'A' },
            { text: '"어떤 부분이 구체적으로 마음에 안 드시는 걸까요?"라며 논리적으로 되묻는다.', type: 'B' },
            { text: '"네, 알겠습니다."라고 짧게 답하고 자리로 돌아간다.', type: 'C' },
            { text: '"사실 이런 의도로 기획한 건데, 다시 한 번만 봐주시면 안 될까요?"라며 설득한다.', type: 'B' }
        ],
        inner: [
            { text: '지가 뭘 안다고 별로래? 어차피 시키는 대로 할 거면 의견 왜 물어봄?', type: 'α' },
            { text: '아... 집에 가고 싶다. 내 능력이 이것밖에 안 되나? 자괴감 들기 시작함.', type: 'β' },
            { text: '꼰대 특: 지 생각만 정답인 줄 안다. 대화가 안 통함.', type: 'γ' },
            { text: '그럼 네가 해보든가. 말은 참 쉽게 해요. 진짜 짜증 나네.', type: 'α' }
        ]
    }
];

const resultList = {
    'A_α': { name: '천사표 미소 뒤의 칼날', desc: '겉으론 "괜찮아"라고 하지만 속으론 상대의 가계도까지 읊으며 분노함.', outer: '친절', inner: '분노' },
    'A_β': { name: '유리멘탈 프로 배려러', desc: '남 배려하느라 정작 본인 마음은 너덜너덜함. "내가 문제지 뭐"가 입에 붙음.', outer: '친절', inner: '자책' },
    'A_γ': { name: '비즈니스 스마일', desc: '사회생활 만렙. \'저 사람은 원래 저래\'라며 속으론 무시하지만 겉으론 완벽하게 응대함.', outer: '친절', inner: '냉소' },
    'A_δ': { name: '진심 어린 따뜻함', desc: '겉과 속이 가장 일치함. 실제로 타인을 이해하려 노력하고 사과도 잘 받아줌.', outer: '친절', inner: '안도' },

    'B_α': { name: '팩트 폭격기', desc: '할 말은 해야 직성이 풀림. 속마음이 표정에 다 드러나서 가끔 주변을 얼어붙게 함.', outer: '직설', inner: '분노' },
    'B_β': { name: '완벽주의 워커홀릭', desc: '일 처리는 확실하지만 스스로에게 엄격함. 상사의 지적에 논리적으로 대응해도 속으론 밤새 자책함.', outer: '직설', inner: '자책' },
    'B_γ': { name: '냉철한 손익계산서', desc: '\'이게 효율적이야\'라고 말하며 철저히 이성적으로 행동함. 감정적인 호소에 휘둘리지 않음.', outer: '직설', inner: '냉소' },
    'B_δ': { name: '단단한 자존감', desc: '건강한 소통을 함. 문제가 생기면 바로 말해서 풀고, 뒤끝이 전혀 없는 깔끔한 성격.', outer: '직설', inner: '안도' },

    'C_α': { name: '침묵의 불도저', desc: '말은 안 하는데 기운으로 사람을 압도함. 이 사람이 조용해지면 주변 사람들은 눈치를 보게 됨.', outer: '회피', inner: '분노' },
    'C_β': { name: '방구석 고찰가', desc: '갈등 상황에서 일단 도망치지만, 혼자 있을 때 그 상황을 백만 번 복기하며 괴로워함.', outer: '회피', inner: '자책' },
    'C_γ': { name: '마이웨이 관찰자', desc: '\'어차피 말해도 안 통해\'라는 생각에 입을 닫음. 세상을 한 발짝 뒤에서 관조하는 스타일.', outer: '회피', inner: '냉소' },
    'C_δ': { name: '내면의 평화 추구자', desc: '갈등이 싫어서 피하지만, 금방 잊어버리고 자기만의 즐거움을 찾아 떠나는 긍정적 회피형.', outer: '회피', inner: '안도' },

    'D_α': { name: '광대의 눈물', desc: '웃으면서 뼈 있는 농담을 던짐. 웃고 있지만 눈은 안 웃고 있을 확률이 높음.', outer: '유머', inner: '분노' },
    'D_β': { name: '자학 개그 장인', desc: '자신의 실수를 웃음으로 승화시키지만 속으론 꽤 타격받음. 남을 웃겨야 한다는 강박이 있을 수 있음.', outer: '유머', inner: '자책' },
    'D_γ': { name: '풍자 테러리스트', desc: '비꼬는 유머의 달인. 상대방을 웃기면서도 은근히 바보로 만드는 고단수 화법을 구사함.', outer: '유머', inner: '냉소' },
    'D_δ': { name: '찐 낙천주의자', desc: '그냥 세상이 즐거움. 친구가 늦어도 "맛있는 거 사주겠네!"라며 진심으로 즐거워하는 타입.', outer: '유머', inner: '안도' }
};

const infoList = {
    'A_α': { title: '[천사표 미소 뒤의 칼날]을 위한 팁', tips: { friend: "서운함이 3스택 쌓이기 전에 농담으로라도 슬쩍 말하세요.", love: "상대가 '화났어?' 물을 때 '아니'라고 답하는 건 금물입니다.", family: "가깝다고 다 참아주지 마세요. 가끔은 '나쁜 자식'이 되어도 괜찮습니다.", work: "무리한 부탁은 거절하세요. 속으로 욕하면서 해주면 결국 내 손해입니다." } },
    'A_β': { title: '[유리멘탈 프로 배려러]를 위한 팁', tips: { friend: "내가 먼저 제안하는 연습을 하세요. 친구들도 당신의 의견을 궁금해합니다.", love: "사랑받으려 노력하기보다, 나 자체로 사랑받을 자격이 있음을 믿으세요.", family: "부모님의 기대를 충족시키려 너무 애쓰지 않아도 됩니다.", work: "실수해도 괜찮습니다. 남들은 생각보다 당신의 실수에 관심이 없어요." } },
    'A_γ': { title: '[비즈니스 스마일]을 위한 팁', tips: { friend: "가끔은 계산 없는 바보 같은 모습도 보여주세요.", love: "분석하려고 하지 말고 마음이 가는 대로 느껴보세요.", family: "의무적인 연락보다는 진심 어린 안부 한마디가 필요합니다.", work: "지금처럼 하세요. 당신은 이미 오피스 빌런 퇴치 전문가입니다." } },
    'A_δ': { title: '[진심 어린 따뜻함]을 위한 팁', tips: { friend: "주변에 이용하려는 사람이 없는지 가끔은 경계심을 가지세요.", love: "갈등이 생겨도 대화로 잘 풀 수 있으니 상대에게 믿음을 주세요.", family: "당신의 긍정 에너지는 가족의 화목에 큰 기둥이 됩니다.", work: "신뢰받는 동료가 되기에 최적입니다. 중심을 잘 잡으세요." } },
    'B_α': { title: '[팩트 폭격기]를 위한 팁', tips: { friend: "'맞는 말'보다 '따뜻한 말'이 필요할 때가 있음을 기억하세요.", love: "싸울 때 '누가 이기나'가 아니라 '어떻게 같이 사나'를 고민하세요.", family: "정곡을 찌르는 조언은 가족에게 더 큰 상처가 됩니다.", work: "비판하기 전에 칭찬 한마디만 먼저 섞어보세요. 전달력이 2배가 됩니다." } },
    'B_β': { title: '[완벽주의 워커홀릭]를 위한 팁', tips: { friend: "남들에게 보이는 모습만큼 본인도 멋지다는 걸 인정하세요.", love: "연인 앞에서만큼은 완벽하지 않아도 됩니다. 약점을 공유하세요.", family: "당신은 존재만으로 가치 있습니다. 성과로 증명하려 하지 마세요.", work: "상사의 피드백을 '인격 모독'이 아닌 '업무 수정'으로만 받아들이세요." } },
    'B_γ': { title: '[냉철한 손익계산서]를 위한 팁', tips: { friend: "가끔은 목적 없는 만남, 쓸데없는 수다를 즐겨보세요.", love: "감정 공감이 어렵다면 리액션이라도 학습해보세요.", family: "가족은 비즈니스 파트너가 아닙니다. 효율보다 소중함을 우선하세요.", work: "업무 능력은 최고지만, '커피 한 잔의 여유'로 동료들의 민심을 사보세요." } },
    'B_δ': { title: '[단단한 자존감]를 위한 팁', tips: { friend: "당신의 솔직함은 주변 친구들에게 좋은 본보기가 됩니다.", love: "밀당하지 않는 당신의 모습이 상대에게는 큰 신뢰를 줍니다.", family: "갈등 중재자 역할을 잘 수행하며 집안의 중심을 잡아주세요.", work: "리더십을 발휘하기 좋은 타입입니다. 부하 직원의 감정도 잘 챙겨보세요." } },
    'C_α': { title: '[침묵의 불도저]를 위한 팁', tips: { friend: "입을 다물기보다 '지금 기분이 안 좋으니 나중에 얘기하자'고 말하세요.", love: "침묵은 연인에게 가장 무서운 형벌입니다. 짧게라도 감정을 표현하세요.", family: "가족들이 눈치 보게 하지 마세요. 솔직한 대화가 약입니다.", work: "불만이 있다면 공식적인 루트로 건의하세요. 표정으로 말하면 오해만 삽니다." } },
    'C_β': { title: '[방구석 고찰가]를 위한 팁', tips: { friend: "나를 싫어할까 봐 걱정하는 마음을 조금만 내려놓으세요.", love: "서운한 게 있다면 참지 말고 바로 얘기하는 게 이별을 막는 길입니다.", family: "가족 안에서도 당신의 자리는 충분히 안전합니다. 숨지 마세요.", work: "'모르겠어요'나 '죄송해요' 대신 '확인 후 말씀드리겠습니다'를 쓰세요." } },
    'C_γ': { title: '[마이웨이 관찰자]를 위한 팁', tips: { friend: "가끔은 관찰자가 아니라 주인공이 되어보세요.", love: "상대가 당신의 마음을 궁금해할 때 외면하지 마세요.", family: "무관심도 상처가 됩니다. 가끔은 소소한 소식을 전하세요.", work: "협업이 필요한 일에서는 최소한의 소통만이라도 적극적으로 임하세요." } },
    'C_δ': { title: '[내면의 평화 추구자]를 위한 팁', tips: { friend: "문제가 생겼을 때 회피만 하면 상대는 당신을 무책임하다고 느낄 수 있습니다.", love: "갈등은 성장의 기회입니다. 무조건 피하는 게 답은 아닙니다.", family: "당신의 낙천성이 집안 분위기를 밝게 만듭니다.", work: "업무 피드백을 '그냥 넘겨버리는' 태도는 성장을 방해할 수 있습니다." } },
    'D_α': { title: '[광대의 눈물]를 위한 팁', tips: { friend: "농담 속에 뼈를 너무 많이 섞으면 친구들이 아파합니다.", love: "화가 났을 땐 웃기려 하지 말고 진지하게 화를 내세요.", family: "가장 편한 사람들에게까지 가면을 쓸 필요는 없습니다.", work: "유머러스한 건 좋지만, 가끔은 진중한 전문성을 보여주세요." } },
    'D_β': { title: '[자학 개그 장인]를 위한 팁', tips: { friend: "나를 희생하지 않아도 당신은 충분히 매력 있는 사람입니다.", love: "자학적인 농담은 연인을 슬프게 합니다. 자신을 더 아껴주세요.", family: "부모님 앞에서는 밝은 척보다 있는 그대로의 모습을 보여주세요.", work: "자학 개그는 자칫 만만한 이미지로 이어질 수 있으니 주의하세요." } },
    'D_γ': { title: '[풍자 테러리스트]를 위한 팁', tips: { friend: "지적인 유머도 좋지만, 가끔은 몸개그 같은 단순함도 필요합니다.", love: "연인의 서툰 점을 유머로 지적하는 습관을 버리세요.", family: "가족에게는 날카로운 풍자보다는 따뜻한 위로가 필요합니다.", work: "상사나 동료의 결점을 풍자하는 것은 사회생활에 위험할 수 있습니다." } },
    'D_δ': { title: '[찐 낙천주의자]를 위한 팁', tips: { friend: "당신의 밝음이 누군가에게는 가볍게 보이지 않도록 중심을 잡으세요.", love: "진지한 대화가 필요한 시점에는 유머를 잠시 내려놓으세요.", family: "당신의 존재 자체가 가족에게는 큰 비타민입니다.", work: "어려운 상황도 긍정적으로 돌파하는 당신은 팀의 활력소입니다." } }
};


// --- DOM Elements ---
const pages = document.querySelectorAll('.page');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const editAnswersBtn = document.getElementById('edit-answers-btn');
const shareBtn = document.getElementById('share-btn');
const restartBtn = document.getElementById('restart-btn');

const visitorCountEl = document.getElementById('visitor-count');
const qTitle = document.getElementById('question-title');
const outerChoicesEl = document.getElementById('outer-choices');
const innerChoicesEl = document.getElementById('inner-choices');
const choiceCard = document.getElementById('choice-card');
const resultCaptureEl = document.getElementById('result-capture');

const resultSummaryText = document.getElementById('result-summary-text');
const resultOuterTypeEl = document.getElementById('result-outer-type');
const resultInnerTypeEl = document.getElementById('result-inner-type');
const resultPersonaNameEl = document.getElementById('result-persona-name');
const resultPersonaDescEl = document.getElementById('result-persona-desc');

const tipsTitleEl = document.getElementById('tips-title');
const tipsBySituationEl = document.getElementById('tips-by-situation');

const shareModal = document.getElementById('share-modal');
const closeModalBtn = document.querySelector('.close-btn');
const kakaoShareBtn = document.getElementById('kakao-share-btn');
const twitterShareBtn = document.getElementById('twitter-share-btn');
const facebookShareBtn = document.getElementById('facebook-share-btn');
const copyLinkBtn = document.getElementById('copy-link-btn');

// --- State ---
let currentQ = 0;
let userAnswers = [];
let finalResultCode = '';
let db;
let touchstartX = 0;
let touchendX = 0;
let chartInstances = {};

// --- Functions ---

// Page navigation
function goPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Render the question and choices
function renderQuestion(qIdx) {
    const q = qnaList[qIdx];
    qTitle.textContent = q.q;
    
    outerChoicesEl.innerHTML = '';
    innerChoicesEl.innerHTML = '';

    q.outer.forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.classList.add('choice-btn');
        btn.innerHTML = `${idx + 1}. ${choice.text}`;
        btn.dataset.type = choice.type;
        if (userAnswers[qIdx] && userAnswers[qIdx].outer === choice.type) {
            btn.classList.add('selected');
        }
        outerChoicesEl.appendChild(btn);
    });

    q.inner.forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.classList.add('choice-btn');
        btn.innerHTML = `${idx + 1}. ${choice.text}`;
        btn.dataset.type = choice.type;
        if (userAnswers[qIdx] && userAnswers[qIdx].inner === choice.type) {
            btn.classList.add('selected');
        }
        innerChoicesEl.appendChild(btn);
    });

    if (userAnswers[qIdx] && userAnswers[qIdx].inner) {
        choiceCard.classList.add('is-flipped');
    } else {
        choiceCard.classList.remove('is-flipped');
    }
}

// Handle choice selection
function handleChoice(e, choiceType) {
    if (!e.target.matches('.choice-btn')) return;

    const selectedBtn = e.target;
    const type = selectedBtn.dataset.type;
    const parentEl = selectedBtn.parentElement;

    parentEl.querySelectorAll('.choice-btn').forEach(btn => btn.classList.remove('selected'));
    selectedBtn.classList.add('selected');

    userAnswers[currentQ][choiceType] = type;

    if (choiceType === 'outer' && !userAnswers[currentQ].inner) {
        setTimeout(() => choiceCard.classList.add('is-flipped'), 300);
    }
    
    if (userAnswers[currentQ].outer && userAnswers[currentQ].inner) {
        nextBtn.disabled = false;
    }
}

// Start the test
function start() {
    userAnswers = new Array(qnaList.length).fill(null).map(() => ({ outer: null, inner: null }));
    currentQ = 0;
    goNext(0);
}

// Go to the next question or result
function goNext(qIdx) {
     if (qIdx >= qnaList.length) {
         goPage('loading-page');
         setTimeout(() => {
             finalResultCode = calculateResult();
             showResult(finalResultCode);
         }, 3000);
         return;
     }

    renderQuestion(qIdx);
    currentQ = qIdx;
    
    prevBtn.style.visibility = qIdx === 0 ? 'hidden' : 'visible';
    nextBtn.disabled = !(userAnswers[currentQ].outer && userAnswers[currentQ].inner);
    
    goPage('test-page');
}

// Go to the previous question
function goPrev() {
    if (currentQ === 0) return;
    goNext(currentQ - 1);
}

// Calculate the result
function calculateResult() {
    const outerCounter = { A: 0, B: 0, C: 0, D: 0 };
    const innerCounter = { 'α': 0, 'β': 0, 'γ': 0, 'δ': 0 };

    userAnswers.forEach(answer => {
        if(answer.outer) outerCounter[answer.outer]++;
        if(answer.inner) innerCounter[answer.inner]++;
    });

    const finalOuter = Object.keys(outerCounter).reduce((a, b) => outerCounter[a] > outerCounter[b] ? a : b);
    const finalInner = Object.keys(innerCounter).reduce((a, b) => innerCounter[a] > innerCounter[b] ? a : b);

    return `${finalOuter}_${finalInner}`;
}

// Show the result page
function showResult(resultCode) {
    const result = resultList[resultCode];
    if (!result) return;

    resultSummaryText.innerHTML = `당신은 겉은 ${result.outer}이고<br>속은 ${result.inner} 타입입니다.`;
    
    const colorMap = { '친절': '#34d399', '직설': '#fbbf24', '회피': '#60a5fa', '유머': '#f87171', '분노': '#ef4444', '자책': '#a78bfa', '냉소': '#9ca3af', '안도': '#38bdf8'};

    resultOuterTypeEl.style.backgroundColor = colorMap[result.outer];
    resultInnerTypeEl.style.backgroundColor = colorMap[result.inner];
    resultOuterTypeEl.textContent = `겉: ${result.outer}`;
    resultInnerTypeEl.textContent = `속: ${result.inner}`;

    resultPersonaNameEl.textContent = result.name;
    resultPersonaDescEl.textContent = result.desc;

    // --- UNCOMMENT BELOW FOR REAL FIREBASE ---
    // if(db) {
    //     db.ref('results').push(resultCode);
    // }

    goPage('result-page');
    showTips(resultCode);
}

// Show the tips page
function showTips(resultCode) {
    const info = infoList[resultCode];
    if (!info) return;
    
    tipsTitleEl.textContent = info.title;
    tipsBySituationEl.innerHTML = `
        <h4>🤝 친구</h4><p>${info.tips.friend}</p>
        <h4>❤️ 연애</h4><p>${info.tips.love}</p>
        <h4>👨‍👩‍👧‍👦 가족</h4><p>${info.tips.family}</p>
        <h4>💼 직장동료</h4><p>${info.tips.work}</p>
    `;

    loadCharts(resultCode);
}

// Load charts with data
function loadCharts(resultCode) {
    // --- UNCOMMENT BELOW FOR REAL FIREBASE ---
    /*
    if (!db) {
        console.log("DB not available for charts");
        // Draw charts with dummy data if DB is not connected
        drawChart('outer-type-chart', { '나': 1, '기타': 3 });
        drawChart('inner-type-chart', { '나': 1, '기타': 5 });
        drawChart('full-type-chart', { '나': 1, '기타': 15 });
        return;
    }
    
    db.ref('results').once('value', (snapshot) => {
        const allResults = snapshot.val() ? Object.values(snapshot.val()) : [resultCode];
        const total = allResults.length;
        const [myOuter, myInner] = resultCode.split('_');

        const outerSame = allResults.filter(res => res.split('_')[0] === myOuter).length;
        const innerSame = allResults.filter(res => res.split('_')[1] === myInner).length;
        const fullSame = allResults.filter(res => res === resultCode).length;

        drawChart('outer-type-chart', { '나와 같은 타입': outerSame, '다른 타입': total - outerSame });
        drawChart('inner-type-chart', { '나와 같은 타입': innerSame, '다른 타입': total - innerSame });
        drawChart('full-type-chart', { '나와 같은 타입': fullSame, '다른 타입': total - fullSame });
    });
    */

    // Draw charts with dummy data for now
    drawChart('outer-type-chart', { '나와 같은 타입': 15, '다른 타입': 85 });
    drawChart('inner-type-chart', { '나와 같은 타입': 25, '다른 타입': 75 });
    drawChart('full-type-chart', { '나와 같은 타입': 5, '다른 타입': 95 });
}

function drawChart(canvasId, data) {
    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
    }
    const ctx = document.getElementById(canvasId).getContext('2d');
    chartInstances[canvasId] = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: ['#5b21b6', '#ddd'],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Firebase visitor counter
function updateVisitorCount() {
    let randomCount = Math.floor(Math.random() * 1000) + 2000;
    visitorCountEl.textContent = `현재까지 ${randomCount.toLocaleString()}명이 이 테스트를 이용했어요!`;
}

// Swipe handler
function handleSwipe() {
    const SWIPE_THRESHOLD = 50;
    if (touchendX < touchstartX - SWIPE_THRESHOLD) {
        choiceCard.classList.add('is-flipped');
    }
    if (touchendX > touchstartX + SWIPE_THRESHOLD) {
        choiceCard.classList.remove('is-flipped');
    }
}

// --- Sharing Functions ---
function shareToKakao() {
    // Kakao.init('YOUR_KAKAO_APP_KEY');
    const result = resultList[finalResultCode];
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: `내 속마음 분석 결과는? [${result.name}]`,
            description: result.desc,
            imageUrl: 'https://user-images.githubusercontent.com/125859422/254342938-1a5a22a3-2396-452f-a63c-23b5d95b244d.png', // Placeholder
            link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        },
        buttons: [{
            title: '나도 테스트하기',
            link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        }],
    });
    moveToTipsPage();
}

function shareToTwitter() {
    const result = resultList[finalResultCode];
    const text = `내 속마음 분석 결과는? [${result.name}] 궁금하다면 테스트 해보세요!`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`);
    moveToTipsPage();
}

function shareToFacebook() {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`);
    moveToTipsPage();
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("링크가 복사되었습니다!");
        moveToTipsPage();
    });
}

function moveToTipsPage() {
    shareModal.style.display = 'none';
    goPage('tips-page');
}


// --- Event Listeners ---
startBtn.addEventListener('click', start);
nextBtn.addEventListener('click', () => goNext(currentQ + 1));
prevBtn.addEventListener('click', goPrev);
editAnswersBtn.addEventListener('click', () => goNext(qnaList.length - 1));
restartBtn.addEventListener('click', () => window.location.reload());

outerChoicesEl.addEventListener('click', (e) => handleChoice(e, 'outer'));
innerChoicesEl.addEventListener('click', (e) => handleChoice(e, 'inner'));

choiceCard.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; });
choiceCard.addEventListener('touchend', e => { touchendX = e.changedTouches[0].screenX; handleSwipe(); });

shareBtn.addEventListener('click', () => { shareModal.style.display = 'block'; });
closeModalBtn.addEventListener('click', () => { shareModal.style.display = 'none'; });
window.addEventListener('click', (event) => { if (event.target == shareModal) { shareModal.style.display = 'none'; } });

kakaoShareBtn.addEventListener('click', shareToKakao);
twitterShareBtn.addEventListener('click', shareToTwitter);
facebookShareBtn.addEventListener('click', shareToFacebook);
copyLinkBtn.addEventListener('click', copyLink);

// --- Initial Load ---
function initialize() {
    // Kakao.init('YOUR_KAKAO_APP_KEY');
    updateVisitorCount();
    userAnswers = new Array(qnaList.length).fill(null).map(() => ({ outer: null, inner: null }));
    goPage('start-page');
}

initialize();