<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}" v-clickoutside="clickedOutside">
      <input class="form-control" type="text" :value="value" @input="updateValue($event.target.value)" @keydown.enter = 'enter' @keydown.down = 'down' @keydown.up = 'up' v-on:focus="setFocus" maxlength="64">
      <ul class="dropdown-menu">
        <li v-for="(suggestion, index) in matches" v-bind:class="{'active': isActive(index)}" @click="suggestionClick(index)" :key="suggestion.index">
          <a href="#">{{ suggestion.name }}<!-- <span class="text-primary"> {{ suggestion.remaining_quantity}}</span>--></a>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  props:{
    clickout:{
      type:Boolean,
      required:false,
      value:true
    },
    value:{
      type:String,
      required:true
    },
    suggestions:{
      type:Array,
      required:true
    }
  },
  data (){
    return {
      open:false,
      current:0,
    }
  },
  computed:{
    // Filtering the suggestion based on the input
    matches () {
      return this.suggestions.filter((obj) => {
        return obj.name.toLowerCase().indexOf(this.value.toLowerCase()) >= 0
      })
    },
    openSuggestion () {
      return this.selection !== '' &&
             this.matches.length !== 0 &&
             this.open === true
    }
  },
  methods: {
    setFocus(){
      if (this.open === false) {
        this.open = true
        this.current = 0
      }
    },
    updateValue (value) {
      if (this.open === false) {
        this.open = true
        this.current = 0
      }
      this.$emit('input', value)
    },
    // When enter pressed on the input
    enter () {
      this.$emit('input', this.matches[this.current].name)
      this.open = false
      // this.$emit('input', value)
    },
    // When up pressed while suggestions are open
    up () {
      if (this.current > 0) {
        this.current--
      }
    },
    // When up pressed while suggestions are open
    down () {
      if (this.current < this.matches.length - 1) {
        this.current++
      }
    },
    // For highlighting element
    isActive (index) {
      return index === this.current
    },
    // When one of the suggestion is clicked
    suggestionClick (index) {
      this.$emit('input', this.matches[index].name)
      this.open = false
    },
    clickedOutside () {
      if (!this.clickout){
        // console.log("Outside")
        // this.$emit('input', value)
        this.open = false
      }
      if (this.value==''){
        // console.log("Outside")
        // this.$emit('input', value)
        this.open = false
      }
    }
  },
  directives: {
    clickoutside: {
      bind:function(el, binding, vnode){
      el.event = function (event) {
        if (!(el == event.target || el.contains(event.target))) {
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener('click', el.event)
    },
    unbind: function (el) {
      document.body.removeEventListener('click', el.event)
    }
      }
    }
}
</script>