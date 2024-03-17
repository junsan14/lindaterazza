
import bg_pc from './img/bg_pc.webp';
import bg_sp from './img/bg_sp.webp';
export default function Blog(){

    return(
        <>
            <div className='bg'>
                    <picture>
                        <source media="(orientation: portrait)"  srcset={bg_sp}/>
                        <img src={bg_pc} alt=""/>
                    </picture>
            </div>
            <section className="section wrapper news" id="news">
                <h2 className='section_title'>お知らせ一覧</h2>
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
                    <nav class="navigation pagination" aria-label="投稿">
                        <h2 class="screen-reader-text">投稿ナビゲーション</h2>
                        <div class="nav-links">
                            <ul class="page-numbers">
                                <li><span aria-current="page" class="page-numbers current">1</span></li>
                                <li><a class="page-numbers" href="http://localhost/wordpress/blog/page/2/">2</a></li>
                                <li><a class="page-numbers" href="http://localhost/wordpress/blog/page/3/">3</a></li>
                                <li><span class="page-numbers dots">…</span></li>
                                <li><a class="page-numbers" href="http://localhost/wordpress/blog/page/6/">6</a></li>
                                <li><a class="next page-numbers" href="http://localhost/wordpress/blog/page/2/">&gt;</a></li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </section>
        </>
)
}