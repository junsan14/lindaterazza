import bg_pc from '../img/bg_pc.webp';
import bg_sp from '../img/bg_sp.webp';
export default function Single(){
  return(
    <>
      <div className='bg'>
          <picture>
              <source media="(orientation: portrait)"  srcset={bg_sp}/>
              <img src={bg_pc} alt=""/>
          </picture>
      </div>
      <section className="section wrapper single" id="single">
        <h2 className='section_title'>記事タイトル</h2>
        <div className='single_content'>
            <p>
              〇 wp_head
              wp_headはWordPressで用意されるhtmlをhead内に出力します。
              タグの閉じタグ直前に記述します。<br />
              〇 wp_head
              wp_headはWordPressで用意されるhtmlをhead内に出力します。
              タグの閉じタグ直前に記述します。<br />
              〇 wp_head
              wp_headはWordPressで用意されるhtmlをhead内に出力します。
              タグの閉じタグ直前に記述します。<br />
              〇 wp_head<br />
              wp_headはWordPressで用意されるhtmlをhead内に出力します。
              タグの閉じタグ直前に記述します。<br />
              〇 wp_head<br />
              wp_headはWordPressで用意されるhtmlをhead内に出力します。
              タグの閉じタグ直前に記述します。<br />
            </p>

        </div>
      </section>
    </>
  )
}
