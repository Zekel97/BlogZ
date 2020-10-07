import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {

  public state = {
    posts: []
  }

componentDidMount() {
  console.log("hey");
  axios.get("http://localhost:3000/api/posts")
  .then((res) => {
    console.log(res.data.data.posts);
    this.setState({posts: res.data.data.posts});
  });

}
render(){
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Blog</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blog</IonTitle>
          </IonToolbar>
        </IonHeader>

        {this.state.posts.reverse().map((item) => (
                <IonCard>

                <IonCardHeader>

                <IonCardTitle>
                {item.title}

                </IonCardTitle>

                </IonCardHeader>
                <IonCardContent>
                  <p>{item.body}</p>
                </IonCardContent>
                </IonCard>

      ))}

      </IonContent>
    </IonPage>
  );
      }
};

export default Blog;