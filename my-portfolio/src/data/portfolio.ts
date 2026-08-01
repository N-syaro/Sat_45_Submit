export interface Profile
{
    name: string
    nameEn: string
    role:string
    school:string
    department: string
    graduationYear: string
    bio: string
    motto: string
    avater: string 
    links:{
        github:string
        twitter:string
        email:string
    }
}
export interface Skill
{
    name:string
    version: string|null
    level:number
    category:string
    capabilities:string[]
    note:string|null
}
export interface Venue
{
    name:string
    data:string
}
export interface Work
{
  id:number 
  title:string
  genre:string
  category:string
  thumbnail:string
  screenshots:string[]
  description:string
  tags:string[]
  platfrom:string[]
  period:string
  team:string
  role:string
  github:string
  link:string|null
  venues:Venue[]
  techPoints:string|null
  designNotes:string|null
  implementationTheme:string|null
  troublesooting:string|null
  performance:string|null
}

export interface GameJam{
    name:string
    data:string
    theme:string
    descripton:string
    platform:string
    role:string
    team:string
    result:string|null
    url:string|null
    reflection:string
}

export type CertStatus = "取得済み"|"受験予定"|"取得予定"|"学習中";

export interface Certification{
    name:string
    data:string
    category:string
    score:string|null
    status:CertStatus
}
export interface TimelineItem{
    year:string
    event:string
}

export const profile:Profile={
    name: "中塚 晃弥",
    nameEn: "Koya Nakatsuka",
    role: "プログラマー",
    school: "京都デザイン＆テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2028年3月卒業見込み",
    bio: "私の強みは、細部までこだわりぬく姿勢と、チームで協力しながら物事を継続してやり切る力です。　ゲーム制作においては細かな挙動や仕様の違いがユーザー体験に大きく影響すると考えており、違和感や不具合を放置せず、納得できるまで調整することを大切にしています。作品１ではターン処理の速度が速く、プレイヤーが見づらかったため、遅延をかけることで視認性を向上させることができました。また、チームで物事を進める場面では、自分の役割を意識しつつ周囲とこまめに連携を取り、認識のズレが起きないよう心がけてきました。さらに、一度取り組んだことは最後までやり切る継続力があり、時間のかかる作業や改善の積み重ねも粘り強く続けることができます。これらの強みを活かし、ユーザーにとって質の高い体験を提供できるゲーム開発に貢献したいと考えています。",
    motto: "やらずに後悔より、やって後悔",
    avater: "0430_160(ナカツカ コウヤ).jpg",
    links: {
        github: "https://github.com/N-syaro",
        twitter: "https://x.com/tsukapon0510?s=11",
        email: "n.koya0510@gmail.com"
    }
}

export const skills:Skill[] = [{
    name: "Unity",
    version: "6",
    level: 70,
    category: "game",
    capabilities: ["3D/2Dゲーム開発"],
    note: null
},
{
    name: "Unreal Engine",
    version: "5",
    level: 45,
    category: "game",
    capabilities: ["Blueprint"],
    note: null
},
{
    name: "C++",
    version: null,
    level: 40,
    category: "language",
    capabilities: ["DirectX"],
    note: null
},
{
    name: "GitHub",
    version: null,
    level: 50,
    category: "vcs",
    capabilities: ["リポジトリ管理"],
    note:"個人・チーム制作ともにGitHubで管理"
}]

export const works:Work[] = [{
    id:1,
    title: "Nigthmare fear",
    genre: "2Dカードゲーム",
    category: "game",
    thumbnail: "",
    screenshots: [],
    description: "Unityで制作した2Dカードゲーム",
    tags: ["Unity"],
    platfrom: ["Windows"],
    period: "2024年10月~2月",
    team: "プランナー3人・プログラマー2人・デザイナー4人",
    role: "プログラマー",
    github: "",
    link: null,
    venues: [],
    techPoints: null,
    designNotes: null,
    implementationTheme: null,
    troublesooting: null,
    performance: null
},
{
    id: 2,
    title: "断罪クッキング",
    genre: "2Dバカゲー",
    category: "game",
    thumbnail: "",
    screenshots: [],
    description: "Unityで制作した2Dバカゲー",
    tags: ["Unity"],
    platfrom: ["Windows"],
    period: "2025年5月~8月",
    team: "プランナー2人・プログラマー3人・デザイナー3人",
    role: "プログラマー",
    github: "",
    link: null,
    venues: [],
    techPoints: null,
    designNotes: null,
    implementationTheme: null,
    troublesooting: null,
    performance: null
},
{
    id: 3,
    title: "救済心弾",
    genre: "2Dノベル＆シューティングゲーム",
    category: "game",
    thumbnail: "",
    screenshots: [],
    description: "Unityで制作した2Dノベルゲームとシューティングゲームが織り交ざったゲーム",
    tags: ["Unity"],
    platfrom: ["Windows"],
    period: "2026年5月~8月",
    team: "プランナー1人・プログラマー4人・デザイナー1人",
    role: "プログラマー",
    github: "https://github.com/N-syaro/Shindan.git",
    link: null,
    venues: [],
    techPoints: "会話文管理にScriptableObjectを使用し、管理をしやすいようにしました。",
    designNotes: null,
    implementationTheme: null,
    troublesooting: null,
    performance: null
}]

export const gameJams:GameJam[] =[{
    name: "",
    data: "",
    theme: "",
    descripton: "",
    platform: "",
    role: "",
    team: "",
    result: null,
    url: null,
    reflection: ""
}]

export const certifications:Certification[] = [{
    name: "第二種電気工事士",
    data: "令和4年9月合格",
    category: "国家資格",
    score: null,
    status: "取得済み"
}]

export const timeline:TimelineItem[] = [
{year: "2024年4月",event: "京都デザイン＆テクノロジー専門学校　スーパーゲームクリエイター専攻　入学"}
]

