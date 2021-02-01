<template>
  <div class="toggler" :style="{ ...buttonSizeStyles }">
    <label>
      <input type="checkbox" :checked="checked" @input="updateHandler">
      <span></span>
    </label>
    <strong>
      <slot/>
    </strong>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
    checked: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      buttonWidth: 50,
      buttonHeight: 30,
      toggleDiameter: 26,
      toggleWider: 34,
    }
  },
  computed: {
    buttonSizeStyles() {
      return {
        '--button-width': this.buttonWidth * this.size + 'px',
        '--button-height': this.buttonHeight * this.size + 'px',
        '--toggle-diameter': this.toggleDiameter * this.size + 'px',
        '--toggle-wider': this.toggleWider * this.size + 'px',
      }
    }
  },
  methods: {
    updateHandler(event) {
      this.$emit('updated', event.target.checked)
    }
  }
}
</script>

<style scoped>
.toggler {
  --button-width: 500px;
  --button-height: 295px;
  --toggle-diameter: 255px;
  --toggle-wider: 333px;

  --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
  --toggle-shadow-offset: 10px;
  --color-grey: #E9E9E9;
  --color-dark-grey: #39393D;
  --color-green: #30D158;
}

span {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: .3s all ease-in-out;
}

span::after {
  content: '';
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  left: 0;
  transform: translateX(var(--button-toggle-offset));
  box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);
  transition: .3s all ease-in-out;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

input[type="checkbox"]:checked + span {
  background-color: var(--color-green);
}

input[type="checkbox"]:checked + span::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
  box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:active + span::after {
  width: var(--toggle-wider);
}

input[type="checkbox"]:checked:active + span::after {
  transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}

.toggler {
  display: inline-flex;
  flex-direction: row;
}

.toggler strong {
  line-height: var(--button-height);
  font-size: var(--toggle-diameter);
  margin-left: calc(var(--toggle-diameter) / 4);
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #1C1C1E;
  }

  span {
    background-color: var(--color-dark-grey);
  }
}
</style>