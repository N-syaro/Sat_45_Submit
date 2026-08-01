import{Link,Navigate,useParams} from "react-router-dom";
import{works} from"../data/portfolio";
import SafeImg from "./SafeImg";
import type { ReactNode } from "react";

function Section({title,children}:{title:string;children:ReactNode}){
    return(
        <div className="wd-section">
            <h2 className="wd-section-title">{title}</h2>
            <div className="wd-section-body">{children}</div>
        </div>
    )
}

function MetaRow({label,value}:{label:string;value:string|undefined}){
    return (
        <div className="wd-meta-row">
            <dt className="wd-meta-label">{label}</dt>
            <dd className="ed-meta-value">{value}</dd>
        </div>
    )
}





export default function workDetail(){
    const {id} = useParams()
    const work = works.find((w)=>w.id === Number(id))

    if(!work) return <Navigate to="/" replace/>

    return(
        <div className="wd-page">
            <div className="container">
                <Link to="/#works" className="wd-back">
                    ←作品一覧に戻る
                </Link>
                <div className="wd-hero">
                    <div className="wd-hero-thumbnail">
                        <SafeImg
                        src={work.thumbnail}
                        alt={work.title}
                        fallback="No Image..."
                        />
                    </div>
                    <div className="wd-hero-info">
                        <p className="work-category-badge">{work.genre}</p>
                        <h1 className="wd-title">{work.title}</h1>7
                        <p className="wd-descrption">{work.description}</p>
                    </div>
                </div>

                <section  title="基本情報">
                    <dl className="wd-meta-grid">
                        <MetaRow label="製作期間" value={work.period}/>
                        <MetaRow label="チーム構成" value={work.team}/>
                        <MetaRow label="担当箇所" value={work.role}/>
                        <MetaRow label="プラットフォーム" 
                             value={work.platfrom?.join(' / ')}/>
                    </dl>
                </section>

                <div className="wd-tech-grid">
                    {work.techPoints &&(
                        <section title="こだわった技術ポイント">
                            <p className="wd-text">{work.techPoints}</p>
                        </section>
                    )}
                     {work.techPoints &&(
                        <section title="設計上の工夫">
                            <p className="wd-text">{work.designNotes}</p>
                        </section>
                    )}
                     {work.techPoints &&(
                        <section title="実装解説">
                            <p className="wd-text">{work.implementationTheme}</p>
                        </section>
                    )}
                     {work.techPoints &&(
                        <section title="詰まった問題と解決策">
                            <p className="wd-text">{work.troublesooting}</p>
                        </section>
                    )}
                     {work.techPoints &&(
                        <section title="パフォーマンス">
                            <p className="wd-text">{work.performance}</p>
                        </section>
                    )}
                </div>

            </div>
        </div>
    )
}

