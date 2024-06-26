import kv_bottle from './img/kv_bottle.webp';
import kv_bg from './img/kv_bg.webp';
import profile from './img/profile.webp';
import access from './img/access.webp';
import point01 from './img/point01.webp';
import point02 from './img/point02.webp';
import point03 from './img/point03.webp';
import item01 from './img/item01.webp';
import item02 from './img/item02.webp';
import bg_pc from './img/bg_pc.webp';
import bg_sp from './img/bg_sp.webp';
import shizuku from './img/shizuku.webp';
import { fadeIn, loadKV } from './script';

export default function Home(){
    fadeIn();
    loadKV();
    return(
        <main className="main">
            <div className='bg'>
                <picture>
                    <source media="(orientation: portrait)"  srcset={bg_sp}/>
                    <img src={bg_pc} alt=""/>
                </picture>
            </div>
            <section className="kv" id="kv">
                <div className="kv_content">
                    <h1 className='kv_content_title js-kv-content-title'>
                        <p className='kv_content_title_jp'>リンダテラッサ</p>
                        Linda Terraza
                    </h1>
                    
                    <h2 className='kv_content_catch js-kv-content-catch '>
                        本物のエクストラバージン
                        <br/>オリーブオリーブオイルを食卓へ。
                    </h2>
                    <div className='kv_content_bottle js-kv-content-bottle'>
                        <img className='kv_content_bottle_image' src={kv_bottle} />
                    </div>
                    <div className='kv_content_bg'>  
                    </div>
                </div>
            </section>
            <section className="section wrapper news js-fade-in" id="news">
                <div className='section_shizuku_img'>
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                </div>
                <h2 className='section_title'>NEWS</h2>
                <div className="news_content">
                    <div className="news_content_item">
                        <a href="./single" className='news_content_item_link'>
                            <dl>
                                <dt className="news_content_item_link_date">2024.03.11</dt>
                                <dd className="news_content_item_link_title">オリーブオイルの研修会を行いましたオリーブオイルの研修会を行いました</dd>
                            </dl>
                        </a>
                    </div>
                    <div className="news_content_item">
                        <a href="./single" className='news_content_item_link'>
                            <dl>
                                <dt className="news_content_item_link_date">2024.03.11</dt>
                                <dd className="news_content_item_link_title">オリーブオイルの研修会を行いました</dd>
                            </dl>
                        </a>
                    </div>
                    <div className='news_content_link'>
                        <a href='/blog'>一覧</a>
                    </div>

                </div>
            </section>
            <section className="section wrapper about js-fade-in" id="about">
                <div className='section_shizuku_img'>
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                </div>
                <h2 className='section_title'>ABOUT</h2>
                <div className='about_content'>
                    <div className='about_content_intro'>
                        <div className='about_content_intro_profile'>
                            <img className='about_content_intro_profile_image' src={profile} />
                            <p className='about_content_intro_profile_name'>
                                Linda terraza オーナー <br />
                                大西 三知子
                            </p>
                            <p className='about_content_intro_profile_title'>
                                オリーブオイルアドバイザー <br/>
                                オリーブオイルソムリエ <br/> 
                                愛媛大学社会共創クリエイター<br />
                            </p>
                        </div>
                        <div className='about_content_intro_desc'>
                            本物のオリーブオイルを召し上がっていただきたい<br />
                            兼ねてから食・健康には興味があったので、オリーブの講座に参加してみたら、<br />
                            <li>人間には必要不可欠な油脂成分の一つであるオリーブオイルも、身体に良いのはエキストラバージンオリーブオイルだけなのだということ</li>
                            <li>エキストラバージンオリーブオイルにも色んな味があること</li>
                            <li>世界には多品種・多様な、美味しくて身体に良いオリーブオイルがあること</li>
                            など驚きの連続でした。それで更にもっともっと知りたくなり、オリーブオイルソムリエの資格まで取ってしまいました。
                        </div>
                    </div>
                    <div className='about_content_point js-fade-in'>
                        <div className='about_content_point_item'>
                            <div className='about_content_point_item_image'>
                                <img  src={point01} />
                            </div>
                            <div className='about_content_point_item_desc'>
                                本物のオリーブオイル<br />
                                信頼できるオリーブオイルコンテンスト<br />
                                (オリーブジャパン)受賞商品を多数取り扱い  <br />
                            </div>
                        </div>
                        <div className='about_content_point_item'>
                            <div className='about_content_point_item_image'>
                                <img  src={point02} />
                            </div>
                            <div className='about_content_point_item_desc'>
                                テイスティングバー <br/>
                                風味や味を楽しむことが出来る100%<br/>
                                オリーブジュースをぜひお楽しみ下さい
                            </div>
                        </div>
                        <div className='about_content_point_item'>
                            <div className='about_content_point_item_image'>
                                <img  src={point03} />
                            </div>
                            <div className='about_content_point_item_desc'>
                            オリーブオイルソムリエ <br/>
                            オリーブ栽培・各農園で行われる研修に参加
                            栽培から搾油まで勉強しております
                            </div>
                        </div>
                       
                    </div>
                    
                </div>
            </section>
            <section className="section wrapper items js-fade-in js-bounds-items" id="items">
                <div className='section_shizuku_img'>
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                </div>
                <h2 className='section_title'>ITEMS</h2>
                <div className='items_content'>
                    <div className='items_content_item js-fade-in'>
                        <div className='items_content_item_img'>
                            <img src={item01} alt="" />
                        </div>
                        <div className='items_content_item_desc'>
                            <h3 className='items_content_item_desc_title_en'>MANE Picholine</h3>
                            <h4 className='items_content_item_desc_title_ja'>ピショリーヌ</h4>
                            <p className='items_content_item_desc_text'>
                                南フランガル地方に自生する品種でプーリアにも広まっている希少品種。
                                香りはグリーントマトや青い草のニュアンスで,
                                苦味, 辛味の心地よいバランスがとれた素晴らしいオリーブオイルです。
                            </p>
                        </div>     
                    </div>
                    <div className='items_content_item js-fade-in'>
                        <div className='items_content_item_img'>
                            <img src={item02} alt="" />
                        </div>
                        <div className='items_content_item_desc'>
                            <h3 className='items_content_item_desc_title_en'>MANE Coratina</h3>
                            <h4 className='items_content_item_desc_title_ja'>コラティーナ</h4>
                            <p className='items_content_item_desc_text'>
                                コラティーナと言えばポリフェノールやオレウロペインの濃度が高いため,
                                通常強烈で持続的な苦味辛味を感じるものが多いところ, MANEのコラティーナは
                                マイルド系でナッツやチーズのニュアンス。コラティーナのイメージを覆してくれる逸品です。
                            </p>
                        </div>     
                    </div>
                    
                </div>

            </section>
            <section className="section wrapper access js-fade-in js-bounds-access" id="access">
                <div className='section_shizuku_img'>
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                </div>
                <h2 className='section_title'>ACCESS</h2>
                <div className='access_content'>
                    <div className='access_content_item_map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.74722900958557!2d132.6958971603273!3d33.730270486081764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354ff38b1de13075%3A0xa83b2c7f9c5237a4!2z44Kq44Oq44O844OW44Kq44Kk44Or5bCC6ZaA5bqXIExpbmRhIHRlcnJhemE!5e0!3m2!1sja!2sus!4v1709983289244!5m2!1sja!2sus" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='access_content_item_desc'>
                        <dl className='access_content_item_desc_text'>
                            <dt>店名</dt>
                            <dd>Linda Terraza(リンダテラッザ)</dd>
                            <dt>住所</dt>
                            <dd>愛媛県伊予市大平13-7</dd>
                            <dt>営業時間</dt>
                            <dd>12:00-17:00</dd>
                            <dt>定休日</dt>
                            <dd>月/ 火/ 水</dd>
                            <dt>電話番号</dt>
                            <dd><a href="tel:090-8693-8119">090-8693-8119</a></dd>
                            <dt>FAX</dt>
                            <dd>089-900-0657</dd>
                            <dt>備考</dt>
                            <dd>※お越しの際はご連絡ください</dd>
                        </dl>
              
                        <img className='access_content_item_desc_img' src={access} />
                    </div>
                </div>
            </section>
            <section className="section wrapper contact js-fade-in" id="contact">
                <div className='section_shizuku_img'>
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                    <img src={shizuku} alt="" />
                </div>
                <h2 className='section_title'>CONTACT</h2>
                <form className="contact_form_control" id="form">
                    <div className="contact_form_control_item">
                        <label htmlFor="name">名前</label>
                        <input type='text' className='contact_form_control_item_input' required/>
                    </div>
                    <div className="contact_form_control_item">
                        <label htmlFor="email">Eメール</label>
                            <input type='email' className='contact_form_control_item_input' required />
                    </div>
                    <div className="contact_form_control_item">
                        <label htmlFor="subject">件名</label>
                            <input type='text' name='subject' className='contact_form_control_item_input' required />
                    </div>
                    <div className="contact_form_control_item">
                        <label htmlFor="subject">内容</label>
                            <textarea type='text' name='content' className='contact_form_control_item_input' rows='10' required >

                            </textarea>
                    </div>
                    <div className="contact_form_control_item">
                            <input type='submit' name='sumbit' value='送信' className='contact_form_control_item_button' />
                    </div>
                    
                    
                    
                </form>
            </section>

        </main>
    )
}