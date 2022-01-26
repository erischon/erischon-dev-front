import React from "react";
import "./blog.styles.css"

export const Blog = (props) => (
    <main id="post">
        <div className="postTitle">
            <h1>Un titre d'article qui claque sa mère</h1>
            { console.log(props.post[0].title) }
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