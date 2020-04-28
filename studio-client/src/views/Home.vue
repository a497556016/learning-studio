<template>
  <div>
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-carousel height="280" hide-delimiters style="background-color: #393939">
          <v-carousel-item
                  title="aaa"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
          >
            <v-img src="../assets/2020newyear.jpg" contain height="280"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="8" md="8" sm="12">
          <v-card>
            <v-card-title>
              笔录列表
              <v-spacer></v-spacer>
              <v-btn type="primary" to="/blog/edit/0">
                <v-icon>mdi-plus</v-icon>
                <span>添加</span>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-list three-line>
                <template v-for="(item, index) in items">
                  <div :key="index">
                    <v-divider v-if="index !== 0"></v-divider>

                    <v-list-item :to="'/blog/details/'+item.id">
                      <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4" md="4" sm="12">
          <v-card>
            <v-card-title>标签</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="d-flex justify-start">
              <v-row>
                <v-col cols="12" lg="3" md="4" sm="6"><v-btn depressed small class="ml-2">日记</v-btn></v-col>
                <v-col cols="12" lg="3" md="4" sm="6"><v-btn depressed small class="ml-2">心得</v-btn></v-col>
                <v-col cols="12" lg="3" md="4" sm="6"><v-btn depressed small class="ml-2">教程</v-btn></v-col>
                <v-col cols="12" lg="3" md="4" sm="6"><v-btn depressed small class="ml-2">教程</v-btn></v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import {createNamespacedHelpers} from "vuex";
  const documentStore = createNamespacedHelpers("document");
export default {
  name: 'home',
  components: {

  },
  data: () => ({

  }),
  computed: {
    ...documentStore.mapState({
      items: state => state.documents
    })
  },
  mounted(){
    this.loadData();
  },
  methods: {
    ...documentStore.mapActions({
      loadData: 'findByPage'
    }),
    toDetails(){

    }
  }
}
</script>
