import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Anasayfa</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet"></link>
    </Head>
    <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <img src="https://i.hizliresim.com/3O47oA.png" className="mr-2"></img>
        <a className="text-muted" href="https://www.youtube.com/channel/UC9Z-Gc_BkYuW75jKcTJICJA">Abone Ol</a>
      </div>
      <div className="col-4 text-center">
      <div className="">
      <Link href="/index"><h1 className="hero-title">Selman Kahya</h1></Link>
      <div className="hero-social-links">

      <a href="https://medium.com/@selmankahya" className="social-link"><img src="https://i.hizliresim.com/AOlLLL.png"></img></a>
      <a href="https://www.twitter.com/selmankahyax" className="social-link"><img src="https://i.hizliresim.com/00511B.png"></img></a>
      <a href="https://www.linkedin.com/in/selmankahya" className="social-link"><img src="https://i.hizliresim.com/5NOggL.png"></img></a>
      <a href="https://www.instagram.com/selmankahyax/?hl=en" className="social-link"><img src="https://i.hizliresim.com/bvorrb.png"></img></a>
      </div>
    </div>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="text-muted" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
        </a>
       <Link href="/yazi-paylas"><button type="button" className="btn btn-primary" href="">Yazı Paylaş</button></Link>
      </div>
    </div>
  </header>
  <hr></hr>
  <div className="nav-scroller py-1 mb-2">
    <nav className="nav d-flex justify-content-between">
      <a className="p-2 text-muted" href="#">Big Data</a>
      <a className="p-2 text-muted" href="#">Java</a>
      <a className="p-2 text-muted" href="#">Mobil</a>
      <a className="p-2 text-muted" href="#">Python</a>
      <a className="p-2 text-muted" href="#">Veritabanları</a>
      <a className="p-2 text-muted" href="#">Web</a>
      <a className="p-2 text-muted" href="#">C / C++</a>
      <a className="p-2 text-muted" href="#">Asp.NET</a>
      <a className="p-2 text-muted" href="#">Arduino</a>
      <a className="p-2 text-muted" href="#">Html5</a>
      <a className="p-2 text-muted" href="#">Jquery</a>
      <a className="p-2 text-muted" href="#">Next.Js</a>
    </nav>
  </div>
  <div className="jumbotron p-4 p-md-5 text-white rounded backgorund-image-slayder">
    <div className="col-md-6 px-0">
      <h1 className="display-4 font-italic">YARIŞMAYA KATIL! (son gün 1 Şubat 2020)</h1>
      <p className="lead my-3">Dünyanın en güzel blog'u, www.mukemmel.blog! , Bu proje nasıl kodlandı izlemek ister misin?</p>
      <p className="lead mb-0"><a href="https://youtu.be/cHUh0FmPd3A" className="text-white font-weight-bold">Hemen İzle...</a></p>
    </div>
  </div>
  <div className="row mb-2">
  {posts.map(post => (
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{post.category}</strong>
          <h3 className="mb-0"> 
            <a className="blog-title-link">{post.title}</a>
          </h3>
          <div className="mb-1 text-muted">{post.date}</div>
          <p className="card-text mb-auto yazi-sinirla">{post.details}</p>
          <a href={post.slug} className="stretched-link">Devamını Oku</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img className="bd-placeholder-img" width="200" height="250" src={post.images}></img>
         </div>
      </div>
    </div>
     ))}
  </div>
  <footer className="footer-setting">
  <div className="container">
    <p className="float-right">
      <a href="#">Yukarı Çık</a>
    </p>
    <p>Created By &copy; Rıdvan Özcan!</p>
    <p>Beni tanımak istermisin ?<a href="https://www.instagram.com/mr.softwareengineer/">instagram</a> hesabımı <a href="https://www.instagram.com/mr.softwareengineer/">ziyaret edebilirsin</a>.</p>
  </div>
</footer>
  

    <style jsx>{`
      .container {
        max-width: 70%;
        width: 100%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }

      .footer-setting{
        background-color: #f9f9f9;
        border-top: .05rem solid #e5e5e5;
      }

      .yazi-sinirla {
        width: 300px;
        overflow: hidden; /* taşanları gizle */
        white-space: nowrap; /* alt satıra hiç inme */
        text-overflow: ellipsis; /* eğer uzunsa üç nokta koy */
      }

      .backgorund-image-slayder{
        background-image: url("https://i.hizliresim.com/p5Q05n.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;    
      }

      .hero-title {
        font-size: 35px;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
