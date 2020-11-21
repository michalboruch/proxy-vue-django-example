<template>
  <button @click="getFoo">GET foo!</button>
  <p><b>FOO is: </b>{{ foo.foo }}</p>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Foo',
  props: {},
  data() {
    return {
      foo: '-'
    }
  },
  methods: {
    getFoo() {
      let self = this;
      axios.get('http://vue-django.com/api/v1/foo/')
      .then(function (response) {
        self.foo = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
