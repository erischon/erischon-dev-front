import React from "react";
import "./blog.styles.css"

export const Post = (props) => (
    <main id="post">
    { console.log(props.item.title) }
        <div className="postTitle">
            <h1>Un titre qui claque</h1>
        </div>
        <div className="postImage">
            <img src="img-horizon-test-2.jpg" alt="Image de test" />
        </div>
        <div className="postBody">
            <h2>Body</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab commodi itaque assumenda natus placeat perferendis, fugiat incidunt quis cupiditate quia. Nulla illo adipisci accusamus incidunt aut possimus aspernatur veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab commodi itaque assumenda natus placeat perferendis, fugiat incidunt quis cupiditate quia. Nulla illo adipisci accusamus incidunt aut possimus aspernatur veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab commodi itaque assumenda natus placeat perferendis, fugiat incidunt quis cupiditate quia. Nulla illo adipisci accusamus incidunt aut possimus aspernatur veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab commodi itaque assumenda natus placeat perferendis, fugiat incidunt quis cupiditate quia. Nulla illo adipisci accusamus incidunt aut possimus aspernatur veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab commodi itaque assumenda natus placeat perferendis, fugiat incidunt quis cupiditate quia. Nulla illo adipisci accusamus incidunt aut possimus aspernatur veritatis.</p>
        </div>
        <div className="postInfos">
            <h3>Infos</h3>
        </div>
        <div className="postFooter">
            <h2>Footer</h2>
        </div>
    </main>
)

// <div dangerouslySetInnerHTML={{ __html: this.props.item.body }} />