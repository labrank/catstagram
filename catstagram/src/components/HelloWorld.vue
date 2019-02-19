<template>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Catstagram | Rokode</title>
      <link href="/static/css/bootstrap.min.css" rel="stylesheet">
      <link href="/static/css/style.css" rel="stylesheet">
      <link  href="/static/css/animate.css" rel="stylesheet">
      <link href="https://unpkg.com/bootstrap@next/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css" rel="stylesheet"/>
    </head>
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">

        </div>
      </div>
      <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>Catstagram</strong>
          </a>
        </div>
      </div>
    </header>
  <body>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">

          <div class="col-md-4 animated fadeInUp" v-for="cat in response" :key="cat.id">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" :src="cat.ubicacion" alt="Card image cap" style="width:348px;height:348px;">
              <div class="card-body">
                <!-- <p class="card-text">{{ cat }}</p> -->
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="showModal = true" disabled>Ver</button>
                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" v-bind:data-target="'#'+cat.id">View</button> -->
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="switchColor()" disabled>
                      <span :id="cat.id" :class="cat.id" v-if="isFavorite">♥</span>
                      <span :id="cat.id" :class="cat.id" v-else="isFavorite" style="color:#cc0000;">♥</span>
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
            <!--  -->

            <div v-if="showModal">
              <transition name="modal">
                <div class="modal-mask">
                  <div class="modal-wrapper">

                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Cat cute</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="showModal = false">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <p><img class="card-img-top" :src="cat.ubicacion" alt="Card image cap" style="width:348px;height:348px;"></p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" @click="showModal = false" disabled>Close</button>
                          <button type="button" class="btn btn-primary" disabled>Save changes</button>
                        </div>
                      </div>
                    </div>

        </div>
      </div>
    </transition>
  </div>
  <!--  -->
          </div>


        </div>
      </div>
    </div>

            </div>
          </div>
        </transition>
      </div>
  </body>
    <footer class="page-footer font-small blue">

      <div>
        © 2019 Catstagram
      </div>

    </footer>
    </html>
</template>

<script>
import axios from "axios";
import '../assets/js/jquery-slim.min.js';
import "bootstrap-vue/dist/bootstrap-vue.css"

export default {
    name: 'HelloWorld',
    data () {
        return {
            ip: "",
            input: {
                firstname: "",
                lastname: ""
            },
            response: "",
            showModal:false,
            isFavorite:false
        }
    },
    mounted() {
        axios({ method: "GET", "url": "https://catstagram-juan.herokuapp.com/cats" }).then(result => {
            this.response = result.data;
        }, error => {
            console.error(error);
        });
    },
    methods: {
      switchColor() {
      isFavorite = !isFavorite;
    },
    },
    components: {
    'bootstrap-modal': require('vue2-bootstrap-modal')
},
}
</script>
