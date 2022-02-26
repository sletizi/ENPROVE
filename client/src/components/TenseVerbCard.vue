<template>
<v-container fluid class="pr-6 ps-6 me-6">

  <v-row v-for="nr in 4" :key="nr" class = 'mx-auto align-center justify-center'>
            <v-col  
            v-for="nc in 3" 
            :key="nc"
            md="3"
            sm="6"
            xs="6"
            class = 'mx-auto align-center justify-center'>

    <v-card class="mx-auto" min-height='600px'>
      <v-card-text>
        <p class="text-h5 text--primary font-weight-black text-center">
          {{verbsChuncked[nc-1][nr-1].name}}
        </p>
        <div class="text--primary text-center font-weight-bold">
          <p class = 'green--text'> {{verbsChuncked[nc-1][nr-1].form}}</p>
        </div>
        <p> When use it: </p>
        <div>
          <ul v-for="(macro_usage, macro_index) in verbsChuncked[nc-1][nr-1].usages" :key="macro_index">
            <li v-for="(usage, usage_index) in macro_usage" class= "font-weight-black ma-4" :key="usage_index"> {{usage}}
              <ul>
                <li class= "font-weight-light font-italic"> {{ verbsChuncked[nc-1][nr-1].examples[macro_index][usage_index]}} </li>
              </ul>
            </li>
            <br>
          </ul>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal = true" v-if="verbsChuncked[nc-1][nr-1].moreExamples.length > 0">
          See more examples
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
          <v-card-text class="pb-0">
            <p class="text-h7 text--primary">
              EXAMPLES - {{verbsChuncked[nc-1][nr-1].name}}
            </p>
            <ul>
              <li v-for="(example, ex_index) in verbsChuncked[nc-1][nr-1].moreExamples" :key="ex_index">{{example}}</li>
            </ul>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
    </v-col>      
  </v-row>
  </v-container>      


</template>
<script>
import verbs from '@/data/verb-tenses.json'; 
  export default {
    name: 'TenseVerbCardComponent',
    methods: {
        subArrays: function (size, array) {
            const chunked_arr = [];
            let index = 0;
            while (index < array.length) {
                chunked_arr.push(array.slice(index, size + index));
                index += size;
            }
            return chunked_arr;
        }
    },
    computed:{
        verbsChuncked(){
            var split = this.subArrays(4,verbs)
            console.log(split)
            return split
        } 
    },
    data() {
        return {
            reveal: false,
        };
    },
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>