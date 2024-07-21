import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/blog1.jpg";
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail-container">
        <div className="post-detail_header">
          <PostAuthor />
          <div className="post-detail_buttons">
            <Link to={`posts/drex/edit`} className="btn primary">
              Edit
            </Link>
            <Link to={`posts/drex/delete`} className="btn danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>Post Title</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus
          eius id eum ullam beatae, quibusdam vero odio quisquam, culpa eligendi
          ipsam. Cum iure perspiciatis neque odit, a quam voluptates ullam,
          architecto ipsa, illo perferendis vitae consectetur pariatur! Eum
          ipsam sint quae commodi! Rerum pariatur inventore, unde recusandae
          velit libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt,
          totam explicabo eaque numquam repellat maxime, ullam accusantium qui
          obcaecati tempora. Sapiente a minima expedita, nisi dolor doloribus
          ipsa eius corporis! Optio at possimus quam officiis aut iste est
          voluptatem eum culpa corrupti temporibus quasi hic aspernatur, ut et
          illo libero facere porro quidem nihil! Aut ipsum repellat libero dolor
          optio quas deserunt facere ea velit laudantium expedita odio, et
          doloribus ipsam odit. Nostrum dolor quisquam impedit, facere ullam
          reiciendis iure doloribus dolores asperiores nisi dicta commodi? Ut ea
          itaque error aperiam aliquid illum aspernatur sint porro est eum iure
          accusamus, expedita aliquam, maxime ullam cum sapiente ipsam ex
          doloribus officiis. Neque ipsam dicta earum reiciendis reprehenderit
          voluptate deserunt expedita!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas at
          quod fuga unde sit adipisci, a magni doloremque fugit ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          consectetur natus, nemo nisi eveniet rerum provident, vitae delectus
          esse iusto ex facilis. Beatae eius, assumenda doloremque iste et
          obcaecati labore laboriosam error, cupiditate fugiat ad in iure
          laudantium magnam quis, exercitationem odio distinctio dolorem ab
          perferendis! Doloremque natus illo obcaecati nesciunt blanditiis quasi
          ut modi nobis mollitia porro? Amet error, totam, ipsum minus expedita
          odio vel asperiores sint autem maxime rerum dolorem sunt provident.
          Impedit unde, ducimus qui ratione deserunt reprehenderit, itaque
          porro, perspiciatis excepturi architecto nobis. Libero, exercitationem
          quasi tempore quam esse consectetur maxime fugiat consequuntur ipsa
          nam alias, numquam dicta, natus quidem atque! Consectetur eligendi
          aperiam tempore ipsum tempora deleniti deserunt laborum, non neque
          atque eveniet consequuntur recusandae obcaecati doloremque nostrum,
          quas aliquam nesciunt in minus veritatis! Esse at ratione rerum a ad
          excepturi similique aliquam obcaecati illo aliquid error, quaerat
          harum dolores repellat modi natus tenetur, exercitationem libero saepe
          eveniet. Facere, dicta, placeat sit recusandae optio dignissimos ipsa
          consectetur magni distinctio suscipit nihil laudantium beatae saepe ad
          culpa commodi alias, laboriosam quia! Officia tempora quibusdam
          consequatur nisi perferendis id possimus aliquam repellat voluptates
          iusto minima quis doloremque soluta inventore, ad eaque totam minus
          veritatis nulla quos? Repudiandae.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
