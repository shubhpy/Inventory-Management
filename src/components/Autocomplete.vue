<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}" v-clickoutside="clickedOutside">
        <input class="form-control"  type="text" :value="value" @input="updateValue($event.target.value)"
          @keydown.enter = 'enter'
          @keydown.down = 'down'
          @keydown.up = 'up'
          v-on:focus='setfocus'
        >
        <ul class="dropdown-menu">
            <li v-for="(suggestion, index) in matches"
                v-bind:class="{'active': isActive(index)}"
                @click="suggestionClick(index)"
            >
              <a href="#">{{ suggestion.item }} <small>{{ suggestion.quantity }}</small>
              </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      open: false,
      current: 0,
    }
  },
  computed: {
    // Filtering the suggestion based on the input
    matches () {
      return this.suggestions.filter((obj) => {
        return obj.item.indexOf(this.value) >= 0
      })
    },
    openSuggestion () {
      return this.selection !== '' &&
             this.matches.length !== 0 &&
             this.open === true
    }
  },
  methods: {
    setfocus(){
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
      this.$emit('input', this.matches[this.current].item)
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
      this.$emit('input', this.matches[index].item)
      this.open = false
    },
    clickedOutside () {
      console.log("Outside")
      // this.$emit('input', value)
      this.open = false
    }
  },
  // events :{
  //   clickedOutside: function (event) {
  //     console.log("Outside")
  //     this.open = false
  //     this.$emit('input', value)
  //   }
  // },
  directives: {
    clickoutside: {
      bind: function (el, binding, vnode) {
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