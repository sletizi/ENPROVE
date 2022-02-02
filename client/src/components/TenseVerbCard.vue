<template>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <p class="text-h5 text--primary font-weight-black text-center">
          {{verb.name}}
        </p>
        <div class="text--primary text-center font-weight-bold">
          <p> {{verb.form}}</p>
        </div>
        <p> When use it: </p>
        <ul v-for="(macro_usage, macro_index) in verb.usages" :key="macro_index">
          <li v-for="(usage, usage_index) in macro_usage" :key="usage_index" class= "font-weight-medium"> {{usage}}
            <ul>
              <li class= "font-weight-light"> {{ verb.examples[macro_index][usage_index] }} </li>
            </ul>
          </li>
          <br>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal = true" v-if="verb.moreExamples.length > 0">
          See more examples
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card v-if="reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
          <v-card-text class="pb-0">
            <p class="text-h7 text--primary">
              EXAMPLES - {{verb.name}}
            </p>
            <ul>
              <li v-for="(example, index) in verb.examples" :key="index">{{example}}</li>
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
</template>
<script>
  export default {
    name: 'TenseVerbCardComponent',
    props: {
      verb: {
        required: true, 
        type: Object,
        default: function () { return {} }
    },
    },
    data() {
      return {
        reveal: false,
      };
    }
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